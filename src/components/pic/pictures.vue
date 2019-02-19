<template>
  <div class="pic">
    <div class="img-wrapper">
      <ul class="list">
        <li class="list-item" v-for="n in 5" :key="n">
          <span class="grey-rect">
            <img alt="Vue logo" src="../../assets/logo.png" width="200" height="200">
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "pictures"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pic
    display flex
    justify-content center
    .img-wrapper
      background-color #f3f5f7
      width 250px
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
