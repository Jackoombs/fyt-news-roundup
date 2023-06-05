import { ArticleThumbnail } from "@/components/Article/ArticleThumbnail";
import { getClient } from "@/lib/client";
import { GET_ARTICLES } from "@/lib/queries";
import { Articles, GetArticlesOptions } from "@/types/graphql";

interface Props {
  options: GetArticlesOptions;
  articlePagePath: string;
}

const ArticleGrid = async ({ options, articlePagePath }: Props) => {
  const apollo = getClient();

  const { data } = await apollo.query<Articles>({
    query: GET_ARTICLES,
    variables: options,
  });

  if (data.articles?.length === 0) {
    return (
      <p className="text-center mt-20">
        No articles found. Try widening your search criteria.
      </p>
    );
  }
  return (
    <>
      {data.articles?.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {data.articles.map((article, index) => (
            <ArticleThumbnail
              articlePagePath={articlePagePath}
              key={index}
              article={article}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ArticleGrid;
