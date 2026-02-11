import { Metadata } from "next";
import { getIndustriesAction } from "@/lib/supabase/services/industries/actions/getIndustriesAction";
import { Debug } from "@/components/atoms/debug";

export const metadata: Metadata = {
  title: "Manage Industries",
};

export default async function IndustriesPage() {
  const { data, error } = await getIndustriesAction();

  return (
    <main className="min-h-[75vh] flex-col-cc gap-4">
      <h1>IndustriesPage</h1>
      <Debug data={data}/>
    </main>
  );
}
