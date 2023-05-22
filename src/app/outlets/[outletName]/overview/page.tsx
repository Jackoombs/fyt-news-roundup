import { Article } from "@/types/graphql";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";

interface Props {
  params: { outletName: string };
}

const Page = async ({ params }: Props) => {
  const apollo = getClient();

  return <div>{params.outletName}</div>;
};

export default Page;
