import { IconCircleCheckFilled } from "@tabler/icons-react";
//
import { CardBuilder } from "../ui/card-builder";
import { APP } from "@/constants/APP";
import data from "./data.json";

interface Data {
  icon: string;
  label: string;
  value: string[];
}

interface Props {
  page?: number;
}

export const FAQPostCard = ({ page }: Props) => {
  const i = (page || 1) - 1;
  const item = data[i] || data[0] as Data;
  //
  return (
    <>
      <CardBuilder.Header />
      <CardBuilder.Container classNames="debug_">
        <div className="debug_ flex-col-cc relative z-2 size-[430px] w-full">
          <div className="grid max-w-sm gap-4 rounded-2xl bg-white py-8 pb-6 shadow-2xl">
            <figure className="grid gap-4">
              <div className="relative mx-auto size-[75px]">
                <img
                  src={`/uploads/faq/${item.icon}`}
                  alt=""
                  className="size-full object-contain"
                />
              </div>
              <figcaption className="text-md text-center font-[Raleway] leading-[22px] font-bold">
                What can AI Automation do for{" "}
                <span className="inline-block">{item.label}</span>?
              </figcaption>
            </figure>
            <ul className="grid gap-2.5 px-8">
              {item.value.map((it, i) => (
                <li key={i} className="flex gap-2.5">
                  <i className="min-w-[16px] pt-0.5">
                    <IconCircleCheckFilled size={16} color={APP.colors.brand} />
                  </i>
                  <p className="text-[13px] font-normal">{it}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <CardBuilder.Description centered />
        <CardBuilder.CTA />
      </CardBuilder.Container>
    </>
  );
};
