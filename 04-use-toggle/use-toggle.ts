import * as React from "react";

export default function useToggle(initialValue: boolean = true) {
  const [on, setOn] = React.useState(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    }
    return Boolean(initialValue);
  });

  const handleToggle = React.useCallback((value: boolean) => {
    if (typeof value === "boolean") {
      return setOn(value);
    }
    return setOn((v: boolean) => !v);
  }, []);
  return [on, handleToggle];
}
