import { GET_ARTICLES } from "@/lib/queries";
import { getClient } from "@/lib/client";
import { GetArticlesOptions } from "@/types/graphql";
import { ArticleThumbnail } from "./ArticleThumbnail";
import { Articles } from "@/types/graphql";
import DashboardSubHeader from "../ui/DashboardSubHeader";
import { Carousel } from "../ui/Swiper";

interface Props {
  options?: GetArticlesOptions;
}
const RecentArticles = async ({ options }: Props) => {
  const apollo = getClient();

  const { data } = await apollo.query<Articles>({
    query: GET_ARTICLES,
    variables: options,
  });

  return (
    <div className="col-span-full">
      <DashboardSubHeader>Recent</DashboardSubHeader>

      <Carousel>
        {data.articles.map((article, index) => (
          <ArticleThumbnail key={article.id} {...{ article, index }} />
        ))}
      </Carousel>
    </div>
  );
};

export default RecentArticles;
