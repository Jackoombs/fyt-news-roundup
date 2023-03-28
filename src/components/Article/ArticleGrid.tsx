import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import type { ArticleListInput } from "../../types/trpc";
import { Article } from "./Article";
import { trpc } from "../../utils/trpc";

interface Props {
  query: ArticleListInput;
}

export const ArticleGrid = ({ query }: Props) => {
  const [activeArticleIndex, setActiveArticleIndex] = useState(-1);

  const {
    data: articles,
    isLoading,
    error,
  } = trpc.article.list.useQuery(query);

  if (isLoading) return <h1>Loading...</h1>;
  if (error || !articles) return <h1>Error</h1>;

  const activeArticle = articles[activeArticleIndex];

  return (
    <>
      <AnimatePresence mode="wait" initial={true}>
        {activeArticleIndex < 0 && (
          <motion.div
            key={0}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6 xl:grid-cols-3 2xl:grid-cols-4"
          >
            {articles.map((article, index) => (
              <ArticleCard
                key={article.link}
                {...{
                  article,
                  index,
                  activeArticleIndex,
                  setActiveArticleIndex,
                  query,
                }}
              />
            ))}
          </motion.div>
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
