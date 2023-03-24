import { router } from "../trpc";
import { articleRouter } from "./article";
import { categoryRouter } from "./category";
import { outletRouter } from "./outlet";

export const appRouter = router({
  outlet: outletRouter,
  category: categoryRouter,
  article: articleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
