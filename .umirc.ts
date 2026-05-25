import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: { type: 'none' },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/home/index', title: '首页' },
        { path: '/about', component: '@/pages/about/index', title: '关于' },
        { path: '/list', component: '@/pages/list/index', title: '列表' },
      ],
    },
  ],
  fastRefresh: {},
});
