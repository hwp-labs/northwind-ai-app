import { Metadata } from "next";
import { getIndustriesAction } from "@/lib/supabase/services/industries/actions/getIndustriesAction";
import { Debugger } from "@/components/debugger";

export const metadata: Metadata = {
  title: "Manage Industries",
};

export default async function IndustriesPage() {
  const { data, error } = await getIndustriesAction();

  return (
    <main className="flex-col-cc min-h-[75vh] gap-4">
      <h1>IndustriesPage</h1>
      <Debugger data={data} />
    </main>
  );
}
