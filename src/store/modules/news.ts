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
};

const sluggify = (publishedDate?: string, name?: string): string => {
  if (!(publishedDate || name)) {
    return '';
  }
  const trimmedDate = publishedDate?.split('T')[0];
  const title = name?.toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return `${trimmedDate}-${title}`;
};

const getters = {
  allNews: (state: StateInterface): NewsInterface[] => state.news,
  isLoading: (state: StateInterface): boolean => state.isLoading,
  hasError: (state: StateInterface): boolean => state.hasError,
  errorMessage: (state: StateInterface): string => state.errorMessage,
  // eslint-disable-next-line max-len
  singleNewsArticle: (state: StateInterface, slug: string): NewsInterface | undefined => state.news.find((article) => article.slug === slug),
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
        // const slug: string = sluggify(publishedAt, title);
        // console.log('SLUG:::', slug, copy);
        // copy.slug = slug;
        return copy;
      },
    );

    commit('setNews', articlesWithSlug);
    commit('clearNewsError', false);
    return commit('setLoading', false);
  },
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
};

export default {
  initialState,
  getters,
  actions,
  mutations,
};
