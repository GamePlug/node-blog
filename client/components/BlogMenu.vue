<template>
  <Menu :mode="mode" @on-select="click" :active-name="activeName" theme="light" width="auto" accordion>
    <template v-for="menuItem in items">
      <Submenu v-if="menuItem.subItems" :name="menuItem.name">
        <template slot="title">
          <Icon v-if="menuItem.icon" :type="menuItem.icon"/>
          {{ menuItem.name }}
        </template>
        <MenuItem v-for="subItem in menuItem.subItems" :key="subItem.url" :name="subItem.url" :to="subItem.url">
          {{ subItem.name }}
        </MenuItem>
      </Submenu>
      <MenuItem v-else :name="menuItem.url" :to="menuItem.url">
        <Icon v-if="menuItem.icon" :type="menuItem.icon"/>
        {{ menuItem.name }}
        <Icon v-if="menuItem.icon" type="ios-arrow-forward" class="ivu-menu-submenu-title-icon"/>
      </MenuItem>
    </template>
  </Menu>
</template>

<script>
  export default {
    name: "BlogMenu",

    props: {
      items: Array,
      mode: String,
      click: Function
    },

    data() {
      return {
        currentUrl: '',
        activeName: ''
      }
    },

    created() {
      this.currentUrl = this.$route.path
    },

    watch: {
      $route(to, from) {
        this.currentUrl = to.path
      },
      currentUrl(newUrl, oldUrl) {
        this.activeName = newUrl
      }
    }
  }
</script>

<style scoped>

</style>
