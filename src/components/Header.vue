<template>
  <v-container class="filterComponent">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ message }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  props: {
    message: String,
    filterOptions: [],
  },
  data: () => ({
    searchQuery: '',
  }),
});
</script>

<style scoped>
  .filterComponent {
    border: 1px solid limegreen;
  }
</style>
