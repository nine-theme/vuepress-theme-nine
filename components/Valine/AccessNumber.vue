<template>
  <span
    v-if="$themeConfig.valineConfig && $themeConfig.valineConfig.visitor != false"
    :id="getIdVal(idVal)"
    class="leancloud-visitors"
    data-flag-title="Your Article Title"
  >
    <i
      class="iconfont nine-eye"
      style="margin-right: .5rem"
    />
    <a
      class="leancloud-visitors-count"
      :style="numStyle"
    />
  </span>
</template>

<script>
    export default {
        props: {
            idVal: {
                type: String,
                default () {
                    return ''
                }
            }, 
            numStyle: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        methods: {
            getIdVal (path) {
                const base = this.$site.base
                return base.slice(0, base.length - 1) + path
            }
        }
    }
</script>

<style lang="stylus" scoped>
.leancloud-visitors
  margin-right .5rem
</style>

