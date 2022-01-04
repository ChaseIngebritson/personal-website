<template>
  <b-navbar type="dark" toggleable="md" :class="{ bordered }" :style="cssVars">
    <b-button 
      v-b-toggle.nav-collapse 
      variant="outline-primary"
      v-if="!$screen.md">
      <Hamburger :filled="navIsOpen" />
    </b-button>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" :active="$route.name === 'home'">Home</b-nav-item>
        <b-nav-item to="portfolio" :active="$route.name === 'portfolio'">Portfolio</b-nav-item>
        <b-nav-item to="tools" :active="$route.name === 'tools'">Tools</b-nav-item>
        <b-nav-item to="contact" :active="$route.name === 'contact'">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Hamburger from '@/components/Hamburger'

export default {
  name: 'Nav',
  components: {
    Hamburger
  },
  props: {
    routes: Object,
    bordered: {
      type: Boolean,
      default: false
    },
    percentageScrolled: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    navIsOpen: false,
    scrolledToTop: true
  }),
  computed: {
    cssVars () {
      return {
        '--border-percent': `${this.percentageScrolled}%` ,
      }
    }
  },
  mounted () {
    this.$root.$on('bv::collapse::state', (target) => {
      if (target === 'nav-collapse') this.navIsOpen = !this.navIsOpen
    })
  }
}
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  padding-left: 15px;
  padding-right: 15px;

  &::before {
    content: '';
    transition: 0.3s ease-out width;
    border-bottom: 3px solid var(--secondary);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
  }

  &.bordered::before {
    width: var(--border-percent);
  }
}

.navbar-dark .navbar-nav .nav-link {
  color: var(--white);
  font-weight: 500;
  font-size: 24px;
  position: relative;
  padding: 10px;

  &:hover, &:active {
    color: var(--secondary);
  }

  &:before {
    content: "";
    stroke: var(--secondary);
    background-color: var(--secondary);
    height: 3px;
    border-radius: 7px;
    position: absolute;
    bottom: 10px;
    width: 40px;
    transform-origin: left;

    transform: scaleX(0);
    left: 12px;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before, &:active:before, &.active:before {
    transform: scaleX(1);
    left: 12px;
  }
}
</style>
