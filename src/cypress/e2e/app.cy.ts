/* eslint-disable */
import { mockArticle } from "../../__tests__/data/mockArticleData";
import { ArticleCreateInput } from "../../types/trpc";

describe("Navigation", () => {
  it("should navigate to articles page", () => {
    cy.visit("http://localhost:3000/outlets");

    cy.get('a[href*="articles"]').click();

    cy.url().should("include", "/articles");

    const articles = cy.task("getArticle");

    expect(articles).equal(articles);
  });
});

describe("Grid", async () => {
  beforeEach(() => {
    cy.task("db:seed");
  });

  afterEach(() => {
    cy.task("db:clean");
  });

  it("correctly switches between the grid view and the article view", () => {
    cy.visit("http://localhost:3000/articles");

    cy.contains("h3", mockArticle.title)
      .parent()
      .parent()
      .contains("button", "view article")
      .click();

    cy.get("article").should("exist");

    cy.contains("h3", mockArticle.title).should("not.exist");

    cy.contains("button", "back to articles").click();

    cy.get("article").should("not.exist");

    cy.contains("h3", mockArticle.title).should("exist");
  });

  it("should appear in the saved section when the saved button is clicked and disappear when clicked again", () => {
    cy.visit("http://localhost:3000/articles");

    cy.contains("h3", mockArticle.title)
      .parent()
      .parent()
      .within(() => {
        cy.get("label").click();
      });

    cy.get('a[href*="saved"]').click();

    cy.contains("h3", mockArticle.title).should("exist");

    cy.contains("h3", mockArticle.title)
      .parent()
      .parent()
      .within(() => {
        cy.get("label").click();
      });

    cy.contains("h3", mockArticle.title).should("not.exist");
  });
});

describe("OutletTabs", () => {
  it("should have opacity effect when category is toggled active/deactive", () => {
    cy.visit("http://localhost:3000/outlets");
    cy.contains("button", "Categorys").click();
    cy.wait(500);
    cy.get('input[value="https://www.bbc.com/news"]')
      .should("have.class", "opacity-40")
      .click()
      .wait(400)
      .should("not.have.class", "opacity-40")
      .click()
      .should("have.class", "opacity-40");
  });
});

export {};
