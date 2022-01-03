<template>
  <b-col class="content">
    <!-- Using form-row for the compact gutters -->
    <div :is="$screen.md ? 'b-row' : 'b-form-row'" align-h="start">
      <b-col cols="5" sm="5" md="5" lg="4" xl="4" align-self="center" class="headshot-container">
        <b-img 
          :src="`${baseUrl}assets/images/headshot.jpeg`" 
          right
          class="headshot"
        />
      </b-col>
      <b-col v-if="!$screen.md" class="button-container">
        <b-row>
          <b-col align-self="end">
            <portal-target name="buttons-md" />
          </b-col>
        </b-row>
      </b-col>
      <b-col align-self="center" md="6">
        <h3>Hello! I'm</h3>
        <h1>Chase Ingebritson</h1>
        <h2>Software Engineer</h2>
        <p>
          I'm focused on the design and creation of comprehensive web-based solutions that utilize and build upon new, innovative technologies. 
          I have experience working with teams to roadmap tasks and assist in guiding projects from inception to launch.
        </p>
        <portal to="buttons-md" :disabled="$screen.md">
          <b-button 
            :size="$screen.md ? 'lg' : 'md'"
            :block="!$screen.md"
            class="contact-me"
            :href="mailLink"
            target="_blank">
            Contact Me
          </b-button>
          <b-button 
            :size="$screen.md ? 'lg' : 'md'" 
            variant="outline-secondary"
            :block="!$screen.md"
            href="https://www.linkedin.com/in/chase-ingebritson/">
            Download CV
            <BIconFileEarmarkArrowDownFill class="download-icon" />
          </b-button>
        </portal>
      </b-col>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    baseUrl: process.env.BASE_URL,
  }),
  computed: {
    mailLink () {
      const subject = encodeURIComponent('Hi Chase, I\'d like to get in touch!')
      return `mailto:chase@inge.me?subject=${subject}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/shared.scss';

.content {
  z-index: 2;
  transform: translateY(-5vh);
}

.headshot {
  border-radius: 7px;
  max-width: 100%;
  max-height: 250px;
}

.contact-me {
  margin-right: 1.5rem;
}

.headshot-container, .button-container {
  margin-bottom: 1rem;
}

.headshot-container {
  height: 100%;
}

.button-container > .row {
  height: 100%;
}

@media screen and (min-width: 400px) {
  .content {
    transform: translateY(-10vh);
  }
}

@include media-breakpoint-up(md) {
  .content {
    transform: translateX(-7.5%);
  }

  .headshot-container, .button-container {
    margin-bottom: 0;
  }

  .download-icon {
    margin-left: 0.5rem;
  }

  .headshot {
    max-height: 600px;
  }
}
</style>