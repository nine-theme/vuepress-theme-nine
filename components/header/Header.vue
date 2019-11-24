<template lang="pug">
  div(class="header")
    router-link(:to="$localePath" class="home-link")
      img(class="logo" v-if="$themeConfig.logo" :src="$withBase($themeConfig.logo)" :alt="$siteTitle")
      span(ref="siteName" class="site-name" v-if="$siteTitle") {{ $siteTitle }}
    div(class="links" :style="linksWrapMaxWidth ? { 'max-width': linksWrapMaxWidth + 'px' } : {}")
      AlgoliaSearchBox(v-if="isAlgoliaSearch" :options="algolia")
      SearchBox(v-else-if="$themeConfig.search !== false && $frontmatter.search !== false")
      NavLinks(class="can-hide")
</template>

<script lang="js">
  // import AlgoliaSearchBox from '@AlgoliaSearchBox'
  import SearchBox from '@SearchBox'
  export default {
    name: "Header",
    components: { SearchBox },
  }
</script>

<style lang="scss" scoped>
.header {

}
</style>
