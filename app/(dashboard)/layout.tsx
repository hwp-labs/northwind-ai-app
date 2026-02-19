import { HeaderDashboard } from "@/components/organisms/header-dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderDashboard />
      <div className="px-6">{children}</div>
    </>
  );
}
