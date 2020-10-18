<template>
  <v-card
    elevation="2"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      v-if="hasImage"
      height="250"
      lazy-src="https://via.placeholder.com/150"
      :src="`${newsDetails.urlToImage}`"
    />
    <v-card-text class="imageFiller" v-else>
      <div>
        {{newsDetails.description}}
      </div>
    </v-card-text>
    <v-card-title>
      {{newsDetails.title}}
    </v-card-title>
    <v-card-subtitle v-if="hasAuthor">
      - {{newsDetails.author}}
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
// import { NewsInterface } from '@/store/types';

export default Vue.extend({
  name: 'NewsCard',
  props: ['newsDetails'],
  data: () => ({
  }),
  computed: {
    hasAuthor(): boolean {
      return !!(this.newsDetails.author);
    },
    hasImage(): boolean {
      return !!(this.newsDetails.urlToImage);
    },
  },
});
</script>

<style scoped>
  .imageFiller {
    min-height: 250px;
    display: flex;
    align-items: center;
    background-color: #1976d2;
    color: #fff;
  }
</style>
