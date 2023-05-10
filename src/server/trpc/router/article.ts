import { endOfDay, startOfDay } from "date-fns";
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
        date: z.date().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.article.findMany({
        where: {
          outlet: {
            id: input.outletId ?? undefined,
          },
          saved: input.saved !== undefined ? input.saved : undefined,
          date: {
            gte: input.date && startOfDay(input.date),
            lt: input.date && endOfDay(input.date),
          },
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
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        category: z.string().optional(),
        outletName: z.string(),
        summary: z.string().optional(),
        content: z.string().optional(),
        link: z.string(),
        saved: z.boolean(),
        date: z.date(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.article.create({
        data: {
          id: input.id,
          title: input.title,
          category: input.category,
          summary: input.summary,
          content: input.content,
          link: input.link,
          saved: input.saved,
          date: input.date,
          outlet: {
            connect: {
              name: input.outletName,
            },
          },
        },
      });
    }),
  deleteByLink: publicProcedure
    .input(
      z.object({
        link: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.article.delete({
        where: {
          link: input.link,
        },
      });
    }),
});
