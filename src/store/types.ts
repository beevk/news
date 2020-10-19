type Nullable<T> = T | undefined | null;

export interface NewsInterface {
  source: {
    id: Nullable<string>;
    name: Nullable<string>;
  };
  author: Nullable<string>;
  title: string;
  description: Nullable<string>;
  url: string;
  urlToImage: Nullable<string>;
  publishedAt: Nullable<string>;
  content: Nullable<string>;
  slug?: string;
}

export interface ActionInterface {
  // eslint-disable-next-line
  commit: any;
}

export interface StateInterface {
  isLoading: boolean;
  hasError: boolean;
  news: NewsInterface[];
  searchQuery: string;
  errorMessage: string;
  currentPage?: string;
}
