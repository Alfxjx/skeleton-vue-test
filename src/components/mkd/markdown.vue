<template>
  <vue-markdown>{{mdString}}</vue-markdown>
</template>

<script type="text/ecmascript-6">
  import VueMarkdown from 'vue-markdown'

  export default {
    name: "markdown",
    props:['mdString'],
    data() {
      return {}
    },
    components: {
      VueMarkdown
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
