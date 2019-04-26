<template>
  <div class="error-page">
    <div class="content-con">
      <img
        :src="src"
        :alt="code"
      >
      <div class="text-con">
        <h4>{{ code }}</h4>
        <h5>{{ desc }}</h5>
      </div>
      <BackBtnGroup class="back-btn-group" />
    </div>
  </div>
</template>

<script>
import './error.less'
import BackBtnGroup from './BackBtnGroup.vue'
export default {
  name: 'ErrorContent',
  components: {
    BackBtnGroup,
  },
  props: {
    code: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  },
}
</script>
