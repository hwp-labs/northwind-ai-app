import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";

export const Hero = () => {
  return (
    <section className="mt-10 space-y-4 px-6 text-center">
      <h1 className="_border mx-auto w-[320px] font-[Raleway] text-[38px] leading-12 font-semibold text-white lg:w-full lg:text-6xl lg:leading-18">
        {APP.title}
      </h1>
      <div className="lg:text-md text-sm leading-7 lg:leading-6">
        <p>{COPY.automate}</p>
        <p className="text-muted-foreground">
          {COPY.transformRichTextWithLink}
        </p>
      </div>
    </section>
  );
};