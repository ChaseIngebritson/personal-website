<template>
  <b-col cols="9" offset="1">
    <b-row>
      <b-col>
        <h1 class="heading">Portfolio</h1>
      </b-col>
    </b-row>
    <b-row class="button-container">
      <b-col>
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="btn-radios-type"
            v-model="selectedType"
            :options="types"
            :aria-describedby="ariaDescribedby"
            button-variant="outline-secondary"
            size="lg"
            name="radio-btn-outline"
            buttons
          ></b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="project in selectedProjects" :key="project.name" cols="4" class="project">
        <div class="image" :style='`background-image: url("${project.image}")`'>
          <div class="name">{{ project.name }}</div>
          <div class="origin">{{ project.origin }}</div>
          <div class="curtain"></div>
        </div>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import projects from '@/mixins/projects'

export default {
  name: 'Portfolio',
  mixins: [projects],
  data: () => ({
    selectedType: 'all',
    types: [
      { text: 'All', value: 'all' },
      { text: 'Front End', value: 'front' },
      { text: 'Back End', value: 'back' }
    ]
  }),
  computed: {
    selectedProjects () {
      if (this.selectedType === 'all') return this.projects

      return this.projects.filter(project => 
        project.types.includes(this.selectedType)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';

.heading {
  &::before {
    content: "";
    border-bottom: 3px solid var(--secondary);
    border-radius: 10px;

    position: absolute;
    left: -70px;
    top: calc(50% - 3px);

    width: 70px;
    height: 3px;
  }
}

.button-container {
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.content {
  max-height: 100vh;
  z-index: 2;
  width: 110%;
}

.project {
  margin-bottom: 2.5rem;

  .image {
    border-radius: 7px;
    margin: 0 auto;
    width: 225px;
    height: 250px;
    position: relative;
    margin: auto;
  }

  .curtain {
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    &:hover {
      opacity: 50%;
    }
  }

  .name {
    font-size: 24px;
    font-weight: bold;
    color: var(--secondary);
  }

  .origin {
    color: white;
  }
}

@include media-breakpoint-up(md) {
  .landing {
    height: calc(100vh - 60px);
  }
}
</style>