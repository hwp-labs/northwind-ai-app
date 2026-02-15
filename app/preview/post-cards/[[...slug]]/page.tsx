import { Metadata } from "next";
//
import { DefaultPost } from "@/components/molecules/post-cards/ui/default-post";
import { MonthlyPost } from "@/components/molecules/post-cards/ui/monthly-post";
import { PageProps } from "@/types/common";
// import { BlogPost } from "@/components/molecules/posts/ui/blog-post";
// import { GenericPost } from "@/components/molecules/posts/ui/generic-post";

export const metadata: Metadata = {
  title: "Post Cards",
};

export default async function PreviewPostCardsPage({
  searchParams,
}: PageProps) {
  const tabIndexAsync = (await searchParams).tabIndex;
  const tabIndex = Number(tabIndexAsync) || 0;
  //
  return (
    <main
      id="post-card"
      className="text-background _debug flex-col-x mx-auto min-h-[640px] w-[640px]"
    >
      {[<DefaultPost />, <MonthlyPost />][tabIndex]}
    </main>
  );
}
