import { trpc } from "../../utils/trpc";
import clsx from "clsx";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ArticleListInput } from "../../types/trpc";

interface Props {
  className?: string;
  link: string;
  query: ArticleListInput;
}

export const ArticleSaveButton = ({ className, query, link }: Props) => {
  const utils = trpc.useContext();

  const isSaved = utils.article.list
    .getData(query)!
    .find((article) => article.link === link)!.saved;

  const updateSaved = trpc.article.updateSaved.useMutation({
    async onMutate(data) {
      await utils.article.list.cancel();
      const currentArticleList = utils.article.list.getData(query);

      if (currentArticleList) {
        const newList = currentArticleList.map((listArticle) => {
          if (link === listArticle.link) {
            console.log(listArticle.saved);
            listArticle.saved = data.saved;
            console.log(listArticle.saved);

            return listArticle;
          }
          return listArticle;
        });
        utils.article.list.setData((prev) => {
          console.log(prev, newList);
          if (prev) {
            console.log("hiyaaa");
            return newList;
          }
        }, query);
      }
      return { currentArticleList };
    },
    onError(err, oldList, ctx) {
      if (ctx?.currentArticleList) {
        utils.article.list.setData((prev) => {
          if (prev) {
            return ctx.currentArticleList;
          }
        });
      }
    },
    async onSettled() {
      utils.article.invalidate();
    },
  });

  const onChange = () => {
    updateSaved.mutate({ link, saved: !isSaved });
  };

  return (
    <label
      className={clsx(
        "relative inline-flex h-10 w-10 cursor-pointer items-center justify-center duration-200",
        className
      )}
    >
      <input
        type="checkbox"
        checked={isSaved}
        onChange={onChange}
        className="sr-only"
      />
      <HeartIcon
        className={clsx(
          "w-7 duration-200",
          isSaved ? "fill-indigo-50" : "fill-transparent"
        )}
      />
    </label>
  );
};
