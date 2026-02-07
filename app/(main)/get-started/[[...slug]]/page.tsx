import { Metadata } from "next";
import { ContactFormWidget } from "@/components/widgets/contact-form-widget";

export const metadata: Metadata = {
  title: "Get Started",
};

export default function GetStartedPage() {
  return (
    <div className="mx-auto max-w-2xl lg:pb-24 lg:mt-6">
      <ContactFormWidget />
    </div>
  );
}