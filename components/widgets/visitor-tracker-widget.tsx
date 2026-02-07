"use client";

import { MOCK } from "@/constants/MOCK";
import { useVisitTracker } from "@/hooks/use-visit-tracker";

export const VisitorTrackerWidget = () => {
  const { deviceDetails, error, fetching, creating, updating } =
    useVisitTracker();
  //
  return MOCK.visitorTrackerWidget.loader ? (
    <span className="text-xs text-indigo-300">
      {deviceDetails.error
        ? deviceDetails.error
        : error
          ? error
          : deviceDetails.fetching
            ? "fetching device details..."
            : fetching
              ? "fetching visitor record..."
              : creating
                ? "creating visitor record..."
                : updating
                  ? "updating visitor record..."
                  : null}
    </span>
  ) : null;
};
