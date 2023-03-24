import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const categoryRouter = router({
  list: publicProcedure
    .input(
      z.object({
        outletName: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.category.findMany({
        where: {
          outlet: {
            name: input.outletName,
          },
        },
      });
    }),
  updateActive: publicProcedure
    .input(
      z.object({
        url: z.string(),
        active: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.category.update({
        where: {
          url: input.url,
        },
        data: {
          active: input.active,
        },
      });
    }),
});
