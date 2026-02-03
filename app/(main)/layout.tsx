import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[75vh]">{children}</main>
      <Footer />
    </>
  );
}
