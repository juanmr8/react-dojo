import * as React from "react";

export default function useDefault(initialValue: any, defaultValue: any) {
  const [state, setState] = React.useState(initialValue);

  if (state == null || typeof state === "undefined") {
    return [defaultValue, setState];
  }

  return [state, setState];
}
