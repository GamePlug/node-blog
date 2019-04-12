<template>
  <div>
    <div class="top">
      <img class="top-menu" @click.stop="toggleDrawer" src="@/assets/images/icon_menu.png"/>
      <div class="top-content">
        <div class="top-content-left" @click="toggleDrawer(false)">
          <nuxt-link
            class="top-logo"
            to="/">
            <strong>雷超</strong>
          </nuxt-link>
        </div>
        <div class="top-content-right" @click="toggleDrawer(false)">
          <nuxt-link
            class="top-item"
            active-class="top-item-active"
            v-for="item in topItems"
            :key="item.name"
            :exact="item.url === '/'"
            :to="item.url">
            <span>{{ item.name }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="content">
      <nuxt/>
    </div>

    <Drawer :style="{padding: 0}" placement="left" :closable="false" v-model="isDrawerOpen" :scrollable="true">
      <div class="left-content" @click="toggleDrawer(false)">
        <nuxt-link
          class="left-item"
          active-class="left-item-active"
          v-for="item in leftItems"
          :key="item.name"
          :exact="item.url === '/'"
          :to="item.url">
          <span>{{ item.name }}</span>
        </nuxt-link>
      </div>
    </Drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        screenWidth: 0,
        isDrawerOpen: false,
        topItems: [
          {name: '首页', url: '/'},
          {name: '博客', url: '/blog'},
          {name: '关于', url: '/about'}
        ],
        leftItems: [
          {name: '首页', url: '/'},
          {name: '博客列表', url: '/blog/list'},
          {name: 'Edit', url: '/blog/edit'}
        ]
      }
    },

    methods: {
      toggleDrawer(to) {
        this.isDrawerOpen = typeof to === 'boolean' ? to : !this.isDrawerOpen
      }
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
        if (this.isDrawerOpen && newWidth > 768) {
          this.toggleDrawer(false)
        }
      },
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
    background-color: #ffffff;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .08);
    display: flex;
    align-items: center;
  }

  .top-menu {
    width: 50px;
    height: 50px;
    padding: 10px;
    margin-left: 4px;
    display: none;
  }

  .top-content {
    width: 100%;
    height: inherit;
    line-height: 53px;
  }

  .top-content-left {
    display: inline-block;
    float: left;
    margin-left: 20px;
  }

  .top-content-right {
    display: inline-block;
    float: right;
    margin-right: 20px;
  }

  .top-logo {
    font-size: 20px;
    color: #333333;
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

  .left-content {
    width: 100%;
    height: inherit;
    line-height: 52px;
  }

  .left-item {
    font-size: 16px;
    color: #333333;
    padding: 0 10px;
    display: block;
  }

  .left-item-active {
    color: #2d8cf0;
    background: #f5f5f5;
  }

  >>> .ivu-drawer-body {
    margin-top: 55px;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    .top-menu {
      display: block;
    }
  }

  @media screen and (max-width: 384px) {
    .top-content-right {
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
</style>
