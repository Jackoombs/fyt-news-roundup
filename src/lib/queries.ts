import { getClient } from "./client";
import { gql } from "@apollo/client";

const apollo = getClient();

export const GET_ARTICLES = gql`
  query (
    $filterBy: FilterArticleInput
    $orderBy: [OrderArticleInput!]
    $take: Int
    $skip: Int
  ) {
    articles(filterBy: $filterBy, orderBy: $orderBy, take: $take, skip: $skip) {
      title
      date
      content
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
