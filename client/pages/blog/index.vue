<template>
  <div class="layout">
    <div class="crumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>博客</BreadcrumbItem>
      </Breadcrumb>
    </div>

    <Row class-name="row" v-for="(colItems, index) in rowItems" :key="index">
      <Col v-for="(colItem, index) in colItems" :key="index" :span="12">
        <nuxt-link :to="colItem.url">
          <div class="item" :class="itemClass(index, colItems.length)">
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
      return {title: '博客首页'}
    },

    data() {
      return {
        list: [
          {name: 'Android', url: '/blog/list/android'},
          {name: 'Java', url: '/blog/list/java'},
          {name: 'Html/Css/Js', url: '/blog/list/web'},
          {name: 'Node.js', url: '/blog/list/node'}
        ]
      }
    },

    computed: {
      rowItems() {
        const rowItems = []
        for (let i = 0; i < this.list.length; i += 2) {
          rowItems.push(this.list.slice(i, i + 2))
        }
        return rowItems
      }
    },

    methods: {
      itemClass(index, length) {
        const remain = index % length
        if (remain === 0) {
          return 'item-left'
        } else if (remain === 1) {
          return 'item-right'
        }
      }
    }
  }
</script>

<style scoped>
  .layout {
    max-width: 1000px;
    margin: 0 auto;
  }

  .crumb {
    margin-top: 10px;
    padding: 10px;
  }

  .row {
    margin: 10px 0;
  }

  .item {
    width: auto;
    height: 36vw;
    min-height: 100px;
    max-height: 200px;
    padding: 10px;
    background: #ffffff;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
    overflow: hidden;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  .item:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  }

  .item-left {
    margin-left: 10px;
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
