import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const outletRouter = router({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.outlet.findMany({
      select: {
        name: true,
        id: true,
      },
    });
  }),
  get: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.outlet.findUnique({
        where: {
          name: input.name,
        },
      });
    }),
});

export type OutletRouter = typeof outletRouter;
