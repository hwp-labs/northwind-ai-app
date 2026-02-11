import { AuthGuardWidget } from "@/components/widgets/auth-guard-widget";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthGuardWidget />
      {children}
    </>
  );
}
