"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
//
import { truncateTableAction } from "../../base/actions/truncateTableAction";
import { TABLE } from "../types";
import seedData from "../seeder.json";

type RequestDto = { reset?: boolean };
type ResponseDto = string;

export async function seedIndustriesAction({
  reset,
}: RequestDto): Promise<ApiResponse<ResponseDto>> {
  if (reset) {
    const { error: deleteError } = await truncateTableAction(TABLE);

    if (deleteError) return { data: null, error: deleteError };

    const { count, error } = await supabase
      .from(TABLE)
      .insert(seedData, { count: "exact" });

    return { data: `${count || 0} rows inserted`, error: error?.message };
  }

  const { data: selectData, error: selectError } = await supabase
    .from(TABLE)
    .select("name");

  if (selectError) return { data: null, error: selectError?.message };

  const dataNames = selectData.map(({ name }) => name);
  const seedDataFiltered = seedData.filter(
    ({ name }) => !dataNames.includes(name),
  );

  const { count, error } = await supabase
    .from(TABLE)
    .insert(seedDataFiltered, { count: "exact" });

  return { data: `${count || 0} rows inserted`, error: error?.message };
}
