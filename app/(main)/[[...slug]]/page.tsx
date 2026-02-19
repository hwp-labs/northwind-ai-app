import Image from "next/image";
//
import { PromptBar } from "@/components/molecules/prompt-bar";
import { Hero } from "@/components/molecules/hero";
import { CTAButtons } from "@/components/molecules/cta-buttons";
import { StatisticsWidget } from "@/components/widgets/statistics-widget";
import { ValuePropositionCards } from "@/components/molecules/value-proposition-cards";

export default function HomePage() {
  return (
    <main>
      <PromptBar />
      <Hero />
      <CTAButtons />
      <Image
        className="mx-auto mt-16 px-4 invert lg:px-0"
        src="/social-preview.png"
        alt=""
        width={1280}
        height={640}
        priority
      />
      <StatisticsWidget />
      <ValuePropositionCards />
    </main>
  );
}
