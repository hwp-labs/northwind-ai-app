import Image from "next/image";
//
import { Hero } from "@/components/molecules/hero";
import { CTA } from "@/components/molecules/cta";
import { PromptTerminal } from "@/components/molecules/prompt-terminal";
import { ValueProposition } from "@/components/molecules/value-proposition";
import { APP } from "@/constants/APP";

export default function HomePage() {
  return (
    <main>
      <section className="flex-row-cc mt-0 px-4 lg:mt-6">
        <PromptTerminal rounded>{APP.tagline3}</PromptTerminal>
      </section>
      <Hero />
      <CTA />
      <figure className="flex-center-center my-16 px-4 lg:px-0">
        <Image
          className="dark:invert"
          src="/social-preview.png"
          alt=""
          width={1028}
          height={640}
          priority
        />
      </figure>
      <section className="border">
        <ValueProposition />
      </section>
    </main>
  );
}
