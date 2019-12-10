import { zhHans, zhHant, en, ja, ko } from '../locales/index'

export default {
  computed: {
    $nineLocales () {
      const nineLocales = this.$themeLocaleConfig.nineLocales
      if (nineLocales && nineLocales.homeBlog) {
        return { homeBlog: nineLocales.homeBlog }
      }
      if (/^zh\-(CN|SG)$/.test(this.$lang)) {
        return zhHans
      }
      if (/^zh\-(HK|MO|TW)$/.test(this.$lang)) {
        return zhHant
      }
      if (/^ja\-JP$/.test(this.$lang)) {
        return ja
      }
      if (/^ko\-KR$/.test(this.$lang)) {
        return ko
      }
      return en
    }
  }
}
