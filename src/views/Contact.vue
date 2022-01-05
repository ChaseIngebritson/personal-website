<template>
  <b-container class="contact-view">
    <b-row>
      <b-col offset="2" offset-md="1">
        <Heading>Contact</Heading>
      </b-col>
    </b-row>
    <b-row>
      <b-col offset-md="3" md="6" class="text-center mb-3">
        <h2 class="text-white h3">Have a question? Just want to talk? Feel free to send a message!</h2>
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
      <SubmitButton
        :loading="request.loading" 
        :done="request.done" 
        doneMessage="Done"
        :error="request.error"
      >
        Submit
        <b-icon icon="envelope" class="pl-2" />

        <template v-slot:done>
          Done
          <b-icon icon="check-circle" class="pl-2" />
        </template>
      </SubmitButton>
    </b-form>
  </b-container>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import Heading from '@/components/Heading'
import SubmitButton from '@/components/SubmitButton'
import { createContactMessage } from '@/graphql/mutations'

export default {
  name: 'Contact',
  components: { 
    Heading, 
    SubmitButton 
  },
  data: () => ({
    form: {
      email: '',
      name: '',
      message: 'Hey Chase, I\'d like to get in touch!'
    },
    request: {
      loading: false,
      done: false,
      error: false
    }
  }),
  methods: {
    async handleFormSubmit (e) {
      e.preventDefault()

      try {
        this.request.loading = true
        const results = await API.graphql(graphqlOperation(createContactMessage, { input: this.form }))
        console.log(results)
        this.request.loading = false
        this.request.done = true

        setTimeout(() => {
          this.request.done = false
        }, 10000)
      } catch (e) {
        this.request.loading = false
        this.request.error = true
      }
    }
  }
}
</script>

<style scoped>

</style>