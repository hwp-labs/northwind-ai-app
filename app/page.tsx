import Image from "next/image";
//
import { Header } from "@/components/organisms/header";
import { StatusBar } from "@/components/organisms/status-bar";
import { Footer } from "@/components/organisms/footer";
import { Hero } from "@/components/molecules/hero";
import { CTA } from "@/components/molecules/cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <StatusBar />
      <Hero />
      <CTA />
      <figure className="flex-center-center my-20">
        <Image
          className="dark:invert"
          src="/social-preview.png"
          alt=""
          width={1028}
          height={640}
          priority
        />
      </figure>
      <Footer />
    </>
  );
}
