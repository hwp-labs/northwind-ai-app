"use client";

import { useState } from "react";
import { Button } from "../shadcn/ui/button";
import { seedIndustriesAction } from "@/lib/supabase/services/industries/actions/seedIndustriesAction";
import { Spinner } from "../shadcn/ui/spinner";

export const SeedDataWidget = () => {
  const [seeding, setSeeding] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>();

  const handleSeedIndustries = async () => {
    setSeeding(true);
    const { data, error } = await seedIndustriesAction({});

    if (error) setError(error);
    if (data) setData(data);

    setSeeding(false);
  };
  //
  return (
    <section className="grid gap-4">
      <div className="grid">
        <h1 className="flex-row-cs gap-2 text-gray-500">
          {seeding && <Spinner />} {data || "No data"}
        </h1>
        <p className="text-xs text-rose-600">{error || "No error"}</p>
      </div>
      <div className="">
        <Button onClick={handleSeedIndustries} disabled={seeding}>
          Seed Industries
        </Button>
      </div>
    </section>
  );
};
