module.exports = {
  title: 'er ', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'er blog' , // meta 中的描述文字，用于SEO
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      // { text: '文章', link: '/pages/article/分组2/文章1.md' },
      { text: '文章', link: '/pages/article/group1/test1.md' },
      {
        text: '关于我们',
        ariaLabel: '关于我们',
        items: [
          { text: '业务', link: '/pages/about/business' },
          { text: '成员', link: '/pages/about/member' }
        ]
      },
      { text: 'github', link: 'https://google.com' },
    ],
    sidebar: {
      '/pages/article/':[         
        {
            title: 'group1',   // 一级菜单名称
            // collapsable: false, // false为默认展开菜单, 默认值true是折叠,
            // sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
            children: [
                ['group1/test1', 'test1'],  //菜单名称为'文章1'，跳转至/pages/folder1/test1.md
                ['group1/test2', 'test2']  //菜单名称为'文章1'，跳转至/pages/folder1/test1.md

            ]
        },
        
        {
            title: 'group2',
            // collapsable: false, 
            children: [
              ['group2/test1.md', '文章1'],  //菜单名称为'文章1'，跳转至/pages/folder1/test1.md
              ['group2/test2', '文章2'] //菜单名称为'文章1'，跳转至/pages/folder1/test1.md

          ]
        }
      ],
    }
  }
  // 注入到当前页面的 HTML <head> 中的标签
  // head: [
  //     ['link', 
  //         { rel: 'icon', href: '/egg.png' }
  //         //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
  //     ],  
  // ],
}
