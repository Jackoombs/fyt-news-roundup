import type { ArticleListOutput } from "../../types/trpc";
import { Article } from "@prisma/client";

export const mockArticleData: ArticleListOutput = [
  {
    id: "1",
    title: "Test Title",
    category: "Business",
    outletId: "123",
    summary: "A test summary containg test info",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas nibh a ante pretium, maximus fringilla augue varius. In in urna eu sapien laoreet rhoncus. Etiam vel elit eu turpis tempor eleifend ut id neque. Cras id odio non nisl auctor tincidunt. Sed eu nisl at velit auctor tempor ac sit amet ipsum. Integer interdum, magna et scelerisque congue, urna dolor sollicitudin neque, sit amet auctor purus ante et est. Curabitur bibendum laoreet dolor, sit amet luctus nisi aliquam ac. Phasellus interdum erat nibh, cursus mattis arcu ullamcorper at. Donec eget purus arcu. Cras vulputate cursus placerat. ",
    condensedBody: null,
    link: "www.test.com",
    saved: false,
    keywords: ["test", "test2"],
    date: new Date(),
    outlet: {
      name: "BBC",
    },
  },
  {
    id: "2",
    title: "Test Title",
    category: "Business",
    outletId: "123",
    summary: "A test summary containg test info",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas nibh a ante pretium, maximus fringilla augue varius. In in urna eu sapien laoreet rhoncus. Etiam vel elit eu turpis tempor eleifend ut id neque. Cras id odio non nisl auctor tincidunt. Sed eu nisl at velit auctor tempor ac sit amet ipsum. Integer interdum, magna et scelerisque congue, urna dolor sollicitudin neque, sit amet auctor purus ante et est. Curabitur bibendum laoreet dolor, sit amet luctus nisi aliquam ac. Phasellus interdum erat nibh, cursus mattis arcu ullamcorper at. Donec eget purus arcu. Cras vulputate cursus placerat. ",
    condensedBody: null,
    link: "www.test2.com",
    saved: false,
    keywords: ["test", "test2"],
    date: new Date(),
    outlet: {
      name: "BBC",
    },
  },
  {
    id: "3",
    title: "Test Title",
    category: "Business",
    outletId: "123",
    summary: "A test summary containg test info",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas nibh a ante pretium, maximus fringilla augue varius. In in urna eu sapien laoreet rhoncus. Etiam vel elit eu turpis tempor eleifend ut id neque. Cras id odio non nisl auctor tincidunt. Sed eu nisl at velit auctor tempor ac sit amet ipsum. Integer interdum, magna et scelerisque congue, urna dolor sollicitudin neque, sit amet auctor purus ante et est. Curabitur bibendum laoreet dolor, sit amet luctus nisi aliquam ac. Phasellus interdum erat nibh, cursus mattis arcu ullamcorper at. Donec eget purus arcu. Cras vulputate cursus placerat. ",
    condensedBody: null,
    link: "www.test3.com",
    saved: false,
    keywords: ["test", "test2"],
    date: new Date(),
    outlet: {
      name: "BBC",
    },
  },
];
