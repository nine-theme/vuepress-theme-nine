<template>
  <div class="abstract-wrapper">
    <NoteAbstractItem
      v-for="(item) in currentPageData"
      :key="item.path"
      :item="item"
      :current-page="currentPage"
      :current-tag="currentTag"
    />
  </div>
</template>

<script>
import NoteAbstractItem from './NoteAbstractItem'

export default {
  components: { NoteAbstractItem },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    currentPage: {
      type: Number,
      default: 1
    },
    currentTag: {
      type: String,
      default: ''
    }
    },
  computed: {
    currentPageData () {
      const start = this.currentPage * 10 - 10
      const end = this.currentPage * 10
      return this.data.slice(start, end)
    }
  }
}
</script>

<style lang="stylus" scoped>
.abstract-wrapper
  width 100%
</style>
