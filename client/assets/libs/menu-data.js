const menuData = {
  '/admin': {
    logo: '管理后台',
    menuRight: [
      {name: '博客', url: '/'},
      {name: '关于', url: '/about'}
    ],
    menuCenter: [
      {
        name: '博客管理', icon: 'ios-book', subItems: [// ios-happy ios-water ios-construct
          {name: '博客管理11', url: '/blog/list/android'},
          {name: '原创小说', url: '/blog/list/novel'}
        ]
      }, {
        name: '博客管理2', icon: 'ios-happy', subItems: [
          {name: '心情随笔', url: '/share/mood'},
          {name: '资源收藏', url: '/share/collection'},
          {name: '留言板', url: '/share/message'}
        ]
      }, {
        name: '博客管理3', icon: 'ios-water', url: '/'
      }
    ]
  },
  '/': {
    logo: '雷超',
    menuRight: [
      {name: '首页', url: '/'},
      {name: '关于', url: '/about'}
    ],
    menuCenter: [
      {
        name: '学无止境', icon: 'ios-book', subItems: [// ios-happy ios-water ios-construct
          {name: 'Android', url: '/blog/list/android'},
          {name: 'Java', url: '/blog/list/java'},
          {name: 'Html/Css/Js', url: '/blog/list/web'},
          {name: 'Node.js', url: '/blog/list/node'},
          {name: '原创小说', url: '/blog/list/novel'}
        ]
      }, {
        name: '交流分享', icon: 'ios-happy', subItems: [
          {name: '心情随笔', url: '/share/mood'},
          {name: '资源收藏', url: '/share/collection'},
          {name: '留言板', url: '/share/message'}
        ]
      }, {
        name: '二哈传奇', icon: 'ios-water', url: '/'
      }
    ]
  }
}

module.exports = menuData
