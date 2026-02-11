interface MockParams {
  loader?: number | boolean;
  portal?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  router?: number | boolean;
  // 
  display?: number | boolean;
  skip?: number | boolean;
}

export const MOCK = {
  explorer: {
    display: 0,
  },
  useDeviceDetails: {
    skip: 0,
  },
  VisitorTrackerWidget: {
    display: 0,
  },
  home: {
    portal: 0,
  },
  login: {
    formData: 0,
    action: 0,
    router: 0,
  },
  getStarted: {
    formData: 0,
    action: 0,
    router: 0,
  },
} as const satisfies Record<string, MockParams>;
