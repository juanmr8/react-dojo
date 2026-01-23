import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

const initialState = {
  error: undefined,
  data: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...initialState };
    case "fetched":
      return { ...initialState, data: action.payload };
    case "error":
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
};

export default function useFetch(url, options) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const cacheRef = React.useRef({})

  const onFetch = (url) => {
    return fetch(url, options);
  };

  React.useEffect(() => {
    if (typeof url != "string") return;
    let ignore = false;

    dispatch({ type: "loading" });

    const fetchUrl = async () => {
      const cachedResponse = cacheRef.current[url];

      if (cachedResponse) {
        dispatch({ type: "fe"})
      }

      try {

        const response = await onFetch(url);

        if (!response.ok) {
          throw new Error(response.textStatus);
        }

        const result = await response.json();

        if (ignore == false) {
          dispatch({ type: "fetched", payload: result });
        }
      } catch (e) {
        if (ignore == false) {
          dispatch({ type: "error", payload: e });
        }
      }
    };

    fetchUrl();

    return () => {
      ignore = true;
    };
  }, [url]);

  return state;
}
