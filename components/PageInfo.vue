<template>
  <div>
    <font-awesome-icon
      v-if="pageInfo.frontmatter.author || $themeConfig.author || $site.title"
      class="fa"
      :icon="['fas', 'user']"
    />
    <span class="info">{{ pageInfo.frontmatter.author || $themeConfig.author || $site.title }}</span>
    <font-awesome-icon
      v-if="pageInfo.frontmatter.date"
      class="fa"
      :icon="['fas', 'calendar']"
    />
    <span class="info">{{ pageInfo.frontmatter.date | formatDateValue }}</span>

    <font-awesome-icon
      v-if="showAccessNumber === true"
      class="fa"
      :icon="['fas', 'eye']"
    />
    <AccessNumber
      :id-val="pageInfo.path"
      :num-style="numStyle"
    />
    <font-awesome-icon
      v-if="pageInfo.frontmatter.tags"
      class="fa"
      :icon="['fas', 'tag']"
    />
    <span
      v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
      :key="subIndex"
      class="tag-item info"
      :class="{ 'active': currentTag == subItem }"
      @click.stop="goTags(subItem)"
    >{{ subItem }}</span>
  </div>
</template>

<script>
// 引入时间格式化js文件
import { formatDate } from '@theme/helpers/utils'

export default {
  filters: {
    formatDateValue (value) {
      if (!value) return ''
      // 返回的value的值都是这个样子2019-09-20T18:22:30.000Z
      // 对value进行处理
      value = value.replace('T', ' ').slice(0, value.lastIndexOf('.'))
      // 转化后的value 2019-09-20 18:22:30
      // 获取到时分秒
      const h = Number(value.substr(11, 2))
      const m = Number(value.substr(14, 2))
      const s = Number(value.substr(17, 2))
      // 判断时分秒是不是 00:00:00 (如果是用户手动输入的00:00:00也会不显示)
      if (h > 0 || m > 0 || s > 0) {
        // 时分秒有一个> 0 就说明用户输入一个非 00:00:00 的时分秒
        return formatDate(value)
      } else {
        // 用户没有输入或者输入了 00:00:00
        return formatDate(value, 'yyyy-MM-dd')
      }
    }
  },
  props: {
    pageInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    currentTag: {
      type: String,
      default: ''
    },
    showAccessNumber: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      numStyle: {
        fontSize: '.9rem',
        fontWeight: 'normal',
        color: '#999'
      }
    }
  },
  methods: {
    goTags (tag) {
      if (this.$route.path !== `/tag/${tag}/`) {
        this.$router.push({ path: `/tag/${tag}/` })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.fa
  display inline-block
  line-height 1.5rem
  color $accentColor
  &:not(:last-child)
    margin-right 0.4rem
.info
  margin-right 1rem

.tag-item
  font-family Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
  cursor pointer
  &.active
    color $accentColor
  &:hover
    color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-left 0 !important
</style>
