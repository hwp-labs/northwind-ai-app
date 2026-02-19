"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE as visitorsTable } from "../../visitors/types";
import { TABLE as contactsTable } from "../../contacts/types";

type RequestDto = never;
type ResponseDto = {
  totalVisitors: number;
  averageVisitorsPerDay: number;
  totalContacts: number;
};

export async function getStatisticsAction(): Promise<ApiResponse<ResponseDto>> {
  const data: ResponseDto = {
    totalVisitors: 0,
    averageVisitorsPerDay: 0,
    totalContacts: 0,
  };

  const [{ data: visitors }, { count: totalContacts }] = await Promise.all([
    supabase.from(visitorsTable).select("ip_address, created_at").order("id"),
    supabase.from(contactsTable).select("id", { count: "exact" }),
  ]);

  if (totalContacts) data.totalContacts = totalContacts;

  if (visitors?.length) {
    const ipAddressSet = new Set(visitors.map(({ ip_address }) => ip_address));

    data.totalVisitors = ipAddressSet.size;

    const createdFirst = visitors[0].created_at;
    const createdLast = visitors[visitors.length - 1].created_at;
    const createdFirstTime = new Date(createdFirst).getTime();
    const createdLastTime = new Date(createdLast).getTime();
    const dayDiff =
      (createdLastTime - createdFirstTime) / (1000 * 60 * 60 * 24);
    const dayDiffSafe = Math.floor(dayDiff) || 1;

    data.averageVisitorsPerDay = Math.round(ipAddressSet.size / dayDiffSafe);

    // console.log(
    //   "🚀 ~ getStatisticsAction ~ data:",
    //   data,
    //   // visitors,
    //   ipAddressSet,
    //   createdAtFirst,
    //   createdAtLast,
    //   createdAtFirstTime,
    //   createdAtLastTime,
    //   dayDiff,
    // );
  }

  return {
    data,
    error: undefined,
  };
}
