import { Metadata } from "next";
import { ContactForm } from "@/components/molecules/contact-form";

export const metadata: Metadata = {
  title: "Book a demo",
};

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-2xl lg:pb-24 lg:mt-6">
      <ContactForm />
    </div>
  );
}