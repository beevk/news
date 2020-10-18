<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div>
        <span>NEWS</span>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Header message="Hello There"/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
});
</script>
