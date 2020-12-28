export default {
  name: 'test-page',
  path: '/test-page',
  loadAction: () => import(/* webpackChunkName: 'test-page' */ './index'),
  canParallel: true,
  chunks: ['test-page'],
};
