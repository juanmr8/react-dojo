import * as React from "react";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  const handleChange = () => {
    setDebouncedValue(value);
  }

  React.useEffect(() => {
    const id = window.setTimeout(handleChange, delay);
    return (() => {
      window.clearTimeout(id);
    })
  }, [value, delay]);

  return debouncedValue;
}
