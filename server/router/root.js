const express = require('express');
const { countriesListRouter } = require('./countries');
const { i18nRouter } = require('./i18n');

const rootRouter = express.Router();

rootRouter.use('/listCountries', countriesListRouter);
rootRouter.use('/I18N', i18nRouter);

module.exports.rootRouter = rootRouter;
