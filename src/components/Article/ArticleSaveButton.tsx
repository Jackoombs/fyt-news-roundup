import { trpc } from "../../utils/trpc";
import clsx from "clsx";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ArticleListInput } from "../../types/trpc";

interface Props {
  className?: string;
  link: string;
  query: ArticleListInput;
  saved: boolean;
}

export const ArticleSaveButton = ({ className, query, link, saved }: Props) => {
  const utils = trpc.useContext();

  const updateSaved = trpc.article.updateSaved.useMutation({
    async onMutate(data) {
      await utils.article.list.cancel();
      const currentArticleList = utils.article.list.getData(query);

      if (currentArticleList) {
        const newList = currentArticleList.map((listArticle) => {
          if (link === listArticle.link) {
            return { ...listArticle, saved: data.saved };
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
    updateSaved.mutate({ link, saved: !saved });
  };

  return (
    <>
      {saved !== undefined && (
        <label
          className={clsx(
            "relative inline-flex h-10 w-10 cursor-pointer items-center justify-center duration-200",
            className
          )}
        >
          <input
            type="checkbox"
            checked={saved}
            onChange={onChange}
            className="sr-only"
          />
          <HeartIcon
            className={clsx(
              "w-7 duration-200",
              saved ? "fill-indigo-50" : "fill-transparent"
            )}
          />
        </label>
      )}
    </>
  );
};
