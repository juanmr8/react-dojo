import * as React from "react";

export default function useWindowScroll() {
  const [state, setState] = React.useState({
    x: null,
    y: null,
  });

  const scrollTo = (...args) => {
    if (typeof args[0] === "object") {
      window.scrollTo(args[0]);
    } else if (typeof args[0] === "number" && typeof args[1] === "number") {
      window.scrollTo(...args);
    } else {
      throw new Error(`Invalid arguments passed to scrollTo`);
    }
  };
  React.useLayoutEffect(() => {
    const handleScroll = () => {
      const { scrollX, scrollY } = window;
      setState((s) => ({ ...s, x: scrollX, y: scrollY }));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [state, scrollTo];
}
