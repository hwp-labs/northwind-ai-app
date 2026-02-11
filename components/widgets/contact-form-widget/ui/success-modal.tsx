"use client";

import { IconRocket } from "@tabler/icons-react";
//
import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/ui/dialog";
import { Drawer, DrawerContent } from "@/components/shadcn/ui/drawer";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyContent,
} from "@/components/shadcn/ui/empty";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { APP } from "@/constants/APP";

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export const SuccessModal = ({ open, onClose }: Props) => {
  const isMobile = useIsMobile();
  //
  return isMobile ? (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="">{renderModalContent(onClose)}</DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm p-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Success</DialogTitle>
        </DialogHeader>
        {renderModalContent(onClose)}
      </DialogContent>
    </Dialog>
  );
};

const renderModalContent = (onClose: Props["onClose"]) => (
  <Empty className="mt-4">
    <EmptyHeader className="">
      <EmptyMedia variant="icon">
        <IconRocket />
      </EmptyMedia>
      <EmptyTitle>Welcome aboard!</EmptyTitle>
      <EmptyDescription className="_border w-[340px]">
        We'll reach out shortly to discuss how{" "}
        <span className="text-white">{APP.name}</span> can help automate your
        business. Cool?
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent className="grid">
      <Button onClick={onClose}>Alright</Button>
    </EmptyContent>
  </Empty>
);
