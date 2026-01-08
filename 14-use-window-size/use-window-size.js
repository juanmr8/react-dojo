import * as React from "react";

export default function useWindowSize() {
  const [size, setSize] = React.useState({
    width: null,
    height: null,
  });

  React.useLayoutEffect(() => {
    const getWindowSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    getWindowSize();
    window.addEventListener("resize", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, []);
  return size;
}
