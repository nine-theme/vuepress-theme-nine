<template>
  <div id="vuepress-theme-nine">
    <TheHeader />

    <TheMain />

    <TheFooter />
  </div>
</template>

<script>
import NineHeader from '../components/NineHeader.vue'
import NineMain from '../components/NineMain.vue'
import NineFooter from '../components/NineFooter.vue'

export default {
  name: 'ThemeNine',

  components: {
    NineHeader,
    NineMain,
    NineFooter,
  },
}
</script>

<style lang="stylus" src="../styles/index.styl" />
