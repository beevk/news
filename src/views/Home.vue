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
       @click="onClick(topic.publishedAt, topic.title)"
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

  // computed: mapGetters(['allNews']);
  // mapActions([fetchNews]);
  // onClick(url: string) {
  //   this.$router.push({
  //     name: 'newsDetails',
  //     params: { name: url },
  //   });
  // };
  // get mapGetters({
  //   allNews: 'allNews'
  // });

  // Move this method to SDK later
  private sluggify = (publishedDate: string, name: string): string => {
    const trimmedDate = publishedDate.trim().split('T')[0];
    const title = name.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    // return trimmedDate;
    return `${trimmedDate}-${title}`;
  }

  onClick(publishedAt: string, title: string) {
    const url = this.sluggify(publishedAt, title);
    this.$router.push({
      name: 'newsDetails',
      params: { name: url },
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
