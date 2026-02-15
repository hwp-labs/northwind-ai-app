import { IconCircleCheckFilled } from "@tabler/icons-react";
import { CardBuilder } from "./card-builder";
import { APP } from "@/constants/APP";

interface Props {
  page?: number;
}

export const ListPost = ({ page }: Props) => {
  const i = (page || 1) - 1;
  const item = data[i];
  //
  return (
    <>
      <CardBuilder.Header />
      <CardBuilder.Container>
          <div className="debug_ mx-auto grid max-w-sm relative z-2 mt-8 gap-4 rounded-2xl bg-white px-8 py-6 shadow-2xl">
            <figure className="grid gap-2">
              <div className="relative mx-auto size-[60px]">
                <img
                  src={`/uploads/list/${item.icon}`}
                  alt=""
                  className="size-full object-contain"
                />
              </div>
              <figcaption className="font-[Raleway] text-xl leading-[26px] font-bold">
                What can AI Automation do for {item.label}?
              </figcaption>
            </figure>
            <ul className="grid gap-4">
              {item.value.map((it, i) => (
                <li key={i} className="flex gap-2.5">
                  <IconCircleCheckFilled size={20} color={APP.colors.brand} />
                  <p className="text-sm font-medium">{it}</p>
                </li>
              ))}
            </ul>
          </div>
        <CardBuilder.Description centered />
        <CardBuilder.CTA />
      </CardBuilder.Container>
    </>
  );
};

interface Data {
  icon: string;
  label: string;
  value: string[];
}
const data: Data[] = [
  {
    icon: "real-estate.png",
    label: "a Real Estate business",
    value: [
      `Property Listing Automation`,
      `Geospatial Intelligence & Virtual Tours`,
      `Augmented Reality (AR) Interior Design`,
      `Payment Transaction & Audit Automation`,
      `KYC Document Verification`,
    ],
  },
];
