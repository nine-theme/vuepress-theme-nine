export default {
	data() {
		return {
			nine: {},
			colors: {
				blue: '#2196f3',
				red: '#f26d6d',
				green: '#3eaf7c',
				orange: '#fb9b5f'
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
