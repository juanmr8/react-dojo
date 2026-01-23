import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useCountdown(endTime, options) {
  const [count, setCount] = React.useState(null);
  const intervalRef = React.useRef(null);

  const onTick = React.useEffectEvent(() => {
    if ( count === 0) {
      handleClearInterval();
      options.onComplete();

    } else {
      options.onTick();
      setCount(c => c - 1);
    }
  })

  const handleClearInterval = () => {
    window.clearInterval(intervalRef.current);
  }

  React.useEffect(() => {
    setCount(Math.round((endTime - Date.now()) / options.interval))
  }, [options.interval, endTime]);

  React.useEffect(() => {
    intervalRef.current = window.setInterval(onTick, options.interval);

    return () => handleClearInterval();
  }, [options.interval])

  return count;
}
