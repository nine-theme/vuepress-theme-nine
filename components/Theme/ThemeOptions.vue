<template>
  <div class="theme-options">
    <ul
      v-if="nine.hasThemes"
      class="color-theme-options"
    >
      <li>
        <a
          href="#"
          class="default-theme"
          @click.prevent="setTheme()"
        />
      </li>
      <li
        v-for="color in nine.themes"
        :key="color"
      >
        <a
          href="#"
          :class="`${color}-theme`"
          :style="{background: colors[color]}"
          @click.prevent="setTheme(color)"
        />
      </li>
    </ul>
    <div
      v-if="!nine.disableDarkTheme"
      class="dark-theme-options toggle-option"
    >
      <label for="dark-theme-toggle">Enable Dark Theme?</label>
      <input
        id="dark-theme-toggle"
        v-model="darkTheme"
        type="checkbox"
        @change="toggleDarkTheme"
      >
    </div>
  </div>
</template>

<script>
  import settingConfig from './settingConfig.js';

  export default {
    name: 'ThemeOptions',

    mixins: [settingConfig],

    data() {
      return {
        darkTheme: 'false'
      };
    },

    mounted() {
      const theme = localStorage.getItem('nine-theme')
      const night = localStorage.getItem('nine-night')
      const classes = document.body.classList;

      this.darkTheme = night === 'true' ? true : false
      if (night === 'true') classes.add(`nine-theme-night`)
      if (theme) this.setTheme(theme)
    },

    methods: {
      toggleDarkTheme() {
        localStorage.setItem('nine-night', this.darkTheme)
        const classes = document.body.classList;
        if (this.darkTheme) {
          const oldColor = [...classes]
          classes.value = ''
          classes.add(`nine-theme-night`)
          oldColor.forEach(item => {
            classes.add(item)
          })
        }	
        else {
          classes.remove(`nine-theme-night`)
        }	
      },
      setTheme(theme, moveClass = true) {
        const colorThemes = this.nine.themes;

        const classes = document.body.classList;
        const themes = colorThemes.map(colorTheme => `nine-theme-${colorTheme}`);

        if (!theme) {
          if (moveClass) localStorage.removeItem('nine-theme');
          classes.remove(...themes);
          return 
        }

        classes.remove(...themes.filter(t => t !== `nine-theme-${theme}`));

        if (moveClass) {
          classes.add(`nine-theme-${theme}`);
          localStorage.setItem('nine-theme', theme);
        } else {
          localStorage.removeItem('nine-theme')
          classes.remove(`nine-theme-${theme}`);
        }
      }
    },
  };
</script>

<style lang="stylus">

.color-theme-options {
	display: flex;
	justify-content: space-around;
	li {
		width: 33%;
		text-align: center;

		a {
			width: 15px;
			height: 15px;
			border-radius: 2px;

			&.default-theme {
				background-color: $accentColor;
			}

			&.blue-theme {
				background-color: $blueAccentColor;
			}

			&.red-theme {
				background-color: $redAccentColor;
			}
		}
	}
}

.toggle-option {
	display: flex;
	justify-content: space-between;
	align-items: center;

	label {
		padding-right: 0.25em;
	}
}
</style>
