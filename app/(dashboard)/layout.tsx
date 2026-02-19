import { Header } from "@/features/dashboard/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="px-6">{children}</div>
    </>
  );
}
