import { Metadata } from "next";
//
import { ValueProposition } from "@/components/molecules/value-proposition";
import { ContactForm } from "@/components/molecules/contact-form";

export const metadata: Metadata = {
  title: "Book a demo",
};

export default function DemoPage() {
  return (
    <main className="flex flex-col-reverse lg:grid min-h-[75vh] px-4 lg:pt-8 pt-4 pb-16 lg:grid-cols-2 lg:px-0 gap-16 lg:gap-0">
      <section className="flex-row-cc border_ px-2">
        <ValueProposition />
      </section>
      <section className="flex-row-cc border_">
        <ContactForm />
      </section>
    </main>
  );
}
