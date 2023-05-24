import RecentArticles from "@/components/Article/RecentArticles";
import ActiveCategorys from "@/components/Category/ActiveCategorys";
import DashboardHeader from "@/components/ui/DashboardHeader";
import DashboardWrapper from "@/components/ui/DashboardWrapper";
import { removeWhiteSpace } from "@/lib/utils";

interface Props {
  params: { outletName: string };
}

const Page = ({ params }: Props) => {
  return (
    <DashboardWrapper className="grid grid-cols-[minmax(0,1fr)_26rem] grid-rows-[auto_1fr] gap-6">
      {/* @ts-expect-error Server Component */}
      <RecentArticles
        options={{
          filterBy: { outletName: removeWhiteSpace(params.outletName) },
          orderBy: [{ field: "date", direction: "desc" }],
          take: 6,
        }}
      />
      <span />
      {/* @ts-expect-error Server Component */}
      <ActiveCategorys
        className="w-full"
        options={{
          filterBy: {
            outletName: removeWhiteSpace(params.outletName),
            active: true,
          },
        }}
      />
    </DashboardWrapper>
  );
};

export default Page;
