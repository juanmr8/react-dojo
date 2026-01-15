import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function useRandomInterval(cb, { minDelay, maxDelay }) {
	const id = React.useRef(null);
	const onRandomInterval = React.useEffectEvent(cb);
	const handleClearTimeout = () => {
		window.clearTimeout(id.current);
	}

	React.useEffect(() => {
		const tick = () => {
			const interval = getRandomNumber(minDelay, maxDelay);
			id.current = window.setTimeout(() => {
				onRandomInterval();
				tick();
			}, interval);
		}
		tick();
		return handleClearTimeout;
	}, [minDelay, maxDelay, handleClearTimeout]);

	return handleClearTimeout;
}

