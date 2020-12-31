export const lazyLoader = (pageName: string) => {
  if (pageName === 'home') {
    // eslint-disable-next-line
    import(/* webpackChunkName: 'home' */ '@/pages/home/index');

    return;
  }

  if (pageName === 'page1') {
    // eslint-disable-next-line
    import(/* webpackChunkName: 'page1' */ '@/pages/page1/index');

    return;
  }

  if (pageName === 'page2') {
    // eslint-disable-next-line
    import(/* webpackChunkName: 'page2' */ '@/pages/page2/index');

    return;
  }

  if (pageName === 'test-page') {
    // eslint-disable-next-line
    import(/* webpackChunkName: 'test-page' */ '@/pages/test-page/index');
  }
};