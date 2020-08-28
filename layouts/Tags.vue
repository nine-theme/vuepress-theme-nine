<template>
  <Common
    class="tags-wrapper"
    :sidebar="false"
  >
    <!-- 标签集合 -->
    <ModuleTransition>
      <TagList
        v-show="nineShowModule"
        :current-tag="currentTag"
        @get-current-tag="tagClick"
      />
    </ModuleTransition>

    <!-- 博客列表 -->
    <ModuleTransition delay="0.08">
      <note-abstract
        v-show="nineShowModule"
        class="list"
        :data="$ninePosts"
        :current-page="currentPage"
        :current-tag="currentTag"
        @current-tag="getCurrentTag"
      />
    </ModuleTransition>

    <!-- 分页 -->
    <ModuleTransition delay="0.16">
      <pagation
        class="pagation"
        :total="$ninePosts.length"
        :current-page="currentPage"
        @getCurrentPage="getCurrentPage"
      />
    </ModuleTransition>
  </Common>
</template>

<script>
import Common from '@theme/components/Common'
import TagList from '@theme/components/TagList'
import NoteAbstract from '@theme/components/NoteAbstract'
import pagination from '@theme/mixins/pagination'
import ModuleTransition from '@theme/components/ModuleTransition'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'

export default {
  components: { Common, NoteAbstract, TagList, ModuleTransition },
  mixins: [pagination, moduleTransitonMixin],
  data () {
    return {
      tags: [],
      currentTag: '',
      currentPage: 1,
      allTagName: ''
    }
  },

  created () {
    this.currentTag = this.$nineLocales.tag.all
    this.allTagName = this.$nineLocales.tag.all
    if (this.$tags.list.length > 0) {
      this.currentTag = this.$route.query.tag ? this.$route.query.tag : this.currentTag
    }
  },

  mounted () {
    this._setPage(this._getStoragePage())
  },

  methods: {

    tagClick (tagInfo) {
      if (this.$route.path !== tagInfo.path) {
        this.$router.push({ path: tagInfo.path })
      }
    },

    getCurrentTag (tag) {
      this.$emit('current-tag', tag)
    },

    getCurrentPage (page) {
      this._setPage(page)
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    },
    _setPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
      this._setStoragePage(page)
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
.tags-wrapper
  max-width: $contentWidth
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .tags-wrapper
    padding: 5rem 0.6rem 0;
</style>
