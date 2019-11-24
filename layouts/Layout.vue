<template lang="pug">
  div(class='main')
    el-container
      el-header
        Header
      el-main
        el-container
          el-aside
          Content
      el-footer(class="footer")
        Footer
</template>

<script lang="js">
  import Header from "@theme/components/header/Header"
  import Footer from "@theme/components/Footer"
  export default {
    components: {
      Footer,
      Header
    }
  }
</script>

<style lang="scss">

  .main {
    .footer{
      position: fixed;
      bottom: 0;
      width:inherit;
    }
  }
</style>
