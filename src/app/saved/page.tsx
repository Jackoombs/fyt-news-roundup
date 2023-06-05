import ArticleGrid from "@/components/Article/ArticleGrid";
import SortBtn from "@/components/Article/SortBtn";
import AnimateWrapper from "@/components/ui/AnimateWrapper";
import { GetArticlesOptions, OrderBy } from "@/types/graphql";

interface Props {
  searchParams?: any;
}

const Page = ({ searchParams }: Props) => {
  let orderBy: OrderBy;

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

  const options: GetArticlesOptions = {
    orderBy: [orderBy],
    filterBy: { saved: true },
  };

  return (
    <AnimateWrapper>
      <div className="flex gap-3 justify-end pb-4">
        <SortBtn />
      </div>
      {/* @ts-expect-error Server Component */}
      <ArticleGrid {...{ options }} articlePagePath="saved" />;
    </AnimateWrapper>
  );
};

export default Page;
