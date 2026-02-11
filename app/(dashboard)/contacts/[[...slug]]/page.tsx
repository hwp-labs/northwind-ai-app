import { Metadata } from "next";
import { getContactsAction } from "@/lib/supabase/services/contacts/actions/getContactsAction";
import { Debug } from "@/components/atoms/debug";

export const metadata: Metadata = {
  title: "Manage Contacts",
};

export default async function ContactsPage() {
  const { data, error } = await getContactsAction();

  return (
    <main className="min-h-[75vh] flex-col-cc gap-4">
      <h1>ContactsPage</h1>
      <Debug data={data}/>
    </main>
  );
}
