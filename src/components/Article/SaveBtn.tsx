"use client";

import { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useMutation } from "@apollo/client";
import { UPDATE_ARTICLE } from "@/lib/mutations";
import { UpdateArticleInput } from "@/types/graphql";

interface Props {
  id: string;
  saved: boolean;
}

const SaveBtn = ({ id, saved }: Props) => {
  const [isSaved, setIsSaved] = useState(saved);
  const [updateArticle, { client }] = useMutation(UPDATE_ARTICLE);
  const updateArticleInput: UpdateArticleInput = {
    id,
    saved: !isSaved,
  };

  const handleClick = async () => {
    setIsSaved((prev) => !prev);

    const { data } = await updateArticle({
      variables: { updateArticleInput },
      optimisticResponse: {
        updateArticle: {
          id,
          active: !isSaved,
          _typename: "Article",
        },
      },
    });
  };

  return (
    <button onClick={handleClick} aria-checked={isSaved} role="checkbox">
      <BookmarkIcon
        className={clsx(
          "h-7 duration-300",
          isSaved ? "fill-slate-900" : "fill-transparent"
        )}
      />
    </button>
  );
};

export default SaveBtn;
