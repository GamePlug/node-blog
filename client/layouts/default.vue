<template>
  <div>
    <div class="top" @click="toggleDrawer(false)">
      <img class="top-menu" @click.stop="toggleDrawer" src="@/assets/images/icon_menu.png" width="32px" height="32px"/>
      <div class="top-content">
        <div class="top-content-left">
          <nuxt-link
            class="top-logo"
            to="/">
            <strong>雷超</strong>
          </nuxt-link>
        </div>
        <div class="top-content-right">
          <nuxt-link
            class="top-item"
            :class="isActive(item.url) ? 'top-item-active' : ''"
            v-for="item in menuData.items"
            :key="item.name"
            :to="item.url">
            <span>{{ item.name }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="content">
      <nuxt/>
    </div>
    <Drawer placement="left" :closable="false" v-model="isDrawerOpen" :scrollable="true">
      <p>Some contents...1</p>
      <p>Some contents...2</p>
      <p>Some contents...3</p>
      <p>Some contents...4</p>
      <p>Some contents...5</p>
    </Drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        screenWidth: 0,
        currentUrl: '/',
        isDrawerOpen: false,
        menuData: {
          logo: '',
          name: '',
          items: [
            {name: '首页', url: '/'},
            {name: '列表', url: '/blog/list/all'},
            {name: 'Blog', url: '/blog/1001'},
            {name: 'Edit', url: '/blog/edit'},
          ]
        }
      }
    },

    methods: {
      isActive(url) {
        return this.currentUrl === url;
      },
      toggleDrawer(to) {
        this.isDrawerOpen = typeof to === 'boolean' ? to : !this.isDrawerOpen
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
      screenWidth(newWidth, oldWidth) {
        if (this.isDrawerOpen && newWidth > 719) {
          this.toggleDrawer(false)
        }
      },
      $route(to, from) {
        this.currentUrl = to.path;
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
    height: 55px;
    padding: 0 12px;
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .08);
    display: flex;
    align-items: center;
  }

  .top-content {
    width: 100%;
    height: inherit;
    line-height: 52px;
  }

  .top-content-left {
    display: inline-block;
  }

  .top-content-right {
    display: inline-block;
    float: right;
  }

  .top-logo {
    font-size: 20px;
    color: #333333;
    margin-left: 10px;
  }

  .top-item {
    font-size: 16px;
    color: #333333;
    padding: 0 5px;
    margin: 0 5px;
    display: inline-block;
    text-align: center;
  }

  .top-item-active {
    color: #2d8cf0;
    border-bottom: 2px solid #2d8cf0;
  }

  .content {
    margin-top: 55px;
  }

  @media screen and (min-width: 719px) {
    .top-menu {
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

  .ivu-drawer-body {
    margin-top: 55px;
  }
</style>
