export const handleRedirect = (router) => ({
    onTransitionError: (toState, fromState, error) => {
        if (error && error.actionResult && error.actionResult.redirect) {
            const { redirect } = error.actionResult;
            if (redirect.route && redirect.route.path) {
                router.navigate(redirect.route.path, redirect.route.params, {
                    ...(redirect.route.options ? redirect.route.options : {}),
                });
            }
            else if (redirect.url) {
                window.location.href = redirect.url;
            }
        }
    },
});
//# sourceMappingURL=handle-redirect.js.map