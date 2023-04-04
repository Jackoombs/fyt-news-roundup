import { render, screen } from "@testing-library/react";
import { mockArticleArray } from "../data/mockArticleData";
import { ArticleGrid } from "../../components/Article/ArticleGrid";
import { ArticleCard } from "../../components/Article/ArticleCard";
import { Article } from "../../components/Article/Article";
import { trpc } from "../../utils/trpc";

jest.mock("../utils/trpc", () => ({
  trpc: {
    article: {
      list: {
        useQuery: jest.fn(),
      },
    },
  },
}));

jest.mock("../components/Article/ArticleCard", () => ({
  __esModule: true,
  ArticleCard: jest.fn(() => <li>Article Card</li>),
}));

jest.mock("../components/Article/Article", () => ({
  __esModule: true,
  Article: jest.fn(() => <li>Article</li>),
}));

describe("ArticleGrid", () => {
  test("query is called", async () => {
    (trpc.article.list.useQuery as jest.Mock).mockReturnValue({
      data: mockArticleArray,
      isLoading: false,
      error: false,
    });
    const spyFetch = jest.spyOn(trpc.article.list, "useQuery");

    render(<ArticleGrid query={{}} />);
    expect(spyFetch).toHaveBeenCalledWith({});
  });

  test("articles are rendered with data is returned", () => {
    (trpc.article.list.useQuery as jest.Mock).mockReturnValue({
      data: mockArticleArray,
      isLoading: false,
      error: false,
    });

    render(<ArticleGrid query={{}} />);
    const articles = screen.getAllByRole("listitem");

    expect(articles).toHaveLength(mockArticleArray.length);
  });

  test("prompt if no articles are found", () => {
    (trpc.article.list.useQuery as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: false,
    });

    render(<ArticleGrid query={{}} />);
    const prompt = screen.getByText(
      "No articles found, try adding some new categorys on the Outlets page"
    );

    expect(prompt).toBeInTheDocument();
  });

  test("spinner rendered when data is fetching", () => {
    (trpc.article.list.useQuery as jest.Mock).mockReturnValue({
      data: mockArticleArray,
      isLoading: true,
      error: false,
    });

    render(<ArticleGrid query={{}} />);

    const spinner = screen.getByText("Loading...");

    expect(spinner).toBeInTheDocument();
  });

  test("error message appears on error", () => {
    (trpc.article.list.useQuery as jest.Mock).mockReturnValue({
      data: mockArticleArray,
      isLoading: false,
      error: true,
    });

    render(<ArticleGrid query={{}} />);

    const error = screen.getByText("Failed to fetch articles");

    expect(error).toBeInTheDocument();
  });
});
