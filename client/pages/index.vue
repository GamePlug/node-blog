<template>
  <div class="layout">
    <Row class-name="row" v-for="(colItems, index) in rowItems" :key="index">
      <Col v-for="(colItem, index) in colItems" :key="index" :span="24/colItems.length">
        <nuxt-link :to="colItem.url">
          <div v-if="colItems.length === 1" class="item" :class="itemClass(index, colItems.length)">
            {{colItem.name}}
          </div>
          <div v-else-if="colItems.length === 2" class="item" :class="itemClass(index, colItems.length)">
            {{colItem.name}}
          </div>
          <div v-else class="item" :class="itemClass(index, colItems.length)">
            {{colItem.name}}
          </div>
        </nuxt-link>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    head() {
      return {title: '首页'}
    },

    data() {
      return {
        rowItems: [[
          {name: '博客精品', url: '/blog'}, {name: '个人简历', url: '/about'}
        ], [
          {name: '传说之地', url: '/user'}, {name: '后台管理', url: '/admin'}
        ], [
          {name: '1', url: '/'}, {name: '2', url: '/'}, {name: '3', url: '/'},
        ], [
          {name: '1', url: '/'},
        ], [
          {name: '1', url: '/'}, {name: '2', url: '/'}
        ], [
          {name: '1', url: '/'}, {name: '2', url: '/'}
        ], [
          {name: '1', url: '/'}, {name: '2', url: '/'}
        ], [
          {name: '1', url: '/'}, {name: '2', url: '/'}
        ], [
          {name: '1', url: '/'}, {name: '2', url: '/'}
        ], [
          {name: '1', url: '/'}, {name: '2', url: '/'}
        ]]
      }
    },

    methods: {
      itemClass(index, length) {
        if (length === 1) {
          return 'item-one'
        }
        const remain = index % length
        if (remain === 0) {
          return 'item-left'
        } else if (remain === length - 1) {
          return 'item-right'
        } else {
          return 'item-center'
        }
      }
    }
  }
</script>

<style scoped>
  .layout {
    padding: 1px 0;
    background: #f5f5f5;
  }

  .row {
    min-width: 300px;
    max-width: 1000px;
    margin: 10px auto;
  }

  .item {
    height: 36vw;
    min-height: 60px;
    max-height: 200px;
    padding: 10px;
    background: #ffffff;
    cursor: pointer;
    border-radius: 5px;
  }

  .item:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  }

  .item-one {
    margin-left: 10px;
    margin-right: 10px;
  }

  .item-left {
    margin-left: 10px;
    margin-right: 5px;
  }

  .item-center {
    margin-left: 5px;
    margin-right: 5px;
  }

  .item-right {
    margin-left: 5px;
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    .item:hover {
      box-shadow: none;
    }
    .item:active {
      box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    }
  }
</style>
