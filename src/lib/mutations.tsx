import { gql } from "@apollo/client";

export const UPDATE_CATEGORY = gql`
  mutation ($updateCategoryInput: UpdateCategoryInput!) {
    updateCategory(updateCategoryInput: $updateCategoryInput) {
      active
    }
  }
`;

export const UPDATE_ARTICLE = gql`
  mutation ($updateArticleInput: UpdateArticleInput!) {
    updateArticle(updateArticleInput: $updateArticleInput) {
      saved
    }
  }
`;
