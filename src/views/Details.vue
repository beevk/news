<template>
  <div class="details">
    <h1>This is news description.</h1>
  </div>
</template>

<script  lang="ts">
import { Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  name: 'Details',
  methods: {
    ...mapActions({
      fetchNews: 'fetchNews',
    }),
  },
  computed: {
    ...mapGetters({
      news: 'allNews',
      isLoading: 'isLoading',
      hasError: 'hasError',
      errorMessage: 'errorMessage',
    }),
  },
});
</script>
