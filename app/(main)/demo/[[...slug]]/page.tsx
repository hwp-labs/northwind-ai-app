import { Metadata } from "next";
//
import { ValueProposition } from "@/components/molecules/value-proposition";
import { ContactForm } from "@/components/molecules/contact-form";
import { VALUE_PROPOSITION } from "@/constants/LOCALE";

export const metadata: Metadata = {
  title: "Book a demo",
};

export default function DemoPage() {
  return (
    <main className="flex min-h-[75vh] flex-col-reverse gap-16 px-4 pt-4 pb-16 lg:grid lg:grid-cols-2 lg:gap-0 lg:px-0 lg:pt-8">
      <section className="flex-row-cc border_ px-2">
        {renderValueProposition}
      </section>
      <section className="flex-row-cc border_">
        <ContactForm />
      </section>
    </main>
  );
}

const renderValueProposition = (
  <div className="w-full max-w-lg">
    <ValueProposition.Heading />
    <ul className="mt-8 lg:mt-6 space-y-6">
      {VALUE_PROPOSITION.map((item, i) => (
        <ValueProposition.ListItem key={i} {...item} />
      ))}
    </ul>
  </div>
);
