<template>
  <a 
    :href="href" 
    :target="target"
    class="link"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    href: {
      type: String
    },
    target: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/shared.scss';

.link {
  color: var(--white);
  position: relative;

  &:hover, &:active {
    color: var(--secondary);
    text-decoration: none;
  }

  &:before {
    content: "";
    stroke: var(--secondary);
    background-color: var(--secondary);
    height: 3px;
    border-radius: 7px;
    position: absolute;
    bottom: -3px;
    width: 90%;
    transform-origin: left;

    transform: scaleX(0);
    left: 2px;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before, &:active:before, &.active:before {
    transform: scaleX(1);
    left: 2px;
  }
}
</style>
