import * as React from "react";

export default function usePrevious(value) {
  const [current, setCurrent] = React.useState(value);
  const [prev, setPrev] = React.useState(null);

  if (value != current) {
    setPrev(current);
    setCurrent(value);
  }
  return prev;
}
