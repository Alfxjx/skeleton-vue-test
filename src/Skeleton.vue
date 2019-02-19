<template>
  <div class="ske-app">
    <img src="./assets/logo.png">
    <div class="ske-text">正在加载请稍候....</div>
    <div class="ske-pic">
      <div class="img-wrapper">
        <ul>
          <li class="list-item" v-for="n in 4" :key="n">
            <span class="grey-rect">加载中..</span>
          </li>
        </ul>
      </div>
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
    .ske-pic
      display flex
      justify-content center
      .img-wrapper
        background-color #f3f5f7
        width 250px
        .list-item
          text-align center
          list-style none
          margin 50px 50px 50px 0
          .grey-rect
            line-height 30px
            font-size 30px
            color grey
</style>
