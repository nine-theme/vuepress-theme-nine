<template lang="pug">
  div(class="footer-wrapper")
    span
      i(class="el-icon-cpu")
        a(target="blank" href="https://vuepress-theme-reco.recoluan.com") {{`${name}@${version}`}}
    span(v-if="$themeConfig.icp")
      i(class="iconfont reco-icp")
      a(:href="$themeConfig.recordLink || '#'") {{ $themeConfig.record }}
    span
      i(class="iconfont reco-copyright")
        a
          span(v-if="$themeConfig.author || $site.title") {{ $themeConfig.author || $site.title }}
          span(v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())") {{ $themeConfig.startYear }} -
          | {{ new Date().getFullYear() }}

    span(v-show="showAccessNumber")
      i(class="el-icon-view")
    // AccessNumber(idVal="/")
    // Comments(isShowComments="false")
</template>

<script>
  import { version, name } from '../package.json'
  export default {
    name: "Footer",
    data () {
      return {
        version,
        name
      }
    },
    computed: {
      showAccessNumber () {
        const {
          $themeConfig: { valineConfig },
          $themeLocaleConfig: { valineConfig: valineLocalConfig }
        } = this

        const vc = valineLocalConfig || valineConfig
        if (vc && vc.visitor != false) {
          return true
        }
        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles/index";
  .footer-wrapper {
    padding: 1.5rem 2.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: lighten($textColor, 25%);
    a {
      font-size: 14px
    }
    > span {
      margin-left: 1rem;
      > i {
        margin-right: .5rem;
      }
    }
  }
</style>
