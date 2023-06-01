import { Article } from "@/types/graphql";
import DashboardSubHeader from "../ui/DashboardSubHeader";
import { ArticleThumbnail } from "./ArticleThumbnail";

interface Props {
  articles: Article[];
  articlePagePath: string;
}

const RelatedArticles = ({ articles, articlePagePath }: Props) => {
  return (
    <>
      {articles.length > 0 && (
        <>
          <DashboardSubHeader>Related</DashboardSubHeader>
          <div className="flex flex-col gap-6">
            {articles.map((article, index) => (
              <ArticleThumbnail
                key={article.id}
                {...{ article, index, articlePagePath }}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default RelatedArticles;
