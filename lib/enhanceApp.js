import Iconfont from './components/Iconfont.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

export default ({
  Vue,
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  Vue.component('Iconfont', {
    functional: true,

    /* eslint-disable-next-line vue/require-render-return */
    render (h, { parent }) {
      if (parent._isMounted) {
        return h(Iconfont)
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    },
  })

  Vue.use(iView)

  router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    next()
  })
  router.afterEach(to => {
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
  })
}
