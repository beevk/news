<template>
  <div class="details">
    <div v-if="article">
      <img :src="`${article.urlToImage}`" alt="news title image">
      <h1>{{article.title}}</h1>
      <sub>{{moment(article.publishedAt)}}</sub>
      <p>{{article.description}} <a :href="article.url" target="_blank">Read more...</a></p>
    </div>
  </div>
</template>

<script  lang="ts">
import { Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

export default Vue.extend({
  name: 'Details',

  computed: {
    ...mapGetters({
      article: 'singleNewsArticle',
    }),
  },

  methods: {
    ...mapActions({
      setCurrentPage: 'setCurrentPage',
    }),

    moment(publishedAt: string) {
      return moment(publishedAt).format('MMMM Do YYYY, h:mm:ss a');
    },
  },

  created() {
    const { name } = this.$route.params;
    this.setCurrentPage(name);
  },
});
</script>
