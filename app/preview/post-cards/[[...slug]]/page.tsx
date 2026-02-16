import { Metadata } from "next";
//
import { DefaultPostCard } from "@/components/molecules/post-cards/default-post-card";
import { MonthlyPostCard } from "@/components/molecules/post-cards/monthly-post-card";
import { FAQPostCard } from "@/components/molecules/post-cards/faq-post-card";
// import { BlogPostCard } from "@/components/molecules/post-cards/blog-post";
import { PageProps } from "@/types/common";

export const metadata: Metadata = {
  title: "Post Cards",
};

export default async function PreviewPostCardsPage({
  searchParams,
}: PageProps) {
  const searchParamsAsync = await searchParams;
  const tabIndex = Number(searchParamsAsync.tabIndex) || 0;
  const page = Number(searchParamsAsync.page) || 0;
  //
  return (
    <main
      id="post-card"
      className="text-background _debug flex-col-x mx-auto min-h-[640px] w-[640px]"
    >
      {
        [
          <DefaultPostCard />,
          <MonthlyPostCard page={page} />,
          <FAQPostCard page={page} />,
        ][tabIndex]
      }
    </main>
  );
}
