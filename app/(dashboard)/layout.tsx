import { SignOutWidget } from "@/components/widgets/sign-out-widget";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignOutWidget />
      {children}
    </>
  );
}
