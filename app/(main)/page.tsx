import Image from "next/image";
//
import { MainLayout } from "@/components/layouts/main-layout";
import { StatusBar } from "@/components/organisms/status-bar";
import { Hero } from "@/components/molecules/hero";
import { CTA } from "@/components/molecules/cta";

export default function HomePage() {
  return (
    <MainLayout>
      <StatusBar />
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
    </MainLayout>
  );
}
