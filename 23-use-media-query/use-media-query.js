import * as React from "react";

export default function useMediaQuery(query) {
  const getServerSnapshot = () => {
    return "This hook is only available in the client";
  };

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };
  const subscribe = (cb) => {
    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener("change", cb);
    return () => {
      matchMedia.removeEventListener("change", cb);
    };
  };
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
