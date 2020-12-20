import Cookie from 'cookie-universal';
export const configureCookies = (req, res) => {
    let cookies = null;
    if (req && res) {
        cookies = Cookie(req, res);
    }
    else {
        cookies = Cookie();
    }
    return cookies;
};
//# sourceMappingURL=index.js.map