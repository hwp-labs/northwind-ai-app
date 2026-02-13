import { Metadata } from "next";
//
import { DefaultPost } from "@/components/molecules/post-cards/ui/default-post";
// import { BlogPost } from "@/components/molecules/posts/ui/blog-post";
// import { GenericPost } from "@/components/molecules/posts/ui/generic-post";

export const metadata: Metadata = {
  title: "Post Card",
};

export default function PreviewPostCardsPage() {
  return (
    <main
      id="post-card"
      className="text-background _debug flex-col-x mx-auto min-h-[640px] w-[640px]"
    >
      <DefaultPost />
    </main>
  );
}
