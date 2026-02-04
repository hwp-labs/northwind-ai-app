import { PiggyBankIcon, SmileIcon, StarIcon } from "lucide-react";
//
import { APP } from "@/constants/APP";

export const ValueProposition = () => {
  return (
    <div className="w-full max-w-lg">
      <h1 className="font-[Raleway] text-[28px] leading-10 font-medium lg:text-4xl lg:leading-12">
        {APP.tagline3}
      </h1>
      <ul className="mt-8 space-y-6 lg:space-y-4 font-[Montserrat] leading-6">
        {[
          {
            Icon: PiggyBankIcon,
            title: "Save Time & Money",
            description: `Instantly reduce operational costs by up to 40% and save hours on repetitive tasks and virtual workflows. 
            AI agents run 24/7, and free up time for you and your team to focus on innovation and leads generation.`,
          },
          {
            Icon: SmileIcon,
            title: "Improve Quality of Service",
            description: `Autonomously deliver professional and reliable service.
            AI-powered automation ensures 99% accuracy across internal business processes, learning and adapting as your business grows.`,
          },
          {
            Icon: StarIcon,
            title: "Satisfy Your Customers",
            description: `Continuously convert 10x more sales leads. 
          AI agents provide seamless multi-channel integration and scenario-based engagement that exceed customer expectations, build trust and nurtures loyalty.`,
          },
        ].map(({ Icon, title, description }, i) => (
          <li key={i} className="flex flex-col gap-2">
            <div className="flex-row-cs gap-4">
              <i className="text-brand mt-2_ min-w-[20px]">
                <Icon size={20} />
              </i>
              <h2 className="font-[Poppins] text-md lg:text-lg font-medium">{title}</h2>
            </div>
            <p className="text-muted-foreground font-[Montserrat] text-sm leading-6 lg:text-sm">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
