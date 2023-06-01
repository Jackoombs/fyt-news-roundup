import RecentArticles from "@/components/Article/RecentArticles";
import ActiveCategorys from "@/components/Category/ActiveCategorys";
import AnimateWrapper from "@/components/ui/AnimateWrapper";
import { addWhiteSpace } from "@/lib/utils";
import path from "path";

interface Props {
  params: { outletName: string };
}

const Page = ({ params }: Props) => {
  const articlePagePath = path.join("outlets", params.outletName, "articles");

  return (
    <AnimateWrapper className="grid grid-cols-[minmax(0,1fr)_26rem] grid-rows-[auto_1fr] gap-6">
      {/* @ts-expect-error Server Component */}
      <RecentArticles
        options={{
          filterBy: { outletName: [addWhiteSpace(params.outletName)] },
          orderBy: [{ field: "date", direction: "desc" }],
          take: 6,
        }}
        articlePagePath={articlePagePath}
      />
      <span />
      {/* @ts-expect-error Server Component */}
      <ActiveCategorys
        className="w-full"
        options={{
          filterBy: {
            outletName: addWhiteSpace(params.outletName),
            active: true,
          },
        }}
      />
    </AnimateWrapper>
  );
};

export default Page;
