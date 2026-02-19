import { AuthGuardWidget } from "@/components/widgets/auth-guard-widget";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthGuardWidget />
      <div className="px-6">
      {children}
      </div>
    </>
  );
}
