import { zhHans, zhHant, en, ja, ko } from '../locales/index'

export default {
  computed: {
    $nineLocales () {
      const nineLocales = this.$themeLocaleConfig.nineLocales || {}

      if (/^zh-(CN|SG)$/.test(this.$lang)) {
        return { ...zhHans, ...nineLocales }
      }
      if (/^zh-(HK|MO|TW)$/.test(this.$lang)) {
        return { ...zhHant, ...nineLocales }
      }
      if (/^ja-JP$/.test(this.$lang)) {
        return { ...ja, ...nineLocales }
      }
      if (/^ko-KR$/.test(this.$lang)) {
        return { ...ko, ...nineLocales }
      }
      return { ...en, ...nineLocales }
    }
  }
}
