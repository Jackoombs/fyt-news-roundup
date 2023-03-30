import { Category } from "@prisma/client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { PowerIcon } from "@heroicons/react/24/outline";
import { trpc } from "../../utils/trpc";
import { OutletListOutput } from "../../types/trpc";

interface Props {
  category: Category;
  index: number;
  activeOutlet: OutletListOutput[0];
}

export const OutletCategoryCard = ({
  category,
  index,
  activeOutlet,
}: Props) => {
  const utils = trpc.useContext();

  const updateActive = trpc.category.updateActive.useMutation({
    async onMutate(data) {
      await utils.category.list.cancel();
      const currentList = utils.category.list.getData({
        outletId: activeOutlet.id,
      });
      console.log("list", currentList);
      if (currentList) {
        const newList = currentList.map((listCategory) => {
          console.log(category.url === listCategory.url);
          if (category.url === listCategory.url) {
            listCategory.active = data.active;

            return listCategory;
          }
          return listCategory;
        });
        utils.category.list.setData(newList);
      }
      return { currentList };
    },
    onError(err, oldList, ctx) {
      if (ctx?.currentList) {
        utils.category.list.setData(ctx.currentList);
      }
    },
    async onSettled() {
      utils.category.invalidate();
    },
  });

  const onChange = () => {
    updateActive.mutate({ url: category.url, active: !category.active });
  };

  return (
    <motion.li
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: "easeInOut",
      }}
      className="flex items-center gap-4"
    >
      <input
        onClick={onChange}
        key={category.url}
        readOnly
        className={clsx(
          "h-11 w-full cursor-pointer overflow-hidden text-ellipsis rounded-md px-4 text-lg font-medium tracking-widest outline-none outline-1 outline-offset-0 duration-200 focus:outline focus:outline-slate-900",
          !category.active && "opacity-40"
        )}
        defaultValue={category.url}
      />
      <label
        className={clsx(
          "relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-900 duration-200",
          category.active ? "bg-green-300" : "bg-red-300"
        )}
      >
        <input
          type="checkbox"
          checked={category.active}
          onChange={onChange}
          className="sr-only"
        />
        <div className="flex  items-center justify-center gap-[5px] rounded-full">
          <PowerIcon className="w-7 text-slate-900" />
        </div>
      </label>
    </motion.li>
  );
};
