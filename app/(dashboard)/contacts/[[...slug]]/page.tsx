import { Metadata } from "next";
import { getContactsAction } from "@/lib/supabase/services/contacts/actions/getContactsAction";
import { Debugger } from "@/components/debugger";

export const metadata: Metadata = {
  title: "Manage Contacts",
};

export default async function ContactsPage() {
  const { data, error } = await getContactsAction();

  return (
    <main className="flex-col-cc min-h-[75vh] gap-4">
      <h1>ContactsPage</h1>
      <Debugger data={data} />
    </main>
  );
}
