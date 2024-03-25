export default {
  name: 'lj-component',
  build: {
    packageManager: 'pnpm',
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/component/',
    },
  },
  site: {
    title: 'lj-component',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
      {
        title: 'directives',
        items: [
          {
            path: 'scroll-x',
            title: 'scroll-x pc横向滚动',
          },
          {
            path: 'mutil-click',
            title: 'mutilClick多点触发',
          },
        ],
      },
    ],
  },
}
