import { ChevronRightIcon } from "lucide-react";
import { IconRocket } from "@tabler/icons-react";
//
import { Logo } from "@/components/logo";
import { APP } from "@/constants/APP";

export const Header = () => {
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

const Backdrop = () => (
  <div className="absolute inset-0 bg-[url('/images/bg-radial.png')] bg-cover bg-center bg-no-repeat opacity-8 grayscale filter" />
);

const Description = () => (
  <article className="absolute bottom-26 text-center text-[12px] debug_ w-full">
    <p className="">
      Automate your SME's virtual workflows and Point-of-Sale (POS) systems with{" "}
      <strong className="font-semibold">{APP.name}</strong>
    </p>
    <p className="">
      -transform repetitive business processes into{" "}
      <strong className="font-medium">smart, autonomous AI agents</strong>.
    </p>
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

export const CardBuilder = { Header, Backdrop, Description, CTA };
