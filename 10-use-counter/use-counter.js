import * as React from "react";

export default function useCounter(startingValue = 0, options = {}) {
  const { min, max } = options;

  if (typeof min === "number" && startingValue < min) {
    throw new Error(
      `Your starting value of ${startingValue} is less than your min of ${min}.`
    );
  }

  if (typeof max === "number" && startingValue > max) {
    throw new Error(
      `Your starting value of ${startingValue} is greater than your max of ${max}.`
    );
  }

  const [count, setCount] = React.useState(startingValue);

  const increment = React.useCallback(() => {
    setCount((e) => {
      const nextCount = e + 1;
      if (typeof max == "number" && nextCount > max) {
        return e;
      } else return nextCount;
    });
  }, [max]);

  const decrement = React.useCallback(() => {
    setCount((e) => {
      const nextCount = e - 1;

      if (typeof min == "number" && nextCount < min) {
        return e;
      } else {
        return nextCount;
      }
    });
  }, [min]);

  const set = React.useCallback(
    (nextState) => {
      setCount((e) => {
        if (typeof max == "number" && nextState > max) {
          return e;
        }
        if (typeof min == "number" && nextState < min) {
          return e;
        }
        return nextState;
      });
    },
    [max, min]
  );

  const reset = React.useCallback(() => {
    setCount(startingValue)
  }, [startingValue]);

  return [
    count,
    {
      increment,
      decrement,
      set,
      reset,
    },
  ];
}
