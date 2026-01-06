import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useInterval(cb, ms) {
  const id = React.useRef(null);
  const func = React.useEffectEvent(cb);

  const clearFunc = React.useCallback(() => {
    window.clearInterval(id.current);
  }, [])

  React.useEffect(() => {
    id.current = window.setInterval(func, ms);
    return clearFunc;
  }, [ms])

  return clearFunc;
}
