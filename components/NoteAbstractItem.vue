<template>
  <div
    class="abstract-item"
    @click="$router.push(item.path)"
  >
    <font-awesome-icon 
      v-if="item.frontmatter.sticky"
      class="bookmark" 
      :icon="['fas', 'bookmark']" 
    />
    <div class="title">
      <font-awesome-icon 
        v-if="item.frontmatter.keys"
        class="nine-lock"
        :icon="['fas', 'lock']" 
      />
      <router-link :to="item.path">
        {{ item.title }}
      </router-link>
    </div>
    <div
      class="abstract"
      v-html="item.excerpt"
    />
    <PageInfo
      :page-info="item"
      :current-tag="currentTag"
    />
  </div>
</template>

<script>
import PageInfo from './PageInfo'
export default {
  components: { PageInfo },
  props: ['item', 'currentPage', 'currentTag']
}
</script>

<style lang="stylus" scoped>
@require '../styles/mode.styl'
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  > * {
    pointer-events: auto;
  }
  .bookmark
    position absolute
    top 0
    right 1rem
    display inline-block
    color $accentColor
    font-size 1.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .nine-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
