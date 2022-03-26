<template>
  <div class="bg-wave" :class="waveClasses" v-html="WaveBackground" />
</template>

<script>
import WaveBackground from '!raw-loader!../assets/img/wave.svg'

export default {
  name: 'SbaWave',
  props: {
    waveClasses: {
      type: [String, Array, Object],
      default: () => []
    }
  },
  data() {
    return {WaveBackground};
  }
}
</script>

<style scoped>
.bg-wave {
  position: fixed;
  z-index: -10;
  width: 100%;
  height: 100px;
}
</style>
