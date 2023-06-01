import { gql } from "@apollo/client";

export const GET_ARTICLE = gql`
  query ($id: String!) {
    article(id: $id) {
      id
      saved
      title
      date
      summary
      content
      keywords
      outlet {
        name
      }
      category
    }
  }
`;

export const GET_OUTLETS = gql`
  query {
    outlets {
      name
    }
  }
`;

export const GET_ARTICLES = gql`
  query (
    $filterBy: FilterArticleInput
    $orderBy: [OrderArticleInput!]
    $take: Int
    $skip: Int
  ) {
    articles(filterBy: $filterBy, orderBy: $orderBy, take: $take, skip: $skip) {
      id
      title
      date
      outlet {
        name
      }
      category
    }
  }
`;

export const GET_RELATED_ARTICLES = gql`
  query ($id: String!, $keywords: [String!]!, $take: Int) {
    relatedArticles(id: $id, keywords: $keywords, take: $take) {
      id
      saved
      title
      date
      summary
      content
      keywords
      outlet {
        name
      }
      category
    }
  }
`;

export const GET_CATEGORYS = gql`
  query ($filterBy: FilterCategoryInput, $take: Int, $skip: Int) {
    categories(filterBy: $filterBy, take: $take, skip: $skip) {
      url
      active
      outlet {
        name
      }
    }
  }
`;
