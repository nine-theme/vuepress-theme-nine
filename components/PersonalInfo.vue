<template>
  <div class="personal-info-wrapper">
    <img
      v-if="$themeConfig.authorAvatar"
      class="personal-img"
      :src="$withBase($themeConfig.authorAvatar)"
      alt="author-avatar"
    >
    <h3
      v-if="$themeConfig.author || $site.title"
      class="name"
    >
      {{ $themeConfig.author || $site.title }}
    </h3>
    <div class="num">
      <div>
        <h3>{{ $ninePosts.length }}</h3>
        <h6>{{ homeBlogCfg.article }}</h6>
      </div>
      <div>
        <h3>{{ $tags.list.length }}</h3>
        <h6>{{ homeBlogCfg.tag }}</h6>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  computed: {
    homeBlogCfg () {
      return this.$nineLocales.homeBlog
    }
  }
}
</script>

<style lang="stylus" scoped>
.personal-info-wrapper {
  .personal-img {
    display block
    margin 2rem auto 1rem
    width 6rem
    height 6rem
    border-radius 50%
  }
  .name {
    font-size 1rem
    text-align center
    color var(--text-color)
  }
  .num {
    display flex
    margin 0 auto 1rem
    width 80%
    > div {
      text-align center
      flex 0 0 50%
      &:first-child {
        border-right 1px solid #333
      }
      h3 {
        line-height auto
        margin 0 0 .6rem
        color var(--text-color)
      }
      h6 {
        line-height auto
        color var(--text-color)
        margin 0
      }
    }
  }
}
</style>
