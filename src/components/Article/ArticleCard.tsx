import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArticleSaveButton } from "./ArticleSaveButton";
import { Article } from "@prisma/client";
import { ArticleListInput } from "../../types/trpc";

interface Props {
  article: Article;
  index: number;
  setActiveArticleIndex: React.Dispatch<React.SetStateAction<number>>;
  query: ArticleListInput;
}

export const ArticleCard = ({
  article,
  index,
  setActiveArticleIndex,
  query,
}: Props) => {
  return (
    <motion.li
      className="flex"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeInOut" }}
    >
      <a className="flex flex-col justify-between rounded-lg bg-gradient-to-tr from-indigo-500 to-indigo-800 p-8 pb-4 text-indigo-50">
        <div className="flex flex-col gap-1 pb-3">
          <h3 className="text-left text-xl font-semibold line-clamp-2">
            {article.title}
          </h3>
          <p className="text-left text-sm font-medium leading-6 line-clamp-3 ">
            {article.summary}
          </p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex w-max flex-col text-left">
            <p className="text-md rounded font-bold tracking-widest">
              {article.category}
            </p>
            {article.date && (
              <p className="rounded text-xs font-bold">
                {format(article.date, "dd/MM/yyyy ")}
              </p>
            )}
          </div>
          <ArticleSaveButton
            saved={article.saved}
            link={article.link}
            query={query}
          />
        </div>
        <button
          onClick={() => setActiveArticleIndex(index)}
          className="w-max self-center rounded-lg px-2 py-1 text-sm font-semibold tracking-widest underline underline-offset-4 duration-200 hover:text-indigo-900"
        >
          view article
        </button>
      </a>
    </motion.li>
  );
};
