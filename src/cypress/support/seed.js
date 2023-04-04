import { PrismaClient } from "@prisma/client";
import { mockArticle } from "../../__tests__/data/mockArticleData";

const prisma = new PrismaClient();

export const seedDatabase = async () => {
  await prisma.category.update({
    where: {
      url: "https://www.bbc.com/news",
    },
    data: {
      active: false,
    },
  });

  return await prisma.article.create({
    data: {
      id: mockArticle.id,
      link: mockArticle.link,
      date: mockArticle.date,
      title: mockArticle.title,
      content: mockArticle.content,
      outlet: {
        connect: {
          name: mockArticle.outlet.name,
        },
      },
    },
  });
};

export const cleanDatabase = async () => {
  return await prisma.article.delete({
    where: {
      id: mockArticle.id,
    },
  });
};

export const getArticle = async () => {
  return await prisma.article.findFirst();
};
