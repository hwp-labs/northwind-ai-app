import { ChevronRightIcon, LucideIcon } from "lucide-react";
import { IconProps } from "@tabler/icons-react";
import clsx from "clsx";
//
import { COPY } from "@/constants/LOCALE";
import { Button } from "../shadcn/ui/button";
import { ComponentType } from "react";
import Link from "next/link";
import { PATH } from "@/constants/PATH";

interface HeadingProps {
  classNames?: string;
}

const Heading = ({ classNames }: HeadingProps) => {
  return (
    <h1
      className={clsx(
        "font-[Raleway] text-[24px] leading-9 font-medium text-white lg:text-4xl lg:leading-12",
        classNames,
      )}
    >
      {COPY.prompt}
    </h1>
  );
};

interface ListItemProps {
  Icon: ComponentType<IconProps>;
  title: string;
  description: React.ReactNode;
  classNames?: string;
}

const ListItem = ({ Icon, title, description, classNames }: ListItemProps) => {
  return (
    <li className={clsx("flex flex-col gap-2", classNames)}>
      <div className="_flex-row-cs grid gap-4">
        <Button size="icon" className="text-brand bg-brand/10 min-w-[24px]">
          <Icon size={24} />
        </Button>
        <h2 className="text-md font-[Poppins] font-medium lg:text-lg">
          {title}
        </h2>
      </div>
      <p className="text-muted-foreground font-[Montserrat] text-sm leading-6 lg:text-sm">
        {description}
      </p>
      <div className="debug_ mt-4 flex lg:ml-auto">
        <Link href={PATH.getStarted} className="debug_ flex-row-cs text-brand gap-2 text-sm">
          Get started <ChevronRightIcon size={16} />
        </Link>
      </div>
    </li>
  );
};

export const ValueProposition = { Heading, ListItem };
