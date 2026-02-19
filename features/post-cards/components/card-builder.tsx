import { PropsWithChildren } from "react";
import { ChevronRightIcon } from "lucide-react";
import { IconRocket } from "@tabler/icons-react";
import clsx from "clsx";
//
import { Logo } from "@/components/logo";
import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";

const Header = () => {
  return (
    <header className="flex-row-cb border-gray-100_ border-b bg-white px-8 py-6">
      <Logo />
      <figure className="flex-row-cs gap-2">
        <img src="/images/logo-hwp-labs.png" className="size-[24px]" alt="" />
        <figcaption className="text-[15px] font-medium">
          {APP.owner}&reg;
        </figcaption>
      </figure>
    </header>
  );
};

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => (
  <main
    className={clsx("bg-foreground relative flex-1 overflow-hidden", className)}
  >
    <div className="absolute inset-0 z-1 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat opacity-8 grayscale filter" />
    {children}
  </main>
);

interface DescriptionProps {
  centered?: boolean;
}

const Description = ({ centered }: DescriptionProps) => (
  <article
    className={clsx(
      "debug_ absolute bottom-25 w-full text-[12px] leading-5",
      centered ? "text-center" : "px-10",
    )}
  >
    <p className="">{COPY.automateRichText}</p>
    <p className="">{COPY.transformRichText}</p>
  </article>
);

const CTA = () => (
  <footer className="absolute bottom-8 w-full px-8">
    <section className="flex-row-cb rounded-full bg-black px-8 py-4 text-sm text-white">
      <div className="flex-row-cs gap-2">
        Get started
        <ChevronRightIcon size={16} />
      </div>
      <div className="flex-row-cs gap-2.5">
        <IconRocket size={20} color={APP.colors.contrast} />
        {APP.domain}
      </div>
    </section>
  </footer>
);

export const CardBuilder = { Header, Container, Description, CTA };
