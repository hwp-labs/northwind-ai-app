interface LookupParams {
  label: string;
  value: string;
}

export const IndustryLookup = {
  OTHER: { label: "Other", value: "other" },
} as const satisfies Record<string, LookupParams>;
