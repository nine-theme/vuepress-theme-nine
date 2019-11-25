export default {
  data() {
    return {
      nine: {},
      colors: {
        blue: '#4ea7ee',
        red: '#f26d6d',
        green: '#33af6c',
        orange: '#f09b5f'
      }
    };
  },

  mounted() {
    this.nine = {
      themes: ['blue', 'red', 'green', 'orange'],
      disableDarkTheme: false
    };

    this.nine.hasThemes = this.$themeConfig.themePicker || true
  },
};
