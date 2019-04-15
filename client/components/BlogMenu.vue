<template>
  <div>
    <div class="top blog-menu">
      <div class="top-left">
        <img class="top-left-menu" @click.stop="toggleDrawer" src="@/assets/images/icon_menu.png"/>
        <nuxt-link class="top-left-logo" to="/" @click.native="toggleDrawer(false)">
          <strong>雷超</strong>
        </nuxt-link>
      </div>
      <div class="top-center">
        <Menu theme="light" :active-name="activeName" mode="horizontal" @on-select="onMenuClick">
          <Submenu v-for="menuItem in menuItems" :key="menuItem.name" :name="menuItem.name">
            <template slot="title">
              <Icon :type="menuItem.icon"/>
              {{ menuItem.name }}
            </template>
            <MenuItem v-for="subItem in menuItem.subItems" :key="subItem.url" :name="subItem.url" :to="subItem.url">
              {{ subItem.name }}
            </MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="top-right">
        <Menu theme="light" :active-name="activeName" mode="horizontal" @on-select="onMenuClick">
          <MenuItem v-for="item in topItems" :key="item.url" :name="item.url" :to="item.url">
            {{ item.name }}
          </MenuItem>
        </Menu>
      </div>
    </div>

    <Drawer class-name="blog-menu" placement="left" :closable="false" v-model="isDrawerOpen" :scrollable="true">
      <Menu theme="light" :active-name="activeName" @on-select="onMenuClick" width="auto" accordion>
        <Submenu v-for="menuItem in menuItems" :key="menuItem.name" :name="menuItem.name">
          <template slot="title">
            <Icon :type="menuItem.icon"/>
            {{ menuItem.name }}
          </template>
          <MenuItem v-for="subItem in menuItem.subItems" :key="subItem.url" :name="subItem.url" :to="subItem.url">
            {{ subItem.name }}
          </MenuItem>
        </Submenu>
      </Menu>
    </Drawer>

    <BackTop/>
  </div>
</template>

<script>
  export default {
    name: "BlogMenu",

    data() {
      return {
        screenWidth: 0,
        isDrawerOpen: false,
        currentUrl: '',
        activeName: '',
        topItems: [
          {name: '首页', url: '/'},
          {name: '博客', url: '/blog'},
          {name: '关于', url: '/about'}
        ],
        menuItems: [{
          name: '博客精品', icon: 'ios-book', subItems: [
            {name: 'Android', url: '/blog/list/android'},
            {name: 'Java', url: '/blog/list/java'},
            {name: 'Html/Css/Js', url: '/blog/list/web'},
            {name: 'Node.js', url: '/blog/list/node'}
          ]
        }, {
          name: '个人简历', icon: 'ios-happy', subItems: [
            {name: '关于雷超', url: '/about/author'},
            {name: '关于网站', url: '/about/website'}
          ]
        }, {
          name: '传说之地', icon: 'ios-water', subItems: [
            {name: '众神齐聚', url: '/user'},
            {name: '雷神传说', url: '/user/leichao'},
            {name: '盘古开天', url: '/user/pangu'},
            {name: '女娲补天', url: '/user/nvwa'},
            {name: '阿柯刺秦', url: '/user/ake'}
          ]
        }, {
          name: '后台管理', icon: 'ios-construct', subItems: [
            {name: '管理总览', url: '/admin'},
            {name: '博客管理', url: '/admin/blog'},
            {name: '用户管理', url: '/admin/user'},
            {name: '评论管理', url: '/admin/comment'}
          ]
        }]
      }
    },

    methods: {
      toggleDrawer(to) {
        this.isDrawerOpen = typeof to === 'boolean' ? to : !this.isDrawerOpen
      },
      onMenuClick() {
        if (this.isDrawerOpen) {
          this.toggleDrawer(false)
        }
      }
    },

    created() {
      this.currentUrl = this.$route.path
    },

    mounted() {
      this.screenWidth = window.innerWidth
      const that = this
      window.onresize = function windowResize() {
        that.screenWidth = window.innerWidth
      }
    },

    watch: {
      $route(to, from) {
        this.currentUrl = to.path
      },
      screenWidth(newWidth, oldWidth) {
        if (this.isDrawerOpen && newWidth > 768) {
          this.toggleDrawer(false)
        }
      },
      currentUrl(newUrl, oldUrl) {
        this.activeName = newUrl
      }
    }
  }
</script>

<style scoped>
  .top {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: var(--menu-bar-height);
    min-width: 300px;
    line-height: var(--menu-bar-height);
    background-color: #ffffff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .08);
  }

  .top-left {
    position: absolute;
    left: 0;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }

  .top-center {
    position: absolute;
    left: 100px;
  }

  .top-right {
    position: absolute;
    right: 0;
    padding: 0 10px;
    background: #ffffff;
    z-index: 901;
  }

  .top-left-menu {
    float: left;
    width: 50px;
    height: 50px;
    padding: 10px;
    display: none;
    cursor: pointer;
  }

  .top-left-logo {
    font-size: 20px;
    color: #333333;
    display: inline;
    margin-left: 10px;
    margin-right: 10px;
  }

  >>> .blog-menu .ivu-menu-horizontal {
    height: var(--menu-bar-height);
  }

  >>> .blog-menu .top-center .ivu-menu-horizontal {
    width: 2000px;
  }

  >>> .blog-menu .ivu-menu-horizontal .ivu-menu-submenu {
    padding: 0;
    margin: 0 5px;
  }

  >>> .blog-menu .ivu-menu-horizontal .ivu-menu-item {
    padding: 0 5px;
    margin: 0 5px;
  }

  >>> .blog-menu .ivu-menu-vertical .ivu-menu-submenu.ivu-menu-item-active .ivu-menu-submenu-title {
    color: #2d8cf0;
  }

  >>> .blog-menu .ivu-menu-horizontal .ivu-menu-item:not(.ivu-menu-item-active):hover {
    color: inherit;
    border-bottom: 2px solid transparent;
  }

  >>> .blog-menu .ivu-menu-vertical .ivu-menu-item:not(.ivu-menu-item-active):hover,
  >>> .blog-menu .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: inherit;
  }

  >>> .blog-menu .ivu-menu-horizontal.ivu-menu-light::after,
  >>> .blog-menu .ivu-menu-vertical.ivu-menu-light::after {
    display: none;
  }

  >>> .blog-menu .ivu-drawer-body {
    padding: var(--menu-bar-height) 0 0;
  }

  @media screen and (max-width: 768px) {
    .top-left-menu {
      display: inline;
    }

    .top-center {
      display: none;
    }
  }
</style>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    --menu-bar-height: 55px;
  }
</style>
