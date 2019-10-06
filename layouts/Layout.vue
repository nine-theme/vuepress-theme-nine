<template>
  <div>
    <Common>
      <Home v-if="$page.frontmatter.home && $themeConfig.type !== 'blog'" />
      <HomeBlog v-else-if="$page.frontmatter.home && $themeConfig.type === 'blog'" />
      <Page
        v-else
        :sidebar-items="sidebarItems"
      >
        <slot
          slot="top"
          name="page-top"
        />
        <slot
          slot="bottom"
          name="page-bottom"
        />
      </Page>
    </Common>
  </div>
</template>

<script>
  import Home from '@theme/components/Home.vue'
  import HomeBlog from '@theme/components/HomeBlog.vue'
  import Page from '@theme/components/Page.vue'
  import Common from '@theme/components/Common.vue'
  import { resolveSidebarItems } from '../util'

  export default {
    components: { HomeBlog, Home, Page, Common },

    computed: {
      sidebarItems () {
        return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
        )
      }
    }
  }
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../assets/styles/theme.styl" lang="stylus"></style>
