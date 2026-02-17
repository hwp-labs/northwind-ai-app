import Image from "next/image";
//
import { ThemedTerminalIcon } from "@/components/atoms/themed-terminal-icon";
import { Hero } from "@/components/molecules/hero";
import { BookADemoButton } from "@/components/molecules/book-a-demo-button";
import { TalkToSalesButtonWidget } from "@/components/widgets/talk-to-sales-button-widget";
import { ValueProposition } from "@/components/molecules/value-proposition";
import { COPY } from "@/constants/LOCALE";

export default function HomePage() {
  return (
    <main>
      <section className="flex-row-cc mt-0 px-8 lg:px-0 lg:mt-6">
        <div className="flex-row-cs custom-mono from-contrast/20  to-brand/5 border gap-2.5 rounded-lg bg-gradient-to-t px-4 py-3 text-xs lg:text-sm leading-[18px]">
          <ThemedTerminalIcon alt />
          {COPY.prompt}
        </div>
      </section>
      <Hero />
      <section className="mt-10 flex flex-col justify-center gap-4 px-6 lg:flex-row lg:items-center">
        <BookADemoButton />
        <TalkToSalesButtonWidget />
      </section>
      <Image
        className="mx-auto my-16 px-4 invert lg:px-0"
        src="/social-preview.png"
        alt=""
        width={1280}
        height={640}
        priority
      />
      <div className="border_ px-4 pb-16">
        <ValueProposition.Heading classNames="text-center" />
        <ul className="mx-auto mt-10 lg:max-w-[80%] grid lg:grid-cols-3 gap-8">
          {COPY.valueProposition.map((item, i) => (
            <ValueProposition.ListItem
              key={i}
              {...item}
              classNames="border p-8 pb-6 text-left rounded-xl"
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
