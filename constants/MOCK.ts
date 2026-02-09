interface MockParams {
  display?: number | boolean;
  loader?: number | boolean;
  portal?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  router?: number | boolean;
}

export const MOCK = {
  explorer: {
    display: 0,
  },
  visitorTrackerWidget: {
    display: 0,
  },
  splash: {
    loader: 0,
  },
  home: {
    portal: 0,
  },
  getStarted: {
    formData: 1,
    action: 1,
    router: 1,
  },
} as const satisfies Record<string, MockParams>;
