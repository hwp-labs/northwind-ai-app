"use client";

import { useState } from "react";
// 
import { Button } from "../shadcn/ui/button";
import { Spinner } from "../shadcn/ui/spinner";
import { useToast } from "@/hooks/use-toast";
import { seedIndustriesAction } from "@/lib/supabase/services/industries/actions/seedIndustriesAction";

export const SeedDataWidget = () => {
  const toast = useToast();
  const [seeding, setSeeding] = useState(false);

  const handleSeedIndustries = async () => {
    setSeeding(true);

    const { data, error } = await seedIndustriesAction({});
    if (error) toast.error(error);
    if (data) toast.success(data);
    
    setSeeding(false);
  };
  //
  return (
    <section className="grid gap-4">
      <Button onClick={handleSeedIndustries} disabled={seeding}>
        Seed Industries
      </Button>
    </section>
  );
};
