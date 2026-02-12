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
          <img src="/social-preview.png" alt="" width={640} className="mx-auto" />
          <figcaption className="mt-8 grid gap-1">
            <h1 className="font-[Raleway] text-[24px] font-bold">
              {APP.title}
            </h1>
            <p className="text-[12px] leading-4">
              Automate your SME's virtual workflows and Point-of-Sale (POS)
              systems with{" "}
              <strong className="font-semibold">Northwind AI</strong>
            </p>
            <p className="text-[12px] leading-3">
              -transform repetitive business processes into{" "}
              <strong className="font-medium">
                smart, autonomous AI agents
              </strong>
              .
            </p>
          </figcaption>
        </figure>
        <CardBuilder.Footer />
      </main>
    </>
  );
};
