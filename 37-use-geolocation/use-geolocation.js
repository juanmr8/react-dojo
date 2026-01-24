import * as React from "react";

export default function useGeolocation(options = {}) {
  const optionsRef = React.useRef(options);
  const [state, setState] = React.useState({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  });

  React.useEffect(() => {
    const onEvent = ({ coords, timestamp }) => {
      setState((s) => ({
        ...s,
        loading: false,
        accuracy: coords.accuracy,
        altitude: coords.altitude,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        latitude: coords.latitude,
        longitude: coords.longitude,
        speed: coords.speed,
        timestamp: timestamp,
        error: null,
      }));
    };

    const onError = (err) => {
      setState((s) => ({
        ...s,
        loading: false,
        error: err
      }));
    };

    navigator.geolocation.getCurrentPosition(
      onEvent,
      onError,
      optionsRef.current
    );

    const id = navigator.geolocation.watchPosition(
      onEvent,
      onError,
      optionsRef.current
    );

    return (() => {
      navigator.geolocation.clearWatch(id)
    })
  }, []);

  return state;
}
