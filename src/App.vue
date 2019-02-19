<template>
  <div id="app" class="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <p class="text">this is a test of vue skeleton plugin</p>
    <pictures></pictures>
  </div>
</template>

<script>
import pictures from './components/pic/pictures'
export default {
  name: 'app',
  components:{
    pictures
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    text-align center
    .text
      font-size 30px
      color green
</style>
