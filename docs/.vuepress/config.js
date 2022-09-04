module.exports = {
  title: 'VuePress',
  description: 'this is ganwei‘s blog',
  theme: 'reco',
  base: '/my-blog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'Github', link: 'https://github.com/ganweijs' },
            // { 
            //     text: '更多', 
            //     items: [
            //         { text: '', link: '' }
            //     ]
            // }
        ],
        sidebar: [
            {
                title: '第一章',
                path: '/',
                collapsable: true, // 不折叠
                children: [
                    { title: "js", path: "/" }
                ]
            }
        ],
        subSidebar: 'auto'
    }   
}