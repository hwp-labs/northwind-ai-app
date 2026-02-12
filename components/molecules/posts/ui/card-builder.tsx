import { Logo } from "@/components/atoms/logo";
import { APP } from "@/constants/APP";
import { IconRocket } from "@tabler/icons-react";
import { ThemedTerminalIcon } from "@/components/atoms/themed-terminal-icon";

export const Header = () => {
  return (
    <header className="flex-row-cb border-b bg-white px-8 py-6">
      <Logo />
      <figure className="flex-row-cs gap-2">
        <img src="/images/logo-hwp-labs.png" className="size-[24px]" alt="" />
        <figcaption className="font-medium text-[15px]">{APP.owner}&reg;</figcaption>
      </figure>
    </header>
  );
};

const Backdrop = () => (
  <div className="absolute inset-0 bg-[url('/images/bg-radial.jpg')] bg-cover bg-center bg-no-repeat opacity-8 grayscale filter" />
);

const Footer = () => (
  <footer className="absolute bottom-8 w-full px-8">
    <section className="flex-row-cb rounded-full bg-black px-8 py-4 text-sm text-white">
      <div className="flex-row-cs gap-2.5">
        Get started
        <ThemedTerminalIcon/>
      </div>
      <div className="flex-row-cs gap-2.5">
        <IconRocket size={20} color={APP.colors.contrast} />
        {APP.domain}
      </div>
    </section>
  </footer>
);

export const CardBuilder = { Header, Backdrop, Footer };
