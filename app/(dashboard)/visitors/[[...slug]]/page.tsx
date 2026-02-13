import { Metadata } from "next";
import { getVisitorsAction } from "@/lib/supabase/services/visitors/actions/getVisitorsAction";
import { Debugger } from "@/components/debugger";

export const metadata: Metadata = {
  title: "Manage Visitors",
};

export default async function VisitorsPage() {
  const { data, error } = await getVisitorsAction();

  return (
    <main className="flex-col-cc min-h-[75vh] gap-4">
      <h1>VisitorsPage</h1>
      <Debugger data={data} />
    </main>
  );
}
