<template>
  <b-button 
    :size="$screen.md ? 'lg' : 'md'" 
    variant="outline-secondary"
    :block="!$screen.md"
    type="submit"
  >
    <slot name="done" v-if="done" />
    <b-spinner medium style="width: 1.5rem; height: 1.5rem;" label="Spinning" v-else-if="loading" />
    <slot v-else />
  </b-button>
</template>

<script>
export default {
  name: 'Link',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    done: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
