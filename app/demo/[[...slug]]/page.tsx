import { Metadata } from "next";
import { SparkleIcon, SparklesIcon, SunMoonIcon } from "lucide-react";
// 
import { MainLayout } from "@/components/layouts/main-layout";
import { ContactForm } from "@/components/molecules/contact-form";

export const metadata: Metadata = {
  title: "Book a demo",
};

export default function DemoPage() {
  return (
    <MainLayout classNames="">
      <section>
        <h1>
          Sierra helps businesses build better, more human customer experiences.
        </h1>
        <ul>
          <li>
            <SparkleIcon size={14} />
            <p>
              Empowering customer experience and engineering teams to build and
              manage multichannel AI agents.
            </p>
          </li>
          <li>
            <SparklesIcon size={14} />
            <p>
              Partnering with your team to deliver your AI agent—with pricing
              tied to real value delivered.
            </p>
          </li>
          <li>
            <SunMoonIcon size={14} />
            <p>
              Solving complex problems with unparalleled CSAT and resolution
              rates.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <ContactForm />
      </section>
    </MainLayout>
  );
}
