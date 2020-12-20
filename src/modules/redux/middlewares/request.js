const REQUEST_POSTFIX = 'REQUEST';
const SUCCESS_POSTFIX = 'SUCCESS';
const FAILURE_POSTFIX = 'FAILURE';
export const request = () => next => action => {
    // FSA compliant
    const { type, meta } = action;
    const arTypeName = type.split('_');
    if (arTypeName[arTypeName.length - 1] === REQUEST_POSTFIX && meta.promise) {
        // Remove _REQUEST suffix
        const typeName = type.split('_').slice(0, -1).join('_');
        // Extend the action.meta to let it know we're beginning an optimistic update
        next({
            ...action,
            payload: {
                isLoading: true,
                error: null,
            },
            meta,
        });
        meta.promise
            .then((data) => {
            next({
                type: `${typeName}_${SUCCESS_POSTFIX}`,
                payload: {
                    isLoading: false,
                    error: null,
                    data,
                },
                meta,
            });
        })
            .catch((error) => {
            next({
                type: `${typeName}_${FAILURE_POSTFIX}`,
                payload: {
                    isLoading: false,
                    error,
                },
                meta,
            });
        });
    }
    else {
        return next(action);
    }
};
//# sourceMappingURL=request.js.map