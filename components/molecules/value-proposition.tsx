import { LucideIcon } from "lucide-react";
import clsx from "clsx";
//
import { COPY } from "@/constants/LOCALE";

interface HeadingProps {
  classNames?: string;
}

const Heading = ({ classNames }: HeadingProps) => {
  return (
    <h1
      className={clsx(
        "font-[Raleway] text-[28px] leading-10 font-medium lg:text-4xl lg:leading-12 text-white",
        classNames,
      )}
    >
      {COPY.prompt}
    </h1>
  );
};

interface ListItemProps {
  Icon: LucideIcon;
  title: string;
  description: React.ReactNode;
  classNames?: string;
}

const ListItem = ({ Icon, title, description, classNames }: ListItemProps) => {
  return (
    <li className={clsx("flex flex-col gap-2", classNames)}>
      <div className="flex-row-cs gap-4">
        <i className="text-brand min-w-[20px]">
          <Icon size={20} />
        </i>
        <h2 className="text-md font-[Poppins] font-medium lg:text-lg">
          {title}
        </h2>
      </div>
      <p className="text-muted-foreground font-[Montserrat] text-sm leading-6 lg:text-sm">
        {description}
      </p>
    </li>
  );
};

export const ValueProposition = { Heading, ListItem };
