<template>
  <div class="footer-wrapper">
    <span>
      <i class="iconfont nine-theme" />
      <a
        target="blank"
        href="https://github.com/nine-theme/vuepress-theme-nine"
      >{{ `@nine-theme/vuepress-theme-nine@${version}` }}</a>
    </span>
    <span v-if="$themeConfig.record">
      <i class="iconfont nine-beian" />
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span>
    <span>
      <i class="iconfont nine-copyright" />
      <a>
        <span v-if="$themeConfig.author || $site.title">{{ $themeConfig.author || $site.title }}</span>
        &nbsp;&nbsp;
        <span v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())">{{ $themeConfig.startYear }} - </span>
        {{ new Date().getFullYear() }}
      </a>
    </span>
    <span v-show="showAccessNumber">
      <i class="iconfont nine-eye" />
      <AccessNumber id-val="/" />
    </span>
    <p
      v-if="$themeConfig.cyberSecurityRecord"
      class="cyber-security"
    >
      <img
        src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png"
        alt=""
      >
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </p>
    <Comments :is-show-comments="false" />
  </div>
</template>

<script>
import { version } from '../package.json'
export default {
  data () {
    return {
      version
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

<style lang="stylus" scoped>
  .footer-wrapper {
    padding: 1.5rem 2.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: lighten($textColor, 25%);
    a {
      font-size 14px
    }
    > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
    .cyber-security {
      img {
        margin-right .5rem
        width 20px
        height 20px
        vertical-align middle
      }
      a {
        vertical-align middle
      }
    }
  }

@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
