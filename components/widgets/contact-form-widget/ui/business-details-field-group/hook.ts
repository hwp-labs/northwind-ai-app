import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
//
import { getIndustriesAction } from "@/lib/supabase/services/industries/actions/getIndustriesAction";
import { getContactsLocationAction } from "@/lib/supabase/services/contacts/actions/getContactsLocationAction";
import { OptionItem } from "@/types";
import { ContactSchema } from "@/lib/supabase/services/contacts/types";

export function useBusinessDetailsFieldGroup() {
  const { control } = useFormContext<ContactSchema>();
  const watchedIndustryId = useWatch({ control, name: "industry_id" });
  const showIndustryOtherField = watchedIndustryId === "other";

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
    control,
    showIndustryOtherField,
    fetchingIndustries,
    fetchingLocations,
    industryIdOptions,
    locationOptions,
  };
}
