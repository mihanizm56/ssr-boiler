export const i18NextMockBackend = (app) => {
  app.get('/I18N/page-1/ru', (_, res) =>
    res.status(200).json({
      translate: {
        'test-key': 'Пример перевода 1',
      },
    }),
  );

  app.get('/I18N/page-2/ru', (_, res) =>
    res.status(200).json({
      translate: {
        'test-key': 'Пример перевода 2',
      },
    }),
  );

  app.get('/I18N/page-1/en', (_, res) =>
    res.status(200).json({
      translate: {
        'test-key': 'Translation example 1',
      },
    }),
  );

  app.get('/I18N/page-2/en', (_, res) =>
    res.status(200).json({
      translate: {
        'test-key': 'Translation example 2',
      },
    }),
  );
};
