<template>
  <div class="ske-app">
    <img src="./assets/logo.png">
    <div class="ske-text">正在加载请稍候....</div>
    <div class="img-wrapper left">
      <ul>
        <li class="list-item" v-for="n in 4" :key="n">
          <span class="grey-rect">加载中..</span>
        </li>
      </ul>
    </div>
    <div class="img-wrapper right">
      <ul>
        <li class="list-item" v-for="n in 4" :key="n">
          <span class="grey-rect">Loading...</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Skeleton.vue"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ske-app
    text-align center
    .ske-logo
      width 200px
      height 200px
    .ske-text
      color grey
      height 30px
      font-size 30px
      margin-bottom 20px
    .img-wrapper
      background-color #f3f5f7
      width 250px
      &.left
        float left
        margin-left 20%
      &.right
        float right
        margin-right 20%
      .list-item
        text-align center
        list-style none
        margin 50px 50px 50px 0
        .grey-rect
          line-height 30px
          font-size 30px
          color grey
</style>
