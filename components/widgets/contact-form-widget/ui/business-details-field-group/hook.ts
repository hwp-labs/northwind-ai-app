import { useEffect, useState } from "react";
//
import { getIndustriesAction } from "@/lib/supabase/services/industries/actions/getIndustriesAction";
import { getContactsLocationAction } from "@/lib/supabase/services/contacts/actions/getContactsLocationAction";
import { OptionItem } from "@/types/common";

export function useBusinessDetailsFieldGroup() {
  const [fetchingIndustries, setFetchingIndustries] = useState(false);
  const [fetchingLocations, setFetchingLocations] = useState(false);
  const [industryIdOptions, setIndustryIdOptions] = useState<OptionItem[]>([]);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);

  const fetchIndustries = async () => {
    setFetchingIndustries(true);
    const { data } = await getIndustriesAction();

    if (data) {
      const transformed = data.map((item) => ({
        label: item.name,
        value: String(item.id),
      }));

      setIndustryIdOptions(transformed);
    }
    setFetchingIndustries(false);
  };

  const fetchLocations = async () => {
    setFetchingLocations(true);
    const { data } = await getContactsLocationAction();

    if (data) {
      const transformed = data.map(({ location }) => location);
      setLocationOptions(transformed);
    }
    setFetchingLocations(false);
  };

  useEffect(() => {
    fetchIndustries();
    fetchLocations();
  }, []);

  return {
    fetchingIndustries,
    fetchingLocations,
    industryIdOptions,
    locationOptions,
  };
}
