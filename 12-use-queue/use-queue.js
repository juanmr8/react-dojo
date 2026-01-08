import * as React from "react";

const placeholder = () => {};

export default function useQueue(initialValue = []) {
  const [queue, setQueue] = React.useState(initialValue);

  const add = React.useCallback((e) => {
    setQueue((i) => [...i, e]);
  }, []);

  const remove = React.useCallback(() => {
    let firstEl;
    setQueue(([first, ...q]) => {
      firstEl = first;
      return q;
    });
    return firstEl;
  }, []);

  const clear = () => {
    setQueue([]);
  };

  const lastPos = queue.length - 1;

  return {
    add,
    remove,
    clear,
    first: queue[0],
    last: queue[lastPos],
    size: queue.length,
    queue,
  };
}
