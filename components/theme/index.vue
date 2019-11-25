<template lang="pug">
  div(class="color-picker" v-click-outside="hideMenu" v-if="showSettings")
    a(@click.prevent="showMenu = !showMenu" class="color-button" href="#")
      i(class="iconfont nine-color")
    transition(mode="out-in" name="menu-transition")
      div(class="color-picker-menu" v-show="showMenu")
        ThemeOptions
</template>

<script lang="js">
  import ClickOutside from 'vue-click-outside';
  import ThemeOptions from '@theme/components/theme/ThemeOptions.vue';
  import nineConfig from './nineConfig.js';

  export default {
    name: 'ThemeSettings',

    directives: {
      'click-outside': ClickOutside,
    },

    components: {
      ThemeOptions
    },

    mixins: [nineConfig],

    data() {
      return {
        showMenu: false,
      };
    },

    computed: {
      showSettings() {
        const {nine} = this;
        return nine.hasThemes || nine.disableDarkTheme !== true || nine.disableThemeIgnore !== true;
      },
    },

    methods: {
      hideMenu() {
        this.showMenu = false;
      },
    },
  };
</script>

<style lang="stylus">

  .color-picker {
    position: relative;
    margin-right: 1em;

    .color-button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      .iconfont {
        font-size: 1.4rem;
        color: $accentColor
      }

      .settings-icon {
        width: 18px;
      }
    }

    .color-picker-menu {
      background-color: #fff;
      position: absolute;
      top: 40px;
      left: 50%;
      min-width: 100px;
      margin: 0;
      padding: 1em;
      border: 1px solid $borderColor;
      border-radius: 4px;
      transform: translateX(-50%);
      z-index: 150;

      &::before {
        content: '';
        position: absolute;
        top: -7px;
        left: 50%;
        border-style: solid;
        border-color: transparent transparent $borderColor;
        border-width: 0 7px 7px;
        transform: translateX(-50%);
      }

      &.menu-transition-enter-active,
      &.menu-transition-leave-active {
        transition: all 0.25s ease-in-out;
      }

      &.menu-transition-enter,
      &.menu-transition-leave-to {
        top: 50px;
        opacity: 0;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    }
  }

  .nine-theme-dark {
    .color-picker-menu {
      background-color: $darkPrimaryBg;
      border-color: $darkBorderColor;

      &::before {
        border-bottom-color: $darkBorderColor;
      }
    }
  }

  @media (max-width: $MQMobile) {
    .color-picker {
      margin-right: 0;

      .color-picker-menu {
        left: calc(50% - 35px);

        &::before {
          left: calc(50% + 35px);
        }
      }
    }
  }
</style>
