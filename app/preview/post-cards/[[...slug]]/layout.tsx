import { Header } from "@/features/post-cards/components/header";

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