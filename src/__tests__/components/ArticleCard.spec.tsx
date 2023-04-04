import { fireEvent, render, screen } from "@testing-library/react";
import { mockArticle } from "../data/mockArticleData";
import { ArticleCard } from "../../components/Article/ArticleCard";
import format from "date-fns/format";
import { ArticleSaveButton } from "../../components/Article/ArticleSaveButton";

jest.mock("../../components/Article/ArticleSaveButton", () => ({
  __esModule: true,
  ArticleSaveButton: jest.fn(),
}));

describe("Article Test", () => {
  test("article displays correct data", () => {
    const setActiveArticleIndex = jest.fn();

    (ArticleSaveButton as jest.Mock).mockReturnValue(
      <button>{mockArticle.saved.toString()}</button>
    );

    render(
      <ArticleCard
        index={0}
        article={mockArticle}
        setActiveArticleIndex={setActiveArticleIndex}
        query={{}}
      />
    );

    const title = screen.getByText(mockArticle.title);
    const summary = screen.getByText(mockArticle.summary);
    const date = screen.getByText(format(mockArticle.date, "dd/MM/yyyy"));
    const category = screen.getByText(mockArticle.category);
    const savedButton = screen.getByRole("button", {
      name: mockArticle.saved.toString(),
    });

    expect(title).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(savedButton).toBeInTheDocument();
  });

  test("view article button works correctly", () => {
    const index = 0;
    const setActiveArticleIndex = jest.fn();

    render(
      <ArticleCard
        index={index}
        article={mockArticle}
        setActiveArticleIndex={setActiveArticleIndex}
        query={{}}
      />
    );

    const viewArticle = screen.getByRole("button", { name: "view article" });

    fireEvent.click(viewArticle);
    expect(setActiveArticleIndex).toBeCalledWith(index);
  });
});
