<template>
  <svg 
    class="hamburger" 
    :class="filled ? 'filled' : ''"
    width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="11.5" y1="3.5" x2="38.5" y2="3.5" stroke="#5AFFA3" stroke-width="3" stroke-linecap="round"/>
    <line x1="6.5" y1="15.5" x2="38.5" y2="15.5" stroke="#5AFFA3" stroke-width="3" stroke-linecap="round"/>
    <line x1="6.5" y1="27.5" x2="33.5" y2="27.5" stroke="#5AFFA3" stroke-width="3" stroke-linecap="round"/>
  </svg>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    filled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped lang="scss">
.hamburger line {
  transition: all 0.3s;
}

.hamburger.filled line {
  &:first-child {
    transform: translateX(-5px);
  }

  &:last-child {
    transform: translateX(5px);
  }
}
</style>
