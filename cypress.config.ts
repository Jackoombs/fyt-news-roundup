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
    env: {
      DATABASE_URL:
        "postgres://Jackoombs:rUwGkB45vcFs@ep-falling-grass-860682.eu-central-1.aws.neon.tech/neondb",
      NEXTAUTH_SECRET: "a",
      NEXTAUTH_URL: "http://localhost:3000",
      DISCORD_CLIENT_ID: "",
      DISCORD_CLIENT_SECRET: "",
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
