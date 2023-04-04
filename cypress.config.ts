import { defineConfig } from "cypress";
import {
  cleanDatabase,
  getArticle,
  seedDatabase,
} from "./src/cypress/support/seed";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        "db:seed": () => {
          return seedDatabase();
        },
        "db:clean": () => {
          return cleanDatabase();
        },
        getArticle: () => {
          return getArticle();
        },
      });
    },
    supportFile: "src/cypress/support/e2e.ts",
    specPattern: "src/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
