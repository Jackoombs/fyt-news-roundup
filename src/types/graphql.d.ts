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

export interface Article {
  id: string;
  title?: string;
  category?: string;
  outletId: string;
  summary?: string;
  content?: string;
  condensedBody?: string;
  link: string;
  saved: boolean;
  keywords: string[];
  date?: Date;
}
