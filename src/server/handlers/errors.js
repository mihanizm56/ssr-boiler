import PrettyError from 'pretty-error';
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');
export const errors = (err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_next) => {
    console.error(pe.render(err));
    res.status(err.status || 500);
    res.send('<!doctype html><html><body><h1>Error</h1></body></html>');
};
//# sourceMappingURL=errors.js.map