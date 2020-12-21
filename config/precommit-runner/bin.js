/* eslint-disable no-console */
const { Listr } = require('listr2');
const { exec } = require('child_process');
const { promisify } = require('util');

const asyncExec = promisify(exec);

const runner = async () => {
  const tasksRunner = new Listr(
    [
      {
        title: 'Запуск Eslint and Stylelint',
        task: async () => {
          await asyncExec(
            'npm run lint',
          );
        },
      },
      {
        title: 'Проверка типизации',
        task: async () => {
          await asyncExec(
            'npx tsc',
          );
        },
      },
      {
        title: 'Сборка приложения',
        task: async () => {
          await asyncExec('npm run build');
        },
      },
    ],
    {
      rendererOptions: { collapse: false },
      concurrent: true,
    },
  );

  try {
    await tasksRunner.run();
  } catch (error) {
    console.log(error.stdout || error.message);
    process.exit(1);
  }
};

runner();
