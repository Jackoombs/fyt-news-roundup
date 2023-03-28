import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "../server/trpc/router/_app";

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type OutletGetOutput = NonNullable<RouterOutput["outlet"]["get"]>;
export type ArticleListInput = RouterInput["article"]["list"];
export type OutletListOutput = RouterOutput["outlet"]["list"];
export type ArticleListOutput = RouterOutput["article"]["list"];
