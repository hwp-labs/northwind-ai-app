import { Metadata } from "next";
import { ContactFormWidget } from "@/components/widgets/contact-form-widget";

export const metadata: Metadata = {
  title: "Get Started",
};

export default function GetStartedPage() {
  return (
    <div className="flex-centered lg:min-h-[80svh] lg:mb-24">
      <div className="w-full max-w-2xl">
        <ContactFormWidget />
      </div>
    </div>
  );
}
