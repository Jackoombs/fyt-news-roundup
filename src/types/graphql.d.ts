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
