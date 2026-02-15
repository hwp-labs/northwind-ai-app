import { APP } from "@/constants/APP";
import { CardBuilder } from "./card-builder";

interface Props {
  hero: string;
  heroWidth?: number;
  headline: string;
  summary: React.ReactNode;
}

export const DefaultPost = () => {
  return (
    <>
      <CardBuilder.Header />
      <main className="bg-foreground flex-col-cc relative flex-1">
        <CardBuilder.Backdrop />

        <figure className="_debug -mt-10 px-10">
          <img
            src="/social-preview.png"
            alt=""
            width={640}
            className="mx-auto"
          />
          <figcaption className="mt-2 grid gap-1 text-center">
            <h1 className="font-[Raleway] text-[24px] font-bold">
              {APP.title}
            </h1>
            <CardBuilder.Description />
          </figcaption>
        </figure>
        <CardBuilder.CTA />
      </main>
    </>
  );
};
