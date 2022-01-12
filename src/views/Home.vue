<template>
  <b-col class="content">
    <!-- Using form-row for the compact gutters -->
    <div :is="$screen.md ? 'b-row' : 'b-form-row'" align-h="start">
      <b-col cols="5" sm="5" md="5" lg="4" xl="4" align-self="center" class="headshot-container">
        <b-img 
          alt="Chase Ingebritson headshot"
          :src="`${imgUrl}/headshot.jpeg`" 
          :sizes="[
            '(max-width: 200px) 175px',
            '(max-width: 403px) 140px',
            '(max-width: 500px) 150px',
            '(max-width: 542px) 175px',
            '(max-width: 691px) 225px',
            '(max-width: 824px) 275px',
            '(max-width: 949px) 300px',
            '(max-width: 1076px) 300px',
            '(max-width: 1178px) 325px',
            '(max-width: 1385px) 350px',
            '(max-width: 1400px) 425px',
            '500px'
          ]"
          :srcset="[
            `${imgUrl}/headshot_wmrvrb_c_scale,w_200.jpg 200w`,
            `${imgUrl}/headshot_wmrvrb_c_scale,w_403.jpg 403w`,
            `${imgUrl}/headshot_wmrvrb_c_scale,w_542.jpg 542w`,
            `${imgUrl}/headshot_wmrvrb_c_scale,w_691.jpg 691w`,
            `${imgUrl}/headshot_wmrvrb_c_scale,w_824.jpg 824w`,
            `${imgUrl}/headshot_wmrvrb_c_scale,w_949.jpg 949w`,
            `${imgUrl}/headshot_wmrvrb_c_scale,w_1076.jpg 1076w`,
            `${imgUrl}/headshot_wmrvrb_c_scale,w_1178.jpg 1178w`,
            `${imgUrl}/headshot_wmrvrb_c_scale,w_1385.jpg 1385w`,
            `${imgUrl}/headshot_wmrvrb_c_scale,w_1400.jpg 1400w`
          ]"
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
        <h2 class="subheading">Software Engineer</h2>
        <p>
          I'm focused on the design and creation of comprehensive web-based solutions that utilize and build upon new, innovative technologies. 
          I have experience working with teams to roadmap tasks and assist in guiding projects from inception to launch.
        </p>
        <portal to="buttons-md" :disabled="$screen.md">
          <b-button 
            :size="$screen.md ? 'lg' : 'md'"
            :block="!$screen.md"
            class="contact-me"
            to="contact">
            Contact Me
          </b-button>
          <b-button 
            :size="$screen.md ? 'lg' : 'md'" 
            variant="outline-secondary"
            :block="!$screen.md"
            href="https://www.linkedin.com/in/chase-ingebritson/">
            Download CV
            <b-icon-file-earmark-arrow-down-fill class="download-icon" />
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
    imgUrl: `${process.env.BASE_URL}assets/images`,
  })
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

.subheading {
  font-size: 2rem;
}

@media screen and (min-width: 400px) {
  .content {
    transform: translateY(-10vh);
  }
}

@include media-breakpoint-up(md) {
  h1 { 
    font-size: 64px;
  }
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