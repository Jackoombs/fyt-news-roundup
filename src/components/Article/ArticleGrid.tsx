import { Article as ArticleType } from "@prisma/client";
import { Article } from "./Article";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArticleCard } from "./ArticleCard";

interface Props {
  articles: ArticleType[];
  outlet: string;
}

export const ArticleGrid = ({ articles, outlet }: Props) => {
  const [activeArticleIndex, setActiveArticleIndex] = useState(-1);

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
                  outlet,
                  activeArticleIndex,
                  setActiveArticleIndex,
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
              {...{ outlet, setActiveArticleIndex }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
