import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { ScrollToTop } from "@/components/organisms/scroll-to-top";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
