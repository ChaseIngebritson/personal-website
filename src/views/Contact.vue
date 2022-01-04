<template>
  <b-container class="contact-view">
    <b-row>
      <b-col offset="2" offset-md="1">
        <Heading>Contact</Heading>
      </b-col>
    </b-row>
    <b-form @submit="handleFormSubmit">
      <b-row>
        <b-col>
          <b-form-group
            label="Name"
            label-for="input-1"
            label-sr-only
          >
            <b-form-input
              id="input-name"
              v-model="form.name"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <span class="underline" />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            label="Email"
            label-for="input-email"
            label-sr-only
          >
            <b-form-input
              id="input-email"
              v-model="form.email"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <span class="underline" />
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-form-group
        label="Message"
        label-for="input-message"
        label-sr-only
      >
        <b-form-textarea
          id="input-message"
          v-model="form.message"
          placeholder="Message"
          name="message"
          rows="6"
        />
        <span class="underline" />
      </b-form-group>
      <b-button 
        :size="$screen.md ? 'lg' : 'md'" 
        variant="outline-secondary"
        :block="!$screen.md"
        type="submit"
      >
        Submit
        <BIconEnvelope class="download-icon pl-2" />
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import Heading from '@/components/Heading'
import { createContactMessage } from '@/graphql/mutations'

export default {
  name: 'Contact',
  components: { Heading },
  data: () => ({
    form: {
      email: '',
      name: '',
      message: 'Hey Chase, I\'d like to get in touch!'
    }
  }),
  computed: {
    mailLink () {
      const subject = encodeURIComponent('Hi Chase, I\'d like to get in touch!')
      return `mailto:chase@inge.me?subject=${subject}&body=${encodeURIComponent(this.form.message)}`
    }
  },
  methods: {
    async handleFormSubmit (e) {
      e.preventDefault()
      await API.graphql(graphqlOperation(createContactMessage, { input: this.form }))
    }
  }
}
</script>

<style scoped>

</style>