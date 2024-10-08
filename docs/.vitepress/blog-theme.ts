// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://www.imufeng.cn'

// const RSS: Theme.RSSOptions = {
//   title: 'Aimony的个人博客',
//   baseUrl,
//   copyright: 'Mblog © 2021-2024 Created by 沐风',
//   description: '但愿岁月如客，来去皆从容。（后端开发技术交流）',
//   language: 'zh-cn',
//   image: baseUrl + '/logo.svg',
//   favicon: baseUrl + '/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,

  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // 如果npx pagefind 时间过长，可以手动将其安装为项目依赖 pnpm add pagefind
  search: false,

  taskCheckbox: true,

  // 主题色修改
  themeColor: 'vp-green',

  // 文章默认作者
  author: 'Aimony',

  comment: {
    repo: 'Aimony/Aimony.github.io',
    repoId: 'R_kgDOM73sRg',
    category: 'General',
    categoryId: 'DIC_kwDOM73sRs4CjI6X',
  },
  // buttonAfterArticle: {
  //   openTitle: '赞赏一下',
  //   closeTitle: '下次一定',
  //   // content: '<img src="https://cdn.imufeng.cn/mblog/5dac797f91625543d0fdda29b0336eca.jpg" alt="赞赏码">',
  //   icon: 'wechatPay',
  // },

  footer: [
    {
      message: ['😆 modify by Aimony'],
      copyright: 'MIT License  粥里有勺糖 | CC BY-NC-SA 4.0 国际许可协议 沐风',
      version: true,
    },
  ],

  popover: {
    title: '公告',
    body: [
      {
        type: 'text',
        content: '纯md编写工作量较大，随缘更新',
      },
      // {
      //   type: 'image',
      //   src: 'https://cdn.imufeng.cn/mblog/mufeng_wechatcode_transparent.png',
      // },
      // {
      //   type: 'button',
      //   content: `本站已支持IPV6访问`,
      //   link: 'https://ipw.cn/ipv6webcheck/?site=www.imufeng.cn',
      // },
    ],
    footer: [
      {
        type: 'text',
        content: '由 飞书云文档 提供创作支持',
      },
    ],
    duration: 0,
  },
  // 看板娘
  oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: 'https://oml2d-models.sugarat.top/Senko_Normals/senko.model3.json',
      },
      {
        path: 'https://oml2d-models.sugarat.top/mai/model.json',
      },
    ],
  },
  mermaid: true,
})

export { blogTheme }
