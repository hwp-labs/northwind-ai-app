import { BaseModel } from "./base";

const mockData = {
  visits: 1,
  screen: {
    width: 900,
    height: 1440,
    device: "desktop",
  },
  platform: "MacIntel",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
  geolocation: {
    latitude: 37.7749,
    longitude: -122.4194,
    accuracy: 25,
  },
  ipAddress: "203.0.113.42",
};

export type ScreenDevice = "mobile" | "tablet" | "desktop";

export interface VisitorModel extends BaseModel {
  visits: number;
  screen: ScreenDto;
  platform: string;
  userAgent: string;
  geolocation?: GeolocationDto | null;
  ipAddress?: string | null;
}

export interface ScreenDto {
  width: number;
  height: number;
  device: ScreenDevice;
}

export interface GeolocationDto {
  longitude: number;
  latitude: number;
  accuracy: number;
}

