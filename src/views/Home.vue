<template>
  <div class="home">
      <h1>Headlines</h1>
      <div
       v-for="topic in allNews"
       :key="`${topic.url}-${topic.title}`"
       @click="onClick(topic.publishedAt)"
      >
        <p>{{topic.title}}</p>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
// import Header from '@/components/Header.vue'; // @ is an alias to /src

@Component({
  components: {
    // Header,
  },
  methods: {
    onClick(url: string) {
      this.$router.push({
        name: 'newsDetails',
        params: { name: url },
      });
    },
  },
  computed: mapGetters(['allNews']),
})
export default class Home extends Vue {}

</script>
