interface MockParams {
  loader?: number | boolean;
  portal?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  router?: number | boolean;
  // 
  show?: number | boolean;
  skip?: number | boolean;
}

export const MOCK = {
  explorer: {
    show: 1,
  },
  useDeviceDetails: {
    skip: 0,
  },
  VisitorTrackerWidget: {
    show: 0,
  },
  home: {
    portal: 0,
  },
  login: {
    formData: 1,
    action: 0,
    router: 0,
  },
  getStarted: {
    formData: 1,
    action: 0,
    router: 0,
  },
} as const satisfies Record<string, MockParams>;
