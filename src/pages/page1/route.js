export default {
    name: 'page1',
    path: '/page1',
    loadAction: () => import(/* webpackChunkName: 'page1' */ './index'),
    canParallel: true,
    chunks: ['page1'],
    translations: ['page1'],
};
//# sourceMappingURL=route.js.map