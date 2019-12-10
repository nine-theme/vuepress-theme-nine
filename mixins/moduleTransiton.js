export default {
  data () {
    return {
      nineShowModule: false
    }
  },
  mounted () {
    this.nineShowModule = true
  },
  destroyed () {
    this.nineShowModule = false
  }
}
