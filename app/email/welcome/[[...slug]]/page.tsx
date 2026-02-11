import { Metadata } from "next";
import { WelcomeEmail } from "@/components/emails/welcome-email";

export const metadata: Metadata = {
  title: "Welcome Email",
};

export default function WelcomeEmailPreviewPage() {
  return <WelcomeEmail />;
}
