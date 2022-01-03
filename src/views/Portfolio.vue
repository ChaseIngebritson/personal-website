<template>
  <b-container class="portfolio-view">
    <b-row>
      <b-col offset="2" offset-md="1">
        <Heading>Portfolio</Heading>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="project in projects" :key="project.name" cols="12" md="6" class="project">
        <b-img-lazy :src="project.image" center fluid height="200px" class="image mb-2" />
        <Link 
          :href="project.link" 
          target="_blank" 
          class="h3 text-white mb-0"
          v-if="project.link"
        >
          {{ project.name }}
        </Link>
        <h2 
          class="h3 text-white mb-0"
          v-else
        >
          {{ project.name }}
        </h2>
        <p class="text-secondary">{{ project.origin }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import projects from '@/mixins/projects'
import Heading from '@/components/Heading'
import Link from '@/components/Link'

export default {
  name: 'Portfolio',
  components: { 
    Heading, 
    Link
  },
  mixins: [projects]
}
</script>

<style lang="scss" scoped>
@import '@/styles/shared.scss';

.portfolio-view {
  margin-top: 1rem;
}

.project {
  margin-bottom: 1rem;

  .image {
    border-radius: 7px;
    width: 100%;
    object-fit: cover;
    height: 200px;
  }
}

@include media-breakpoint-up(md) {
  .project .image {
    height: 300px;
  }
}
</style>