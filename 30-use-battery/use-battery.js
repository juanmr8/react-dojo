import * as React from "react";

const subscribe = (cb) => {};

const getSnapshot = () => {
  return navigator.getBattery();
};

export default function useBattery() {
  const [state, setState] = React.useState({
    supported: true,
    loading: true,
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });

  React.useEffect(() => {
    let battery = null;

    if (!navigator.getBattery) {
      setState((s) => ({ ...s, loading: false, supported: false }));
      return;
    }

    const handleLevelChange = () => {
      setState({
        supported: true,
        loading: false,
        level: battery.level,
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime
      });
    };

    navigator.getBattery().then((b) => {
      battery = b;
      handleLevelChange();
      b.addEventListener("levelchange", handleLevelChange);
      b.addEventListener("chargingchange", handleLevelChange);
      b.addEventListener("chargingtimechange", handleLevelChange);
      b.addEventListener("dischargingtimechange", handleLevelChange);
    });

    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", handleLevelChange);
        battery.removeEventListener("chargingchange", handleLevelChange);
        battery.removeEventListener("chargingtimechange", handleLevelChange);
        battery.removeEventListener("dischargingtimechange", handleLevelChange);
      }
    };
  }, []);

  return state;
}
