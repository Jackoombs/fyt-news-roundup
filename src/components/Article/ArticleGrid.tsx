import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import type { ArticleListInput } from "../../types/trpc";
import { Article } from "./Article";
import { trpc } from "../../utils/trpc";
import { Loading } from "../ui/Loading";

interface Props {
  query: ArticleListInput;
}

export const ArticleGrid = ({ query }: Props) => {
  const [activeArticleIndex, setActiveArticleIndex] = useState(-1);

  const {
    data: articles,
    isLoading,
    error,
    refetch,
  } = trpc.article.list.useQuery(query);

  if (isLoading) return <Loading />;
  if (error || !articles)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 pb-4 text-center md:gap-8">
        <h1 className="text-2xl font-semibold md:text-4xl">
          Failed to fetch articles
        </h1>
        <button
          className="w-max rounded bg-indigo-600 px-6 py-1 font-bold text-indigo-50"
          onClick={() => refetch()}
        >
          Try again
        </button>
      </div>
    );

  const activeArticle = articles[activeArticleIndex];

  if (articles.length === 0) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="max-w-xl text-center text-2xl font-semibold leading-[3] md:text-4xl">
          No articles found, try adding some new categorys on the Outlets page
        </h1>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait" initial={true}>
        {activeArticleIndex < 0 && (
          <motion.ul
            key={0}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6 xl:grid-cols-3 2xl:grid-cols-4"
          >
            {articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                {...{
                  article,
                  index,
                  activeArticleIndex,
                  setActiveArticleIndex,
                  query,
                }}
              />
            ))}
          </motion.ul>
        )}

        {activeArticleIndex >= 0 && activeArticle && (
          <motion.div
            key={1}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Article
              article={activeArticle}
              {...{ setActiveArticleIndex, query }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
