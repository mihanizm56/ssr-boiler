import promiseSequential from 'promise-sequential';
import { getActivatedRoutes } from '@/modules/router/_utils';
const prepareError = (error) => ({
    ...error,
    status: error.status || 500,
});
export const actionHandler = (router) => async (toState, fromState) => {
    const { routes, redux, cookies, i18n } = router.getDependencies();
    const actionParams = {
        router,
        toState,
        fromState,
        redux,
        cookies,
        i18n,
    };
    let parentError = null;
    const getHandler = (route) => {
        return () => {
            return new Promise((resolve, reject) => {
                if (route.actionResult &&
                    route.actionResult.useCache === true &&
                    !parentError &&
                    !route.actionResult.error &&
                    !route.actionResult.redirect) {
                    // Включен кеш для роута
                    resolve(route);
                }
                else if (parentError) {
                    // Родительский экшен роута завершился с ошибкой
                    resolve(Object.assign(route, { actionResult: parentError }));
                }
                else if (typeof route.loadAction === 'function' ||
                    typeof route.action === 'function') {
                    // Промис экшена роута
                    let actionPromise;
                    if (typeof route.loadAction === 'function') {
                        actionPromise = new Promise(resolveActionLoad => {
                            route
                                .loadAction(redux)
                                .catch(err => {
                                // Если не удалось загрузить чанк переходим на url напрямую
                                // Кейс возможен при выкатке новой версии когда имена чанков меняются
                                if (__CLIENT__) {
                                    // Создаем промис который не резолвится для избежания вывода ошибки перехода
                                    resolve(new Promise(() => { }));
                                    // Перезапрашиваем страницу по новому url с сервера
                                    window.location.href = toState.path;
                                }
                                else {
                                    // На сервере корректно обрабатываем ошибку
                                    reject(err);
                                }
                            })
                                .then((loaded) => {
                                resolveActionLoad(loaded.default);
                            })
                                .catch(reject);
                        });
                    }
                    else {
                        actionPromise = Promise.resolve(route.action);
                    }
                    // Run action promise
                    actionPromise.then((action) => {
                        action(actionParams)
                            .then((result) => {
                            if (result.error) {
                                parentError = prepareError(result.error);
                                return Object.assign(route, {
                                    actionResult: prepareError(result.error),
                                });
                            }
                            return Object.assign(route, { actionResult: result });
                        })
                            .then((result) => {
                            if (result.actionResult.redirect) {
                                reject(result);
                            }
                            resolve(result);
                        })
                            .catch(reject);
                    });
                }
                else {
                    resolve(Object.assign(route, { actionResult: null }));
                }
            });
        };
    };
    const activatedRoutes = getActivatedRoutes(toState, fromState, routes);
    const { result } = activatedRoutes.reduce((acc, route, index, arr) => {
        const newAcc = {
            result: [...acc.result],
            parallelStack: [...acc.parallelStack],
        };
        if (route.canParallel) {
            newAcc.parallelStack.push(getHandler(route));
            if (index === arr.length - 1) {
                const copiedParallelPromises = [...newAcc.parallelStack];
                newAcc.result.push(() => Promise.all(copiedParallelPromises.map((createPromise) => createPromise())));
                newAcc.parallelStack = [];
            }
        }
        else {
            if (newAcc.parallelStack.length > 0) {
                const copiedParallelPromises = [...newAcc.parallelStack];
                newAcc.result.push(() => Promise.all(copiedParallelPromises.map((createPromise) => createPromise())));
                newAcc.parallelStack = [];
            }
            newAcc.result.push(getHandler(route));
        }
        return newAcc;
    }, {
        result: [],
        parallelStack: [],
    });
    return promiseSequential(result);
};
//# sourceMappingURL=action-handler.js.map