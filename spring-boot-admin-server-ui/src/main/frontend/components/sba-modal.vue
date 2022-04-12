<template>
  <div v-if="open" class="modal is-active" role="dialog">
    <div class="modal-background" />

    <div class="modal-card">
      <header v-if="$slots.header" class="modal-card-head">
        <p class="modal-card-title">
          <slot name="header" />
        </p>
        <button class="delete" aria-label="close" @click="close" />
      </header>
      <section class="modal-card-body">
        <slot name="body" />
      </section>
      <footer v-if="$slots.footer" class="modal-card-foot">
        <slot name="footer" />
      </footer>
    </div>
    <button v-if="!$slots.header" class="modal-close is-large" aria-label="close" @click="close" />
  </div>
</template>

<script>
export default {
  name: 'SbaModal',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: Boolean
  },
  methods: {
    close() {
      this.$emit('change', false);
    }
  }
}
</script>

<style scoped>

</style>
