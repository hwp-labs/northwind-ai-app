import { Header } from "@/components/molecules/posts/ui/header";

export default function PreviewPostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
