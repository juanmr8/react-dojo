import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useIntervalWhen(cb, { ms, when, startImmediately }) {
  const id = React.useRef(null);
  const immediatelyStarted = React.useRef(startImmediately === true ? false : null);
  const onTick = React.useEffectEvent(cb);

  const handleClearInterval = () => {
    window.clearInterval(id.current);
  };

  React.useEffect(() => {
    if (when === true) {
      id.current = window.setInterval(onTick, ms);

      if (!immediatelyStarted.current && startImmediately === true) {
        onTick();
        immediatelyStarted.current = true;
      }

      return handleClearInterval;
    }
  }, [when, ms, startImmediately, handleClearInterval]);

  return handleClearInterval;
}
