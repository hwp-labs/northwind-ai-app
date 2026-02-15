import { Metadata } from "next";
//
import { DefaultPost } from "@/components/molecules/post-cards/ui/default-post";
import { MonthlyPost } from "@/components/molecules/post-cards/ui/monthly-post";
import { ListPost } from "@/components/molecules/post-cards/ui/list-post";
// import { BlogPost } from "@/components/molecules/post-cards/ui/blog-post";
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
          <DefaultPost />,
          <MonthlyPost page={page} />,
          <ListPost page={page} />,
        ][tabIndex]
      }
    </main>
  );
}
