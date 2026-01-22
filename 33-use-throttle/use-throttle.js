import * as React from "react";

export default function useThrottle(value, interval = 500) {
  const [throttledValue, setThrottledValue] = React.useState(value);
  const lastUpdatedRef = React.useRef(null);

  React.useEffect(() => {
    const now = Date.now();

    if (lastUpdatedRef.current && now >= lastUpdatedRef.current + interval) {
      lastUpdatedRef.current = now;
      setThrottledValue(value);
    } else {
      const id = window.setTimeout(() => {
        lastUpdatedRef.current = now;
        setThrottledValue(value);
      }, interval);
      return (() => {
        window.clearTimeout(id);
      })
    }
  }, [value, interval]);

  return throttledValue;
}
