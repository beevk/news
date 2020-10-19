<template>
  <div class="home">
      <h1>Headlines</h1>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="hasError">{{errorMessage}}</p>
      <div
       class="cards"
       v-else
       v-for="topic in news"
       :key="`${topic.url}`"
       @click="onClick(topic.slug)"
      >
        <NewsCard :newsDetails="topic" />
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
// import { State, Action, Getter } from 'vuex-class';
import NewsCard from '@/components/NewsCard.vue'; // @ is an alias to /src

@Component({
  components: {
    NewsCard,
  },
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
})
export default class Home extends Vue {
  // eslint-disable-next-line
  fetchNews!: () => any

  onClick(slug: string) {
    // const url = this.sluggify(publishedAt, title);
    this.$router.push({
      name: 'newsDetails',
      params: { name: slug },
    });
  }

  created() {
    this.fetchNews();
  }
}

</script>

<style scoped>
  .cards {
    display: flex;
  }
</style>
