import { Metadata } from "next";
// 
import { WelcomeEmail } from "@/components/emails/welcome-email";
import { PageProps } from "@/types/common";

import mockData from "@/lib/supabase/services/contacts/data.json";

export const metadata: Metadata = {
  title: "Welcome Email",
};

export default async function PreviewWelcomeEmailPage({
  params,
  searchParams,
}: PageProps) {
  const displayName = (await searchParams).displayName as string;
  // 
  return (
    <WelcomeEmail data={{ ...mockData, name: displayName || mockData.name }} />
  );
}
