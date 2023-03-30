import { ArticleListOutput, ArticleListInput } from "../../types/trpc";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArticleSaveButton } from "./ArticleSaveButton";

interface Props {
  article: ArticleListOutput[0];
  setActiveArticleIndex: React.Dispatch<React.SetStateAction<number>>;
  query: ArticleListInput;
}

export const Article = ({ article, setActiveArticleIndex, query }: Props) => {
  const splitContent = (content: string | null) => {
    const contentArray = content?.split(`\/n`);

    return contentArray?.map((p, index) => (
      <p key={index} className="py-2 text-sm font-medium">
        {p}
      </p>
    ));
  };

  return (
    <article className="relative flex w-full max-w-4xl flex-col items-start rounded-xl bg-indigo-600 px-8 py-24 text-indigo-50">
      <h1 className="max-w-lg pb-8 text-3xl font-semibold">{article.title}</h1>
      <h2 className="pb-4 text-lg font-bold">{article.summary}</h2>
      <div className="flex text-xs font-bold tracking-widest">
        <p>{article.outlet.name}</p>
        <div className="my-1 mx-2 self-stretch border-r-2 border-indigo-50" />
        <p>{article.category}</p>
      </div>

      <hr className="my-6 w-full border-t border-indigo-50" />

      <div className="max-w-2xl self-center">
        {splitContent(article.content)}
      </div>
      <div className="absolute top-6 left-0 flex w-full justify-between px-8">
        <button
          className="flex items-center gap-1 underline-offset-4 hover:underline"
          onClick={() => setActiveArticleIndex(-1)}
        >
          <ChevronLeftIcon className="w-5" />
          back to articles
        </button>
        <ArticleSaveButton
          {...{ query }}
          saved={article.saved}
          link={article.link}
        />
      </div>
    </article>
  );
};
