<template lang="pug">
  div(class='main')
    el-container
      el-header
      el-main
        el-container
          el-aside
          Content
      el-footer(class="footer")
        Footer
</template>

<script lang="js">
  import Footer from "./Footer";
  export default {
    components: {Footer}
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
