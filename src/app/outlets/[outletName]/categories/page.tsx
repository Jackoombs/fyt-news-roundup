import DashboardSubHeader from "@/components/ui/DashboardSubHeader";
import AnimateWrapper from "@/components/ui/AnimateWrapper";
import { getClient } from "@/lib/client";
import { GET_CATEGORYS } from "@/lib/queries";
import { addWhiteSpace } from "@/lib/utils";
import { Categories, GetCategoriesOptions } from "@/types/graphql";
import { Card } from "@/components/ui/Card";
import CategoryCard from "@/components/Category/CategoryCard";

interface Props {
  params: { outletName: string };
}

const Page = async ({ params }: Props) => {
  const apollo = getClient();

  const options: GetCategoriesOptions = {
    filterBy: {
      outletName: addWhiteSpace(params.outletName),
    },
  };
  const { data } = await apollo.query<Categories>({
    query: GET_CATEGORYS,
    variables: options,
  });

  return (
    <AnimateWrapper>
      <div>
        <DashboardSubHeader>Pages</DashboardSubHeader>
        <Card>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {data.categories.map(({ url, active }) => (
              <CategoryCard key={url} {...{ url, active }} />
            ))}
          </div>
        </Card>
      </div>
    </AnimateWrapper>
  );
};

export default Page;
