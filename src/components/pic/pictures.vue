<template>
  <div class="pic">
    <div class="img-wrapper">
      <ul class="list">
        <li class="list-item" v-for="(pic, index) in pics" :key="index">
          <span class="grey-rect">
            <img alt="Vue logo" v-lazy="pic.jpg" width="200" height="200">
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "pictures",
    data() {
      return {
        pics: [
          {jpg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=67417550,4286791513&fm=26&gp=0.jpg'},
          {jpg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1931036651,4245219960&fm=26&gp=0.jpg'},
          {jpg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4069885691,778005459&fm=26&gp=0.jpg'},
          {jpg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=434554320,423201916&fm=26&gp=0.jpg'},
          {jpg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1421612651,3057937899&fm=26&gp=0.jpg'},
          {jpg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2497641768,2462225633&fm=26&gp=0.jpg'},
          {jpg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3677257638,2521150679&fm=26&gp=0.jpg'},
          {jpg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2767652891,3508546112&fm=26&gp=0.jpg'},
          {jpg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341537136,3096421836&fm=26&gp=0.jpg'},
          {jpg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2589755639,4170511511&fm=26&gp=0.jpg'},
        ]
      }
    }
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
