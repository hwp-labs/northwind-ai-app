import Image from "next/image";
//
import { PromptTerminal } from "@/components/molecules/prompt-terminal";
import { Hero } from "@/components/molecules/hero";
import { BookADemoButton } from "@/components/molecules/book-a-demo-button";
import { TalkToSalesButtonWidget } from "@/components/widgets/talk-to-sales-button-widget";
import { ValueProposition } from "@/components/molecules/value-proposition";
import { COPY, VALUE_PROPOSITION } from "@/constants/LOCALE";

export default function HomePage() {
  return (
    <main>
      <section className="flex-row-cc mt-0 px-4 lg:mt-6">
        <PromptTerminal>{COPY.prompt}</PromptTerminal>
      </section>
      <Hero />
      <section className="mt-10 flex flex-col justify-center gap-4 px-6 lg:flex-row lg:items-center">
        <BookADemoButton />
        <TalkToSalesButtonWidget/>
      </section>
      <figure className="flex-center-center my-16 px-4 lg:px-0">
        <Image
          className="invert"
          src="/social-preview.png"
          alt=""
          width={1280}
          height={640}
          priority
        />
      </figure>
      <div className="border_ px-4 pb-16 lg:py-16">
        <ValueProposition.Heading classNames="text-center" />
        <ul className="mx-auto mt-10 space-y-10 lg:max-w-[70%]">
          {VALUE_PROPOSITION.map((item, i) => (
            <ValueProposition.ListItem
              key={i}
              {...item}
              classNames="border p-8 lg:p-10 text-left rounded-xl"
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
