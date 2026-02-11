import { Metadata } from "next";
import { WelcomeEmail } from "@/components/emails/welcome-email";
import mockData from "@/lib/supabase/services/contacts/data.json";

export const metadata: Metadata = {
  title: "Welcome Email",
};

export default function WelcomeEmailPreviewPage() {
  return <WelcomeEmail data={mockData}/>;
}