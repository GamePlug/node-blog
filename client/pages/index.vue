<template>
  <div>
    <Row class-name="row" v-for="(colItems, index) in rowItems" :key="index">
      <Col v-for="(colItem, index) in colItems" :key="index" :span="24/colItems.length">
        <div class="item" :class="itemClass(index, colItems.length)">
          <div v-if="colItems.length === 1">
            {{colItem.title}}大的
          </div>
          <div v-else-if="colItems.length === 2">
            {{colItem.title}}中的
          </div>
          <div v-else>
            {{colItem.title}}小的
          </div>
        </div>
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
          {title: '1'}, {title: '2'}
        ], [
          {title: '1'}, {title: '2'}, {title: '3'},
        ], [
          {title: '1'},
        ], [
          {title: '1'}, {title: '2'}
        ], [
          {title: '1'}, {title: '2'}
        ], [
          {title: '1'}, {title: '2'}
        ], [
          {title: '1'}, {title: '2'}
        ], [
          {title: '1'}, {title: '2'}
        ], [
          {title: '1'}, {title: '2'}
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
  .row {
    min-width: 300px;
    max-width: 1000px;
    margin: 10px auto;
  }

  .item {
    height: 36vw;
    min-height: 60px;
    max-height: 200px;
    background: #f5f5f5;
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
</style>
