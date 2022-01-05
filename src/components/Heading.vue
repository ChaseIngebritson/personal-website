<template>
  <h1 class="heading dash h1">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'Heading'
}
</script>

<style scoped lang="scss">
@import '@/styles/shared.scss';

.heading {
  margin-bottom: 2rem;
}

.dash {
  &::before {
    content: "";
    border-bottom: 2px solid var(--secondary);
    border-radius: 10px;

    position: absolute;
    // Half way - border offset - half the margin
    top: calc(50% - 2px - .75rem);
    height: 2px;
    left: -40px;
    width: 45px;
  }
}

@include media-breakpoint-up(md) {
  .dash {  
    &::before {
      border-bottom: 3px solid var(--secondary);
      top: calc(50% - 3px - .75rem);
      height: 3px;
      left: -70px;
      width: 70px;
    }
  }
}
</style>
