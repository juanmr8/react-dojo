import * as React from "react";

export default function useOrientation() {
  const [orientation, setOrientation] = React.useState({
    angle: 0,
    type: "UNKNOWN",
  });

  React.useLayoutEffect(() => {

    handleOrientationChange = () => {
      const { angle, type } = window.screen.orientation;
      setOrientation({
        type,
        angle,
      });
    };

    legacy_handle_orientation_change = () => {
      setOrientation({
        type: "UNKNOWN",
        angle: window.orientation,
      });
    };

    if (window.screen?.orientation) {
      handleOrientationChange();
      window.screen.orientation.addEventListener(
        "change",
        handleOrientationChange
      );
    } else {
      legacy_handle_orientation_change();
      window.addEventListener(
        "orientationchange",
        legacy_handle_orientation_change
      );
    }

    return () => {
      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener(
          "change",
          handleOrientationChange
        );
      } else {
        window.removeEventListener(
          "orientationchange",
          legacy_handle_orientation_change
        );
      }
    };
  }, []);

  return orientation;
}
