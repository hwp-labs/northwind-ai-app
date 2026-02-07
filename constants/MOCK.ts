interface MockParams {
  loader?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  portal?: number | boolean;
}

export const MOCK = {
  splash: {
    loader: 0,
  },
  home: {
    portal: 0,
  },
  getStarted: {
    formData: 1,
    action: 1,
  },
} as const satisfies Record<string, MockParams>;
