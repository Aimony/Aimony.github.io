---
aside: false
hidden: true
readingTime: false
date: false
author: false
sidebar: false
---

::: details 友链申请格式


- **站点名称：** `Aimony的小站`

- **站点地址：** `http://blog.linser.shop`

- **一句话：** `但愿岁月如客，来去皆从容。`

- **头像链接：** `https://cravatar.cn/avatar/f1dcdc8fa782b81824df5d67022e4d4a`

- **其他平台：** `[Github/Twitter...](link)`


:::
<script setup>
	import { VPTeamMembers } from 'vitepress/theme';
  const webSiteSvg = '<svg t="1696924383734" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1978" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M736 864H288c-17.6 0-32 14.4-32 32s14.4 32 32 32h448c17.6 0 32-14.4 32-32s-14.4-32-32-32zM832 96H192c-70.4 0-128 57.6-128 128v416c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V224c0-70.4-57.6-128-128-128zM576 544c0 17.6-14.4 32-32 32H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h256c17.6 0 32 14.4 32 32z m192-224c0 17.6-14.4 32-32 32H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h448c17.6 0 32 14.4 32 32z" p-id="1979"></path></svg>'; 
	const authoritys = [
      {
        avatar: 'https://cdn.imufeng.cn/mblog/yyx.png',
        name: 'Evan You',
        title: 'Creator',
        links: [
          { icon: {svg: webSiteSvg}, link: 'https://evanyou.me/' },
          { icon: 'github', link: 'https://github.com/yyx990803' },
          { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
        ]
      },
      {
        avatar: 'https://cdn.imufeng.cn/mblog/ruanyifeng.png',
        name: '阮一峰',
        title: '一个从未谋面的引路人',
        links: [
          { icon: {svg: webSiteSvg}, link: 'https://www.ruanyifeng.com/' },
          { icon: 'github', link: 'https://github.com/ruanyf' },
          { icon: 'twitter', link: 'https://twitter.com/ruanyf' }
        ]
      },
    ];
const friends = [
      {
        avatar: 'https://sugarat.top/logo.png',
        name: '粥里有勺糖',
        title: '你的指尖,拥有改变世界的力量',
        links: [
          { icon: {svg: webSiteSvg}, link: 'https://sugarat.top/' },
          { icon: 'github' , link: 'https://github.com/ATQQ' },
          { icon: 'twitter' , link: 'https://twitter.com/Mr_XiaoZou' },
        ]
      },
       {
         avatar: 'https://cdn.imufeng.cn/mblog/avatar-1.jpg',
         name: '沐风的个人空间',
         title: '一名后端小白的互联网自留地',
         links: [
           { icon: {svg: webSiteSvg}, link: 'https://www.imufeng.cn/' },
           { icon: 'github', link: 'https://github.com/i-mufeng' }
         ]
       }
]
</script>

### 膜拜大佬

<VPTeamMembers size="medium" :members="authoritys" />

### 友链

<VPTeamMembers size="small" :members="friends" />
