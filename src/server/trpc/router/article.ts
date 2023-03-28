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
  list: publicProcedure
    .input(
      z.object({
        outletId: z.string().optional(),
        saved: z.boolean().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.article.findMany({
        where: {
          outlet: {
            id: input.outletId ?? undefined,
          },
          saved: input.saved !== undefined ? input.saved : undefined,
        },
        orderBy: [{ date: "desc" }, { title: "asc" }],
        include: {
          outlet: {
            select: {
              name: true,
            },
          },
        },
      });
    }),
});
