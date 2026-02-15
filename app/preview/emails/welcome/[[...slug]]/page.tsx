import { Metadata } from "next";
//
import { WelcomeEmail } from "@/components/emails/welcome-email";
import { PageProps } from "@/types/common";

import mockData from "@/lib/supabase/services/contacts/data.json";

export const metadata: Metadata = {
  title: "Welcome Email",
};

export default async function PreviewWelcomeEmailPage({
  searchParams,
}: PageProps) {
  const displayNameAsync = (await searchParams).displayName;
  const name = displayNameAsync || mockData.name;
  //
  return <WelcomeEmail data={{ ...mockData, name }} />;
}
