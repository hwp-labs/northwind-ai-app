"use client";

import { useFormContext } from "react-hook-form";
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
import { ContactHelper } from "@/lib/supabase/services/contacts/helper";
import { ContactSchema } from "@/lib/supabase/services/contacts/types";
import { COPY } from "@/constants/LOCALE";

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export const SuccessModal = ({ open, onClose }: Props) => {
  const isMobile = useIsMobile();
  const { getValues } = useFormContext<ContactSchema>();

  const contact = new ContactHelper(getValues());

  const renderModalContent = (
    <Empty className="mt-4">
      <EmptyHeader className="">
        <EmptyMedia variant="icon" className="bg-brand mb-4">
          <IconRocket />
        </EmptyMedia>
        <EmptyTitle>
          {COPY.email.welcome}
          {contact.DisplayName()}!
        </EmptyTitle>
        <EmptyDescription className="_border text-muted-foreground w-[340px]">
          {COPY.promptWithCool}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="grid">
        <Button variant="secondary" onClick={onClose}>
          Alright
        </Button>
      </EmptyContent>
    </Empty>
  );
  //
  return isMobile ? (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="rounded-t-4xl">
        {renderModalContent}
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm p-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Success</DialogTitle>
        </DialogHeader>
        {renderModalContent}
      </DialogContent>
    </Dialog>
  );
};
