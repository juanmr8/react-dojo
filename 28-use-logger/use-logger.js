import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useLogger(name, ...args) {
  const firstRender = React.useRef(true);

  const handleLog = React.useEffectEvent((event) => {
    console.log(`${name} ${event}:`, args);
  });

  React.useEffect(() => {
    if (firstRender.current === false) {
      handleLog("updated");
    }
  });

  React.useEffect(() => {
    handleLog("mounted");
    firstRender.current = false;

    return () => {
      handleLog("unmounted");
      firstRender.current = true;
    };
  }, []);
}
