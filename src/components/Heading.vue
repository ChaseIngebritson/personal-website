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
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.dash {
  &::before {
    content: "";
    border-bottom: 2px solid var(--secondary);
    border-radius: 10px;

    position: absolute;
    // Half way - border offset - half the margin
    top: calc(50% - 2px);
    height: 2px;
    left: -40px;
    width: 45px;
  }
}

@include media-breakpoint-up(md) {
  .heading {
    margin-bottom: 2rem;
  }

  .dash {  
    &::before {
      border-width: 3px;
      top: calc(50% - 3px - .5rem);
      height: 3px;
      left: -70px;
      width: 70px;
    }
  }
}
</style>
