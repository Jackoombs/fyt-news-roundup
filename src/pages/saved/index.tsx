import { useState } from "react";
import { ArticleGrid } from "../../components/Article/ArticleGrid";
import { trpc } from "../../utils/trpc";

const Saved = () => {
  return (
    <div className="h-full p-8">
      <div className="h-full rounded-lg bg-indigo-300 p-8">
        <ArticleGrid query={{ saved: true }} />
      </div>
    </div>
  );
};

export default Saved;
