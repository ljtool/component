// https://aresnine.github.io/technology/vantcli/
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
            path: 'scroll',
            title: 'pc鼠标拖拽scroll',
          },
          {
            path: 'mutil-click',
            title: 'mutilClick多点触发',
          },
          {
            path: 'lazy',
            title: '图片视口懒加载',
          },
        ],
      },
    ],
  },
}
