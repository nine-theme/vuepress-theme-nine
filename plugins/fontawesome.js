import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCodeBranch, faHeartbeat, faYinYang } from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faEye } from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import {  FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faCodeBranch)
library.add(faHeartbeat)
library.add(faYinYang)

library.add(faCopyright)
library.add(faEye)

library.add(faFontAwesome)

const install = (Vue, opts = {}) => {
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('font-awesome-layers', FontAwesomeLayers)
  Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
}

export default {
  install
}
