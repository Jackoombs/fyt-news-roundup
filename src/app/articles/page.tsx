import ArticleGrid from "@/components/Article/ArticleGrid";
import { ArticleThumbnail } from "@/components/Article/ArticleThumbnail";
import SearchInput from "@/components/Article/SearchInput";
import SortBtn from "@/components/Article/SortBtn";
import OutletDropdown from "@/components/Outlet/OutletDropdown";
import AnimateWrapper from "@/components/ui/AnimateWrapper";
import DatePicker from "@/components/ui/Form/DateRange";
import { getClient } from "@/lib/client";
import { GET_ARTICLES, GET_OUTLETS } from "@/lib/queries";
import { addWhiteSpace } from "@/lib/utils";
import {
  Articles,
  GetArticlesOptions,
  OrderBy,
  Outlets,
} from "@/types/graphql";
import { endOfDay, parse, startOfDay } from "date-fns";

interface Props {
  searchParams?: any;
}

const Page = async ({ searchParams }: Props) => {
  let orderBy: OrderBy;
  let filterBy: GetArticlesOptions["filterBy"] = {};
  const apollo = getClient();

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

  if (filterParams.has("outlets")) {
    const outletArr = filterParams.get("outlets")!.split(";");
    const outlets = outletArr.map((outlet) => addWhiteSpace(outlet));
    filterBy.outletName = outlets;
  }

  if (filterParams.has("search")) {
    const searchString = filterParams.get("search")!.replaceAll("+", " ");
    filterBy.search = searchString;
  }

  const options: GetArticlesOptions = {
    filterBy,
    orderBy: [orderBy],
  };

  const { data } = await apollo.query<Articles>({
    query: GET_ARTICLES,
    variables: options,
  });

  let outlets = await apollo.query<Outlets>({ query: GET_OUTLETS });
  return (
    <AnimateWrapper>
      <div className="flex gap-3 justify-end pb-4">
        <SearchInput />
        <DatePicker />
        <OutletDropdown outlets={outlets.data} />
        <SortBtn />
      </div>
      <ArticleGrid>
        {data.articles.map((article, index) => (
          <ArticleThumbnail
            articlePagePath="/articles"
            key={index}
            article={article}
          />
        ))}
      </ArticleGrid>
    </AnimateWrapper>
  );
};

export default Page;
