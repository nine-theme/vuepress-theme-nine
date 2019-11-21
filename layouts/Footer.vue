<template lang="pug">
  div(class="footer-wrapper")
    span
      font-awesome-icon(id="myheart" :icon="['fas', 'heartbeat']", style="margin-right: 4px") &nbsp;
      a(target="blank" href="https://vuepress-theme-reco.recoluan.com") {{`${name}@${version}`}}
    span(v-if="$themeConfig.icp")
      font-awesome-icon(:icon="['fas', 'yin-yang']", style="margin-right: 4px", spin) &nbsp;
      a(:href="$themeConfig.recordLink || '#'") {{ $themeConfig.record }}
    span
      font-awesome-icon(:icon="['far', 'copyright']", style="margin-right: 4px") &nbsp;
      a
        span(v-if="$themeConfig.author || $site.title") {{ $themeConfig.author || $site.title }}&nbsp;
        span(v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())")
          | {{ $themeConfig.startYear }} - {{ new Date().getFullYear() }}
    span(v-show="showAccessNumber")
      font-awesome-icon(:icon="['far', 'eye']", style="margin-right: 4px") &nbsp;
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
    color: lighten($textColor, 36%);
    a {
      font-size: 14px;
    }
    &:hover {
      color: lighten($textColor, 0%);
    }
    > span {
      margin-left: 1rem;
      > i {
        margin-right: .5rem;
      }
    }
  }

  @keyframes heartAnimate{
    0%,100%{transform:scale(1);}                     /*0%,100%时保持图形的原大小*/
    10%,30%{transform: scale(0.8);}                 /*10%,30%时图形缩小成0.9倍*/
    20%,40%,60%,80%{transform:scale(1.2);}          /*20%,40%,60%,80%时图形扩大成1.1倍*/
    50%,70%{ transform:scale(1.1);}                 /*50%,70%时图形扩大成1.1倍*/
  }
  #myheart{
    animation: heartAnimate 1s infinite;       /*心当然要是跳动的啦*/
  }
</style>
