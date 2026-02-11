"use client";

import { useVisitTracker } from "@/hooks/use-visit-tracker";
import { MOCK } from "@/constants/MOCK";

export const VisitorTrackerWidget = () => {
  const { deviceDetails, error, fetching, creating, updating } =
    useVisitTracker();
  //
  return MOCK.VisitorTrackerWidget.show ? (
    <span className="text-xs text-indigo-600">
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
