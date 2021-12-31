<template>
  <b-container class="portfolio-view">
    <b-row>
      <b-col offset="2" offset-md="1">
        <h1 class="heading">Portfolio</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="project in projects" :key="project.name" cols="12" md="6" class="project">
        <b-img :src="project.image" center class="image" />
        <!-- <div class="image" :style='`background-image: url("${project.image}")`'>
          <div class="name">{{ project.name }}</div>
          <div class="origin">{{ project.origin }}</div>
          <div class="curtain"></div>
        </div> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import projects from '@/mixins/projects'

export default {
  name: 'Portfolio',
  mixins: [projects]
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap.scss';

.portfolio-view {
  margin-top: 1rem;
}

.heading {
  font-size: 36px;

  &::before {
    content: "";
    border-bottom: 2px solid var(--secondary);
    border-radius: 10px;

    position: absolute;
    top: calc(50% - 2px);
    height: 2px;
    left: -40px;
    width: 45px;
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
    width: 100%;
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

  .heading {
    font-size: 48px;
    
    &::before {
      border-bottom: 3px solid var(--secondary);
      top: calc(50% - 3px);
      height: 3px;
      left: -70px;
      width: 70px;
    }
  }
}
</style>