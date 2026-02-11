import { Metadata } from "next";
import { getVisitorsAction } from "@/lib/supabase/services/visitors/actions/getVisitorsAction";
import { Debug } from "@/components/atoms/debug";

export const metadata: Metadata = {
  title: "Manage Visitors",
};

export default async function VisitorsPage() {
  const { data, error } = await getVisitorsAction();

  return (
    <main className="min-h-[75vh] flex-col-cc gap-4">
      <h1>VisitorsPage</h1>
      <Debug data={data}/>
    </main>
  );
}
