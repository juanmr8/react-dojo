import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function usePageLeave(cb) {
  const onPageLeave = React.useEffectEvent((event) => {
    const to = event.relatedTarget || event.toElement;
    if (!to || to.nodeName === "HTML") {
      cb();
    }
  });

  React.useEffect(() => {
    document.addEventListener("mouseout", onPageLeave);

    return () => {
      document.removeEventListener("mouseout", onPageLeave);
    };
  }, []);
}
