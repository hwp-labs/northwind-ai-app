export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>DashboardLayout</h1>
      <main className="min-h-[75vh]">{children}</main>
    </>
  );
}
