<template>
    <div class="container">
        <header>
            <Content slot-key="header"/>
        </header>
        <main>
            <Content/>
        </main>
        <footer>
            <Content slot-key="footer"/>
        </footer>
    </div>
</template>

<script>
  export default {
    name: 'Layout',
  }
</script>

<style lang="less">
    @import "../assets/style/layout";
</style>
