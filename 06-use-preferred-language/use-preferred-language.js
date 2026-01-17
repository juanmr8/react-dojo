import * as React from "react";

const getSnapshot = () => {
  return navigator.language;
};

const subscribe = (cb) => {
  window.addEventListener("languagechange", cb);

  return () => {
    window.removeEventListener("languagechange", cb);
  };
};

const getServerSnapShot = () => {
  throw Error("usePreferredLanguage is a client-only hook");
};

export default function usePreferredLanguage() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapShot);
}

