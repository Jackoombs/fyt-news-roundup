declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const Schema: DocumentNode;

  const value: DocumentNode;
  export default value;
}

export interface Outlets {
  outlets: {
    name: string;
  }[];
}

export interface Articles {
  articles: Article[];
}

export interface Article {
  id: string;
  title?: string;
  category?: string;
  outletId: string;
  outlet: {
    name: string;
  };
  summary?: string;
  content: string[];
  condensedBody?: string;
  link: string;
  saved: boolean;
  keywords: string[];
  date?: Date;
}

export interface Categories {
  categories: Category[];
}

export interface Category {
  url: string;
  active: boolean;
  outletName: string;
}

export interface OrderBy {
  field: "title" | "date" | "url";
  direction: "asc" | "desc";
}

export interface GetArticlesOptions {
  filterBy?: {
    outletName?: string[];
    category?: string;
    startDate?: Date;
    endDate?: Date;
    search?: string;
    saved?: boolean;
  };
  orderBy?: OrderBy[];
  take?: number;
  skip?: number;
}

export interface GetCategoriesOptions {
  filterBy?: {
    outletName?: string;
    active?: boolean;
  };
  orderBy?: OrderBy[];
  take?: number;
  skip?: number;
}

export interface UpdateCategoryInput {
  url: string;
  active: boolean;
}

export interface UpdateArticleInput {
  id: string;
  saved: boolean;
}
