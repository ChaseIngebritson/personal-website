<template>
  <b-container class="tools-view">
    <b-row>
      <b-col offset="2" offset-md="1">
        <Heading>Tools</Heading>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-form-group
          label="Search"
          label-for="input-search"
          label-sr-only
        >
          <b-form-input
            id="input-search"
            v-model="search"
            type="text"
            placeholder="Search"
            name="search"
            required
          />
          <span class="underline" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>
          <b-badge v-for="tool in activeTools" :key="tool" pill class="mr-2 mb-2">
            {{ tool }}
          </b-badge>
        </h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Heading from '@/components/Heading'
import tools from '@/mixins/tools'

export default {
  name: 'Tools',
  components: { Heading },
  mixins: [tools],
  data: () => ({
    search: ''
  }),
  computed: {
    activeTools () {
      return this.tools
        .filter(tool => tool.toUpperCase().includes(this.search.toUpperCase()))
        .sort((a, b) => a.localeCompare(b))
    }
  }
}
</script>

<style scoped>

</style>