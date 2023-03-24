import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const articleRouter = router({
  updateSaved: publicProcedure
    .input(
      z.object({
        link: z.string(),
        saved: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.article.update({
        where: {
          link: input.link,
        },
        data: {
          saved: input.saved,
        },
      });
    }),
});
