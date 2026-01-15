## useRandomInterval
https://fireship.dev/c/react/userandominterval-challenge

useRandomInterval is useful for executing a specified callback function at random intervals within a specified range.

```js
const clear = useRandomInterval(
  callback,
  { minDelay, maxDelay }
);
```

For the full documentation, see [usehooks.com/userandominterval](https://usehooks.com/userandominterval).

## Tasks
1. useRandomInterval should return a function that the user can call to clear the timeout
2. useRandomInterval should call the callback function at random intervals between minDelay and maxDelay
3. useRandomInterval should clear the timeout when the component using useRandomInterval is removed from the DOM
4. useRandomInterval should clear the timeout when the component using useRandomInterval is removed from the DOM
