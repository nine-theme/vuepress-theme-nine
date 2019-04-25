<template>
  <div class="main-div not-found">
    <ErrorContent
      code="404"
      :desc="desc"
      :src="src"
    />
  </div>
</template>

<script>
import error404 from '../assets/images/error-page/404.svg'
import ErrorContent from '../components/error/ErrorContent.vue'
export default {
  name: 'NotFound',
  components: {
    ErrorContent,
  },
  data () {
    return {
      src: error404,
      // desc: this.$themeConfig.lang.notFound
    }
  },
  computed: {
    desc () {
      return this.$themeConfig.lang.notFound
    },
  },
}
</script>

<style lang="stylus" scoped>
.not-found
  text-align center
</style>
