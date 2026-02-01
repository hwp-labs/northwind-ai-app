import { useEffect, useState } from "react";
import { VisitorModel } from "@/lib/supabase/models/visitor";

type DeviceDetails = Pick<
  VisitorModel,
  "screen" | "platform" | "userAgent" | "geolocation" | "ipAddress"
>;

export function useDeviceDetails() {
  const [data, setData] = useState<Partial<DeviceDetails>>();
  const [loadingGeolocation, setLoadingGeolocation] = useState<boolean>(false);
  const [loadingIpAddress, setLoadingIpAddress] = useState<boolean>(false);

  const getWindowDetails = () => {
    const { platform, userAgent } = navigator;
    const { width, height } = window.screen;
    const device =
      width < 768
        ? "mobile"
        : width >= 768 && width < 1024
          ? "tablet"
          : "desktop";

    setData((prev) => ({
      ...prev,
      screen: { width, height, device },
      platform,
      userAgent,
    }));
  };

  const fetchGeolocation = () => {
    setLoadingGeolocation(true);
    
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        setData((prev) => ({
          ...prev,
          geolocation: { latitude, longitude, accuracy },
        }));
        setLoadingGeolocation(false);
      },
      (err) => {
        console.error(
          "🚀 ~ useDeviceDetails ~ fetchGeolocation ~ err:",
          err.message
        );
        setLoadingGeolocation(false);
      },
      {
        enableHighAccuracy: true,
        maximumAge: Infinity,
        timeout: 10000,
      }
    );
  };

  const fetchIpAddress = () => {
    setLoadingIpAddress(true);

    fetch("https://api.ipify.org")
      .then((res) => res.json())
      .then((ipAddress) => {
        setData((prev) => ({
          ...prev,
          ipAddress,
        }));
      })
      .catch((err) => {
        console.error("🚀 ~ useDeviceDetails ~ fetchIpAddress ~ err:", err);
      })
      .finally(() => {
        setLoadingIpAddress(false);
      });
  };

  useEffect(() => {
    fetchIpAddress();

    if (typeof window === "undefined") return;
    
    getWindowDetails();

    if ("geolocation" in navigator) fetchGeolocation();
  }, []);

  return {
    data,
    loadingGeolocation,
    loadingIpAddress,
  };
}


