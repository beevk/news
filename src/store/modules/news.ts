// import { ActionTree } from 'vuex';
// import { VuexModule, Module } from 'vuex-module-decorators';

import {
  NewsInterface, StateInterface, ActionInterface,
} from '../types';

const initialState: StateInterface = {
  isLoading: false,
  hasError: false,
  news: [],
  searchQuery: '',
  errorMessage: '',
  currentPage: '',
};

const sluggify = (article: NewsInterface): string => {
  const { publishedAt, title } = article;
  // const sluggify = (publishedDate: string, name: string): string => {
  if (!(publishedAt || title)) {
    return '';
  }
  const trimmedDate = publishedAt?.split('T')[0];
  const sluggifiedTitle = title?.toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return `${trimmedDate}-${sluggifiedTitle}`;
};

const getters = {
  allNews: (state: StateInterface): NewsInterface[] => state.news,
  isLoading: (state: StateInterface): boolean => state.isLoading,
  hasError: (state: StateInterface): boolean => state.hasError,
  errorMessage: (state: StateInterface): string => state.errorMessage,
  // eslint-disable-next-line max-len
  singleNewsArticle: (state: StateInterface): NewsInterface | undefined => {
    const currentSlug = state.currentPage;
    const allNews = state.news;
    if (!allNews) {
      return undefined;
    }
    const newsArticle = allNews.find((article) => article.slug === currentSlug);
    return newsArticle;
  },
};

const actions = {
  async fetchNews({ commit }: ActionInterface) {
    commit('setLoading', true);

    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e');
    const data = await response.json();

    const { articles, status, message } = data;
    // eslint-disable-next-line
    console.log('fetchNews - data::: ', data, status);

    if (status !== 'ok') {
      commit('setLoading', false);
      return commit('setNewsError', message);
    }

    const articlesWithSlug: NewsInterface[] = articles.map(
      (article: NewsInterface): NewsInterface => {
        const copy: NewsInterface = { ...article };
        // const { publishedAt, title } = copy;
        const slug: string = sluggify(copy);
        // console.log('SLUG:::', slug, copy);
        copy.slug = slug;
        return copy;
      },
    );

    commit('setNews', articlesWithSlug);
    commit('clearNewsError', false);
    return commit('setLoading', false);
  },

  setCurrentPage(context: ActionInterface, slug: string) {
    // const { news } = this.$state;
    // if (!news) {
    //   context.dispatch('fetchNews');
    // }
    const pages: string = localStorage.getItem('visitedPages') || '';
    let allVisitedPages: string[] = [];
    if (pages) {
      allVisitedPages = JSON.parse(pages);
    }
    allVisitedPages.push(slug);
    const allVisitedPagesList = JSON.stringify(allVisitedPages);
    localStorage.setItem('visitedPages', allVisitedPagesList);
    context.commit('updateCurrentPage', slug);
  },

  // fetchNewsArticle({ commit }: ActionInterface) {
  // },
};

const mutations = {
  setLoading: (state: StateInterface, isLoading: boolean) => {
    state.isLoading = isLoading;
  },

  setNews: (state: StateInterface, news: NewsInterface[]) => {
    const oldNews = state.news;
    // eslint-disable-next-line
    console.log('setNews - data:::', oldNews);
    state.news = news;
  },

  setNewsError: (state: StateInterface, errorMessage: string) => {
    state.hasError = true;
    state.errorMessage = errorMessage;
  },

  clearNewsError: (state: StateInterface, hasError: boolean) => {
    state.hasError = hasError;
    state.errorMessage = '';
  },

  updateCurrentPage: (state: StateInterface, currentPage: string) => {
    state.currentPage = currentPage;
  },

};

export default {
  initialState,
  getters,
  actions,
  mutations,
};
