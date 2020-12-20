export const home = (axios, serviceUrl) => {
    return {
        fetchHome: async () => {
            const res = await axios({
                url: `${serviceUrl}/api/home`,
                method: 'GET',
            });
            return res.data;
        },
    };
};
//# sourceMappingURL=home.js.map