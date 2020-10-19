<template>
  <div class="details">
    <div v-if="article">
      <v-img
        max-height="60vh"
        :src="article.urlToImage"
        alt="news title image"
      ></v-img>
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

  data() {
    return {
      currentPage: this.$route.params,
    };
  },

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
    const { name } = this.currentPage;
    this.setCurrentPage(name);
  },
});
</script>

<style scoped>
  .textOnImage {
    background-color: rgb(25,118,210, 0.5);
    color: #fff;
  }
</style>>
