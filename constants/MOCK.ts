interface MockParams {
  loader?: number | boolean;
  portal?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  router?: number | boolean;
}

export const MOCK = {
  visitorTrackerWidget: {
    loader: 0,
  },
  splash: {
    loader: 0,
  },
  home: {
    portal: 0,
  },
  getStarted: {
    formData: 0,
    action: 0,
    router: 0,
  },
} as const satisfies Record<string, MockParams>;
