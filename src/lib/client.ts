import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/graphql", // Replace with your GraphQL server's endpoint
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
});
