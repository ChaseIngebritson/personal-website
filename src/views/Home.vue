<template>
  <b-container fluid class="content">
    <b-row class="landing" align-v="center">
      <b-col>
        <!-- Using form-row for the compact gutters -->
        <div :is="$screen.md ? 'b-row' : 'b-form-row'">
          <b-col cols="6" md="6" lg="5" align-self="center" class="headshot-container">
            <b-img 
              :src="`${baseUrl}assets/images/headshot.jpg`" 
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
          <b-col align-self="center">
            <h3>Hello! I'm</h3>
            <h1>Chase Ingebritson</h1>
            <h2>Software Engineer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
            <portal to="buttons-md" :disabled="$screen.md">
              <b-button 
                :size="$screen.md ? 'lg' : 'md'"
                :block="!$screen.md"
                class="contact-me">
                Contact Me
              </b-button>
              <b-button 
                :size="$screen.md ? 'lg' : 'md'" 
                variant="outline-secondary"
                :block="!$screen.md"
              >
                Download CV
                <BIconFileEarmarkArrowDownFill class="download-icon" />
              </b-button>
            </portal>
          </b-col>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    baseUrl: process.env.BASE_URL,
  }),
}
</script>

<style lang="scss" scoped>
@import '@/styles/theme.scss';
@import '~bootstrap/scss/bootstrap.scss';

.content {
  z-index: 2;
  transform: translateY(-15%);
}

.headshot {
  z-index: 2;
  border-radius: 7px;
  max-width: 100%;
  height: 100%
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

@include media-breakpoint-up(md) {
  .content {
    transform: translateX(-15%);
    width: 110%;
    max-height: 100vh;
  }
  
  .landing {
    height: calc(100vh - 60px);
  }

  .headshot-container, .button-container {
    margin-bottom: 0;
  }

  .download-icon {
    margin-left: 0.5rem;
  }
}
</style>