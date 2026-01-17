import * as React from "react";

const getRelativePosition = (event, element) => {};

export default function useMouse() {
  const [state, setState] = React.useState({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    elementPositionX: 0,
    elementPositionY: 0,
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY, pageX, pageY } = e;
    let newState = {
      x: pageX,
      y: pageY,
    };
    if (ref.current) {
      const { left, top } = ref.current.getBoundingClientRect();
      const elementPositionX = left + window.scrollX;
      const elementPositionY = top + window.scrollY;
      const elementX = pageX - elementPositionX;
      const elementY = pageY - elementPositionY;

      newState.elementX = elementX;
      newState.elementY = elementY;
      newState.elementPositionX = elementPositionX;
      newState.elementPositionY = elementPositionY;
    }
    setState((s) => {
      return {
        ...s,
        ...newState,
      };
    });
  };

  React.useLayoutEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const ref = React.useRef(null);

  return [state, ref];
}
