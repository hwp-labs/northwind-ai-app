import { useEffect, useState } from "react";
import { getIndustriesCountAction } from "@/lib/supabase/services/industries/actions/getIndustriesAction";
import { getVisitorsCountAction } from "@/lib/supabase/services/visitors/actions/getVisitorsAction";
import { getContactsCountAction } from "@/lib/supabase/services/contacts/actions/getContactsAction";

interface Totaled {
  industries?: number;
  visitors?: number;
  contacts?: number;
}

export const useNav = () => {
  const [totaled, setTotaled] = useState<Totaled>({});

  const fetchTotaled = async () => {
    const [{ data: industries }, { data: visitors }, { data: contacts }] =
      await Promise.all([
        getIndustriesCountAction(),
        getVisitorsCountAction(),
        getContactsCountAction(),
      ]);

    if (industries) setTotaled((prev) => ({ ...prev, industries }));
    if (visitors) setTotaled((prev) => ({ ...prev, visitors }));
    if (contacts) setTotaled((prev) => ({ ...prev, contacts }));
  };

  useEffect(() => {
    fetchTotaled();
  }, []);
  
  return {totaled}
};