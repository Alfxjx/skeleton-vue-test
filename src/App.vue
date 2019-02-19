<template>
  <div id="app" class="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <p class="text">this is a test of vue skeleton plugin</p>
    <div class="img-wrapper left">
      <ul class="list">
        <li class="list-item" v-for="n in 4" :key="n">
          <span class="grey-rect">
            <img alt="Vue logo" src="./assets/logo.png">
          </span>
        </li>
      </ul>
    </div>
    <div class="img-wrapper right">
      <ul class="list">
        <li class="list-item" v-for="n in 4" :key="n">
          <span class="grey-rect">
            <img alt="Vue logo" src="./assets/logo.png">
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    text-align center
    .text
      font-size 30px
      color green
    .img-wrapper
      background-color #f3f5f7
      width 250px
      &.left
        float left
        margin-left 20%
      &.right
        float right
        margin-right 20%
      .list
        padding 0
        .list-item
          text-align center
          list-style none
          margin 50px 0 50px 0
          .grey-rect
            line-height 30px
            font-size 30px
            color grey
</style>
