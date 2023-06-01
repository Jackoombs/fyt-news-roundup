"use client";

import { UPDATE_CATEGORY } from "@/lib/mutations";
import { getPathname } from "@/lib/utils";
import { UpdateCategoryInput } from "@/types/graphql";
import { useMutation } from "@apollo/client";
import { CheckIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  url: string;
  active: boolean;
}

const CategoryCard = ({ url, active }: Props) => {
  const [isActive, setIsActive] = useState(active);

  const [updateCategory, { client }] = useMutation(UPDATE_CATEGORY);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.nodeName === "a") {
      return;
    }
    try {
      const updateCategoryInput: UpdateCategoryInput = {
        url,
        active: !isActive,
      };
      setIsActive((prev) => !prev);
      const { data } = await updateCategory({
        variables: { updateCategoryInput },
        optimisticResponse: {
          updateCategory: {
            url,
            active: !isActive,
            _typename: "Category",
          },
        },
      });
      await client.clearStore();
      console.log(data, active);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleClick}
      role="checkbox"
      aria-checked={isActive}
      className={clsx(
        "flex justify-between w-full py-3 px-3 rounded hover:bg-slate-200 dark:hover:bg-slate-900"
      )}
    >
      <a
        href={url}
        className={clsx(
          "hover:underline underline-offset-4 hover:text-slate-900 dark:hover:text-slate-200 font-bold text-sm text-left text-ellipsis duration-150 line-clamp-1",
          isActive
            ? "text-slate-900 dark:text-slate-200"
            : "text-slate-400 dark:text-slate-700"
        )}
        target="_blank"
      >
        {getPathname(url)}
      </a>
      <span className="w-5">
        <CheckIcon
          className={clsx(
            "h-5 duration-150",
            isActive ? "opacity-100" : "opacity-0"
          )}
        />
      </span>
    </button>
  );
};

export default CategoryCard;
