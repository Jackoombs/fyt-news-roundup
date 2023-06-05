import Article from "@/components/Article/Article";
import RelatedArticles from "@/components/Article/RelatedArticles";
import AnimateWrapper from "@/components/ui/AnimateWrapper";
import { getClient } from "@/lib/client";
import { GET_ARTICLE, GET_RELATED_ARTICLES } from "@/lib/queries";
import path from "path";
import DashboardSubHeader from "@/components/ui/DashboardSubHeader";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  params: { articleId: string; outletName: string };
}

const Page = async ({ params }: Props) => {
  const apollo = getClient();

  const { data } = await apollo.query<{ article: Article }>({
    query: GET_ARTICLE,
    variables: { id: params.articleId },
  });

  const relatedArticles = await apollo.query<{ relatedArticles: Article[] }>({
    query: GET_RELATED_ARTICLES,
    variables: {
      id: params.articleId,
      keywords: data.article.keywords,
      take: 5,
    },
  });

  return (
    <AnimateWrapper className="grid grid-cols-10 gap-6">
      <div className="col-span-7">
        <div className="flex justify-between">
          <DashboardSubHeader>Article</DashboardSubHeader>
          <Link
            className="flex gap-1 items-center text-sm hover:text-accent duration-150 py-1"
            href="saved"
          >
            <ArrowLeftIcon className="h-4" />
            Back to articles
          </Link>
        </div>
        <Article article={data.article} />
      </div>
      <div className="col-span-3">
        <RelatedArticles
          articlePagePath="saved"
          articles={relatedArticles.data.relatedArticles}
        />
      </div>
    </AnimateWrapper>
  );
};

export default Page;
