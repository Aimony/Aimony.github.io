import { defineConfig } from '@sugarat/theme/node'
import { blogTheme } from './blog-theme'

import timeline from 'vitepress-markdown-timeline'
import mdItSub from 'markdown-it-sub'
import mdItSup from 'markdown-it-sup'
import mdItMark from 'markdown-it-mark'
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'
// import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons' // @see https://github.com/yuyinws/vitepress-plugin-group-icons

import { La51Plugin } from 'vitepress-plugin-51la'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题配置
  extends: blogTheme,
  lang: 'zh-cn',
  title: 'Aimony的个人空间',
  description: 'Aimony的个人空间',
  head: [
    [
      'script',
      {},
      `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9911a6b0c7d4d1799af72772dd527b1c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`,
    ],
  ],
  vite: {
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme'],
    },
    // 使用插件加载
    plugins: [
      pagefindPlugin({
        customSearchQuery: chineseSearchOptimize,
        btnPlaceholder: '搜索',
        placeholder: '搜索文档',
        emptyText: '空空如也',
        heading: '共: {{searchResult}} 条结果',
      }),
      // groupIconVitePlugin(),
      La51Plugin({
        id: '475303',
        ck: '3JvYouexrZJnA5FL',
        apply: 'all',
      }),
    ],
  },
  lastUpdated: true,
  markdown: {
    math: true,
    config: md => {
      md.use(timeline)
      md.use(mdItSub)
      md.use(mdItSup)
      md.use(mdItMark)
      // md.use(groupIconMdPlugin)
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/Aimony/Aimony.github.io/blob/main/docs/:path',
      text: '在 Github 打开',
    },
    nav: [
      { text: '', link: '/' },
      {
        text: '后端',
        items: [
          { text: 'JAVA', link: '/back-end/java/' },
          { text: '数据库', link: '/back-end/database/' },
          { text: 'Maven', link: '/back-end/maven/' },
          { text: 'Mybatis', link: '/back-end/mybatis/' },

          {
            text: 'Spring全家桶',
            items: [
              { text: 'Spring', link: '/back-end/spring/spring' },
              { text: 'SpringBoot', link: '/back-end/spring/spring-boot/' },
              { text: 'SpringSecurity', link: '/back-end/spring/spring-security/' },
            ],
          },
          {
            text: 'Spring Cloud',
            items: [
              { text: '注册中心', link: '/back-end/spring-cloud/registry/' },
              { text: '微服务网关', link: '/back-end/spring-cloud/gateway/' },
              { text: '微服务保护', link: '/back-end/spring-cloud/sentinel/' },
              { text: '消息队列', link: '/back-end/spring-cloud/message-queue/' },
              { text: '分布式事务', link: '/back-end/spring-cloud/distributed-transaction/' },
              { text: '分布式理论', link: '/back-end/spring-cloud/distributed-theory/' },
              { text: '分布式缓存', link: '/back-end/spring-cloud/distributed-cache/' },
              { text: '分布式链路追踪', link: '/back-end/spring-cloud/skywalking/' },
            ],
          },
        ],
      },
      {
        text: '前端',
        items: [
          { text: '三件套', link: '/front-end/hcj/' },
          {
            text: '框架',
            items: [
              { text: 'Vue', link: '/front-end/vue/' },
              { text: 'React', link: '/front-end/react/' },
            ],
          },
        ],
      },
      {
        text: '运维',
        items: [
          { text: 'Linux', link: '/maintenance/linux/' },
          { text: 'Docker', link: '/maintenance/docker/' },
          { text: 'Nginx', link: '/maintenance/nginx/' },
          { text: 'Github Action', link: '/maintenance/github-action/' },
        ],
      },
      {
        text: '其他',
        items: [
          { text: 'Go', link: '/back-end/go/' },
          { text: 'Python', link: '/back-end/python/' },
          { text: 'Netty', link: '/back-end/netty/' },
          { text: '设计模式', link: '/back-end/design-pattern/' },
          { text: 'ELK', link: '/back-end/netty/elk' },
          { text: 'SpringWebFlux', link: '/back-end/spring/spring-webflux/' },
        ],
      },
      {
        text: '计算机基础',
        items: [
          { text: '计算机网络', link: '/computer-basics/network/' },
          { text: '操作系统', link: '/computer-basics/operating-system/' },
          { text: '数据结构与算法', link: '/computer-basics/data-structure/' },
        ],
      },
      {
        text: '折腾日志',
        items: [
          { text: 'Linux 企业级运维', link: '/training/linux/' },
          { text: '软件工具分享', link: '/training/software/' },
          { text: '博客配置', link: '/training/blog/' },
        ],
      },
      {
        text: '面试分享',
        items: [
          { text: '面试刷题', link: '/interview/question-by-day/' },
          { text: '面经分享', link: '/interview/skills/' },
        ],
      },
      {
        text: '杂谈日志',
        items: [
          { text: '科技周报', link: '/notes/technology-weekly/' },
          { text: '读书笔记', link: '/notes/reading-notes/' },
          { text: '生活随笔', link: '/notes/life-notes/' },
        ],
      },
      { text: '友链', link: '/friend-link-list/' },
      { text: '关于', link: '/about/' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Aimony',
      },
    ],
    lastUpdated: {
      text: '更新于',
    },
  },
})
