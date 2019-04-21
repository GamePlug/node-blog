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

    <Drawer class-name="blog-menu" placement="left" :closable="false" v-model="isDrawerOpen" scrollable>
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
        scrollTop: 0,
        topItems: [
          {name: '首页', url: '/'},
          {name: '关于', url: '/about'}
        ],
        menuItems: [{
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
      },
      bodyStyle(position, width, height, top) {
        const style = document.body.style
        style.position = position
        style.width = width
        style.height = height
        style.top = top
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
      },
      isDrawerOpen(newStatus, oldStatus) {
        // 当侧边栏打开时，阻止页面滑动，兼容移动端
        if (newStatus) {
          this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
          this.bodyStyle('fixed', '100%', '100%', `-${this.scrollTop}px`)
        } else {
          this.bodyStyle('', '', '', '')
          document.body.scrollTop = this.scrollTop
          document.documentElement.scrollTop = this.scrollTop
        }
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
    background: #ffffff;
    z-index: 901;
    display: flex;
    align-items: center;
  }

  .top-center {
    position: absolute;
    left: 100px;
    width: 2000px;
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

  >>> .blog-menu .ivu-menu-horizontal .ivu-menu-submenu {
    padding: 0;
    margin: 0 5px;
  }

  >>> .blog-menu .ivu-menu-horizontal .ivu-menu-item {
    padding: 0 5px;
    margin: 0 5px;
  }

  >>> .blog-menu .ivu-menu-vertical {
    height: 100%;
  }

  >>> .blog-menu .ivu-menu-vertical .ivu-menu-submenu.ivu-menu-item-active .ivu-menu-submenu-title {
    color: #2d8cf0;
  }

  >>> .blog-menu .top-right .ivu-menu-horizontal .ivu-menu-item:not(.ivu-menu-item-active):hover {
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
