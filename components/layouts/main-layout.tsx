import { PropsWithChildren } from "react";
import clsx from "clsx";
//
import { Header } from "../organisms/header";
import { Footer } from "../organisms/footer";

interface Props extends PropsWithChildren {
  classNames?: string;
}

export const MainLayout = ({ children, classNames }: Props) => {
  return (
    <>
      <Header />
      <main className={clsx("min-h-[75vh]", classNames)}>{children}</main>
      <Footer />
    </>
  );
};
