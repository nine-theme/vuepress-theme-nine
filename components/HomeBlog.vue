<template>
  <div class="home-blog">
    <div
      class="hero"
      :style="{ ...bgImageStyle }"
    >
      <div>
        <ModuleTransition>
          <img
            v-if="nineShowModule && $frontmatter.heroImage"
            class="hero-img"
            :style="heroImageStyle || {}"
            :src="$withBase($frontmatter.heroImage)"
            alt="hero"
          >
        </ModuleTransition>

        <ModuleTransition delay="0.04">
          <h1 v-if="nineShowModule && $frontmatter.heroText !== null">
            {{ $frontmatter.heroText || $title || 'vuePress-theme-nine' }}
          </h1>
        </ModuleTransition>

        <ModuleTransition delay="0.08">
          <p
            v-if="nineShowModule && $frontmatter.tagline !== null"
            class="description"
          >
            {{ $frontmatter.tagline || $description || 'Welcome to your vuePress-theme-nine site' }}
          </p>
        </ModuleTransition>
      </div>
    </div>

    <ModuleTransition delay="0.16">
      <div
        v-show="nineShowModule"
        class="home-blog-wrapper"
      >
        <div class="info-wrapper">
          <PersonalInfo />
          <h4><font-awesome-icon :icon="['fas', 'hashtag']" />{{ homeBlogCfg.category }}</h4>
          <ul class="category-wrapper">
            <li
              v-for="(item, index) in this.$categories.list"
              :key="index"
              class="category-item"
            >
              <router-link :to="item.path">
                <span class="category-name">{{ item.name }}</span>
                <span
                  class="post-num"
                  :style="{ 'backgroundColor': getOneColor() }"
                >{{ item.pages.length }}</span>
              </router-link>
            </li>
          </ul>
          <hr>
          <h4 v-if="$tags.list.length !== 0">
            <font-awesome-icon :icon="['fas', 'tag']" /> {{ homeBlogCfg.tag }}
          </h4>
          <TagCloud
            v-if="$themeConfig.user3DTag"
            @get-current-tag="getPagesByTags"
          />
          <TagList
            v-else
            @get-current-tag="getPagesByTags"
          />
          <h4 v-if="$themeConfig.friendLink && $themeConfig.friendLink.length !== 0">
            <font-awesome-icon :icon="['fas', 'user-friends']" /> {{ homeBlogCfg.friendLink }}
          </h4>
          <FriendLink />
        </div>
        <div class="blog-list">
          <!-- 博客列表 -->
          <note-abstract
            :data="$ninePosts"
            :current-page="currentPage"
          />
          <!-- 分页 -->
          <pagation
            class="pagation"
            :total="$ninePosts.length"
            :current-page="currentPage"
            @getCurrentPage="getCurrentPage"
          />
        </div>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Content
        v-show="nineShowModule"
        class="home-center"
        custom
      />
    </ModuleTransition>
  </div>
</template>

<script>
import TagList from '@theme/components/TagList'
import TagCloud from '@theme/components/TagCloud'
import FriendLink from '@theme/components/FriendLink'
import NoteAbstract from '@theme/components/NoteAbstract'
import pagination from '@theme/mixins/pagination'
import ModuleTransition from '@theme/components/ModuleTransition'
import PersonalInfo from '@theme/components/PersonalInfo'
import { getOneColor } from '@theme/helpers/other'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'

export default {
  components: { NoteAbstract, TagList, TagCloud, FriendLink, ModuleTransition, PersonalInfo },
  mixins: [pagination, moduleTransitonMixin],
  data () {
    return {
      nineShow: false,
      currentPage: 1,
      tags: []
    }
  },
  computed: {
    homeBlogCfg () {
      return this.$nineLocales.homeBlog
    },
    actionLink () {
      const {
        actionLink: link,
        actionText: text
      } = this.$frontmatter

      return {
        link,
        text
      }
    },
    heroImageStyle () {
      return this.$frontmatter.heroImageStyle || {}
    },
    bgImageStyle () {
      const initBgImageStyle = {
        textAlign: 'center',
        overflow: 'hidden',
        background: `
          url(${this.$frontmatter.bgImage
    ? this.$withBase(this.$frontmatter.bgImage)
    : require('../images/home-bg.jpg')}) center/cover no-repeat
        `
      }
      const {
        bgImageStyle
      } = this.$frontmatter

      return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
    },
    heroHeight () {
      return document.querySelector('.hero').clientHeight
    }
  },
  mounted () {
    this.nineShow = true
    this._setPage(this._getStoragePage())
  },
  methods: {
    // 获取当前页码
    getCurrentPage (page) {
      this._setPage(page)
      setTimeout(() => {
        window.scrollTo(0, this.heroHeight)
      }, 100)
    },
    // 根据分类获取页面数据
    getPages () {
      let pages = this.$site.pages
      pages = pages.filter(item => {
        const { home, date } = item.frontmatter
        return !(home == true || date === undefined)
      })
      // reverse()是为了按时间最近排序排序
      this.pages = pages.length == 0 ? [] : pages
    },
    getPagesByTags (tagInfo) {
      this.$router.push({ path: tagInfo.path })
    },
    _setPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
      this._setStoragePage(page)
    },
    getOneColor
  }
}
</script>

<style lang="stylus">
.home-blog {
  padding: 0;
  margin: 0px auto;
  .hero {
    margin $navbarHeight auto 0
    position relative
    box-sizing border-box
    padding 0 20px
    height 100vh
    display flex
    align-items center
    justify-content center
    .hero-img {
      max-width: 300px;
      margin: 0 auto 1.5rem
    }

    h1 {
      margin:0 auto 1.8rem;
      font-size: 2.5rem;
    }

    .description {
      color #fff
      margin: 1.8rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
    }
  }
  .home-blog-wrapper {
    display flex
    align-items: flex-start;
    margin 20px auto 0
    padding 0 20px
    max-width $homePageWidth
    .blog-list {
      flex auto
      width 0
      .abstract-wrapper {
        .abstract-item:last-child {
          margin-bottom: 0px;
        }
      }
    }
    .info-wrapper {
      position -webkit-sticky;
      position sticky;
      top 70px
      overflow hidden
      transition all .3s
      margin-right 15px
      flex 0 0 300px
      height auto
      box-shadow var(--box-shadow)
      border-radius $borderRadius
      box-sizing border-box
      padding 0 15px
      background var(--background-color)
      &:hover {
        box-shadow var(--box-shadow-hover)
      }
      h4 {
        color var(--text-color)
      }
      .category-wrapper {
        list-style none
        padding-left 0
        .category-item {
          margin-bottom .4rem
          padding: .4rem .8rem;
          transition: all .5s
          border-radius $borderRadius
          box-shadow var(--box-shadow)
          background-color var(--background-color)
          &:hover {
            transform scale(1.04)
            a {
              color $accentColor
            }
          }
          a {
            display flex
            justify-content: space-between
            color var(--text-color)
            .post-num {
              width 1.6rem;
              height 1.6rem
              text-align center
              line-height 1.6rem
              border-radius $borderRadius
              background #eee
              font-size 13px
              color #fff
            }
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home-blog {
    .hero {
      height 450px
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 2rem;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
    .home-blog-wrapper {
      display block!important
      .blog-list {
        width auto
      }
      .info-wrapper {
        // display none!important
        margin-left 0
        .personal-info-wrapper {
          display none
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-blog {
    .hero {
      height 450px
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display block!important
      .blog-list {
        width auto
      }
      .info-wrapper {
        // display none!important
        margin-left 0
        .personal-info-wrapper {
          display none
        }
      }
    }
  }
}
</style>
