import ArticleGrid from "@/components/Article/ArticleGrid";
import SortBtn from "@/components/Article/SortBtn";
import AnimateWrapper from "@/components/ui/AnimateWrapper";
import DashboardSubHeader from "@/components/ui/DashboardSubHeader";
import DatePicker from "@/components/ui/Form/DateRange";
import Loading from "@/components/ui/Loading";
import { addWhiteSpace } from "@/lib/utils";
import { GetArticlesOptions, OrderBy } from "@/types/graphql";
import { endOfDay, parse, startOfDay } from "date-fns";
import path from "path";
import { Suspense } from "react";

interface Props {
  params: { outletName: string };
  searchParams?: {
    sort?: string;
  };
}

const Page = async ({ params, searchParams }: Props) => {
  let orderBy: OrderBy;
  const filterBy: GetArticlesOptions["filterBy"] = {};
  const filterParams = new URLSearchParams(searchParams);

  switch (searchParams?.sort) {
    case "titleAsc":
      orderBy = { field: "title", direction: "asc" };
      break;
    case "titleDesc":
      orderBy = { field: "title", direction: "desc" };
      break;
    case "dateAsc":
      orderBy = { field: "date", direction: "asc" };
      break;
    case "dateDesc":
      orderBy = { field: "date", direction: "desc" };
      break;
    default:
      orderBy = { field: "title", direction: "asc" };
      break;
  }

  filterBy.outletName = [addWhiteSpace(params.outletName)];

  if (filterParams.has("startDate")) {
    filterBy.startDate = startOfDay(
      parse(filterParams.get("startDate")!.toString(), "LLLddy", new Date())
    );
  }

  if (filterParams.has("endDate")) {
    filterBy.endDate = endOfDay(
      parse(filterParams.get("endDate")!.toString(), "LLLddy", new Date())
    );
  }

  const options: GetArticlesOptions = {
    filterBy,
    orderBy: [orderBy],
  };

  const articlePagePath = path.join("outlets", params.outletName, "articles");

  return (
    <AnimateWrapper>
      <div className="flex pb-4 items-center justify-between">
        <DashboardSubHeader padding="0">Articles</DashboardSubHeader>
        <div className="flex flex-1 justify-end gap-2">
          <DatePicker />
          <SortBtn />
        </div>
      </div>
      {/* @ts-expect-error Server Component */}
      <ArticleGrid {...{ options }} articlePagePath={articlePagePath} />
    </AnimateWrapper>
  );
};

export default Page;
