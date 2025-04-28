import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    },
    zh: {
      label: '中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh/guide' // 默认 /en/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    },
    en: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/en/guide' // 默认 /en/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  },

  title: "CosingPlus",
  description: "CosingPlus 工程帮助文档",
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/' },
      { text: '参考', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '前端文档',
        collapsed: false, // 默认展开
        items: [
          { text: '快速搭建', link: '/markdown-examples' },
          { text: '底层公共库', link: '/examples/api-examples' },
          { text: '组件库', link: '/examples/api-examples' },
          { text: '打包配置', link: '/examples/api-examples' },
          { text: '规范化', link: '/examples/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
