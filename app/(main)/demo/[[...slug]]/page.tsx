import { Metadata } from "next";
import {
  type LucideIcon,
  SparkleIcon,
  SparklesIcon,
  SunMoonIcon,
} from "lucide-react";
//
import { ContactForm } from "@/components/molecules/contact-form";

export const metadata: Metadata = {
  title: "Book a demo",
};

const renderIcon = (Icon: LucideIcon) => (
  <i className="text-brand mt-2 min-w-[16px]">
    <Icon size={16} />
  </i>
);

export default function DemoPage() {
  return (
    <div className="grid border_ lg:grid-cols-2 mx-auto max-w-5xl gap-20 py-16">
      <section className="border_">
        <h1 className="font-[Raleway] font-medium lg:text-4xl lg:leading-12">
          Sierra helps businesses build better, more human customer experiences.
        </h1>
        <ul className="mt-8 space-y-6 font-[Montserrat] text-sm leading-6">
          {[
            {
              Icon: SparkleIcon,
              text: "Empowering customer experience and engineering teams to build and manage multichannel AI agents.",
            },
            {
              Icon: SparklesIcon,
              text: "Partnering with your team to deliver your AI agent—with pricing tied to real value delivered.",
            },
            {
              Icon: SunMoonIcon,
              text: "Solving complex problems with unparalleled CSAT and resolution rates.",
            },
          ].map(({ Icon, text }, i) => (
            <li key={i} className="flex gap-4">
              {renderIcon(Icon)}
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="">
        <ContactForm />
      </section>
    </div>
  );
}
