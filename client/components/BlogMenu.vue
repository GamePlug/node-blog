<template>
  <div>
    <div class="top">
      <div class="top-left" @click="toggleDrawer(false)">
        <img class="top-left-menu" @click.stop="toggleDrawer" src="@/assets/images/icon_menu.png"/>
        <nuxt-link class="top-left-logo" to="/">
          <strong>雷超</strong>
        </nuxt-link>
      </div>
      <div class="top-center">
        <Menu theme="light" :active-name="activeName" mode="horizontal">
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
      <div class="top-right" @click="toggleDrawer(false)">
        <nuxt-link class="top-right-item" active-class="top-right-item-active" v-for="item in topItems"
                   :key="item.name" :exact="true" :to="item.url">
          <span>{{ item.name }}</span>
        </nuxt-link>
      </div>
    </div>

    <Drawer :style="{padding: 0}" placement="left" :closable="false" v-model="isDrawerOpen" :scrollable="true">
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
        this.toggleDrawer(false)
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
    line-height: calc(var(--menu-bar-height) - 2px);
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .08);
    display: block;
  }

  .top-left {
    float: left;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  .top-center {
    float: left;
    margin-left: 40px;
    max-width: calc(100% - 270px);
  }

  .top-right {
    float: right;
    margin-right: 10px;
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
    display: inline-block;
    margin-left: 10px;
  }

  .top-right-item {
    font-size: 16px;
    color: #333333;
    padding: 0 5px;
    margin: 0 5px;
    display: inline-block;
    text-align: center;
  }

  .top-right-item-active {
    color: #2d8cf0;
    border-bottom: 2px solid #2d8cf0;
  }

  >>> .ivu-menu-horizontal {
    height: 100%;
    line-height: calc(var(--menu-bar-height) - 2px);
  }

  >>> .ivu-menu-horizontal .ivu-menu-submenu {
    padding: 0;
    margin: 0 5px;
  }

  >>> .ivu-menu-vertical .ivu-menu-submenu.ivu-menu-item-active .ivu-menu-submenu-title {
    color: #2d8cf0;
  }

  >>> .ivu-menu-vertical .ivu-menu-item:hover, >>> .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: inherit;
  }

  >>> .ivu-drawer-body {
    padding: var(--menu-bar-height) 0 0;
  }

  @media screen and (max-width: 768px) {
    .top-left-menu {
      display: inline-block;
    }

    .top-center {
      display: none;
    }
  }

  @media screen and (max-width: 384px) {
    .top-right {
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
