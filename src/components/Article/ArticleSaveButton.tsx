import { trpc } from "../../utils/trpc";
import clsx from "clsx";
import { HeartIcon } from "@heroicons/react/24/outline";

interface Props {
  className?: string;
  outlet: string;
  link: string;
}

export const ArticleSaveButton = ({ className, outlet, link }: Props) => {
  const utils = trpc.useContext();

  const article = utils.outlet.get
    .getData({ name: outlet })
    ?.articles.find((article) => link === article.link);

  const updateSaved = trpc.article.updateSaved.useMutation({
    async onMutate(data) {
      await utils.outlet.get.cancel();
      const currentArticleList = utils.outlet.get.getData({
        name: outlet,
      })?.articles;

      if (currentArticleList) {
        const newList = currentArticleList.map((listArticle) => {
          if (link === listArticle.link) {
            listArticle.saved = data.saved;
            console.log(listArticle.saved);

            return listArticle;
          }
          return listArticle;
        });
        utils.outlet.get.setData(
          (prev) => {
            console.log(prev);
            if (prev) {
              return { ...prev, articles: newList };
            } else {
              return prev;
            }
          },
          { name: outlet }
        );
      }
      return { currentArticleList };
    },
    onError(err, oldList, ctx) {
      if (ctx?.currentArticleList) {
        utils.category.list.setData((prev) => {
          if (prev) {
            return { ...prev, articles: ctx.currentArticleList };
          } else {
            return prev;
          }
        });
      }
    },
    async onSettled() {
      utils.outlet.get.invalidate({ name: outlet });
    },
  });

  const onChange = () => {
    updateSaved.mutate({ link, saved: !article!.saved });
  };

  return (
    <>
      {article && (
        <label
          className={clsx(
            "relative inline-flex h-10 w-10 cursor-pointer items-center justify-center duration-200",
            className
          )}
        >
          <input
            type="checkbox"
            checked={article.saved}
            onChange={onChange}
            className="sr-only"
          />
          <HeartIcon
            className={clsx(
              "w-7 duration-200",
              article.saved ? "fill-indigo-50" : "fill-transparent"
            )}
          />
        </label>
      )}
    </>
  );
};
