import * as React from "react";

const subscribe = (cb) => {
  document.addEventListener("visibilitychange", cb);

  return () => {
    document.removeEventListener("visibilitychange", cb)
  }
}

const getSnapshot = () => {
  return document.visibilityState === "visible";
}

const getServerSnapshot = () => {
  throw Error("useVisibilityChange is a client-only hook");
};

export default function useVisibilityChange() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
