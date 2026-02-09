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
  useDeviceDetails: {
    loader: 1,
  },
  VisitorTrackerWidget: {
    display: 0,
  },
  splash: {
    loader: 0,
  },
  home: {
    portal: 0,
  },
  login: {
    formData: 0,
    action: 1,
    router: 1,
  },
  getStarted: {
    formData: 0,
    action: 1,
    router: 1,
  },
} as const satisfies Record<string, MockParams>;
