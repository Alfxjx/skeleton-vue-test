<template>
  <div id="app" class="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <p class="text">this is a test of vue skeleton plugin</p>
    <markdown :mdString="content"></markdown>
    <pictures></pictures>
  </div>
</template>

<script>
import pictures from './components/pic/pictures'
import markdown from './components/mkd/markdown'
export default {
  name: 'app',
  data(){
    return{
      content: '## **hello ~~world~~**!'
    }
  },
  components:{
    pictures, markdown
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
