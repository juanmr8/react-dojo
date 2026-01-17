## useIntervalWhen
useIntervalWhen is useful for creating an interval timer that can be controlled based on a certain condition (when). It allows you to specify a callback function to be executed at a regular interval every ms milliseconds. Additionally, you can choose whether the interval should startImmediately or wait ms milliseconds (as is the default with useInterval).

```js
const clear = useIntervalWhen(callback, { ms, when, startImmediately });
```

For the full documentation, see [usehooks.com/useintervalwhen](https://usehooks.com/useintervalwhen).

## Tasks
1. useIntervalWhen should return a function that clears the interval when invoked
2. useIntervalWhen should call the callback function every ms milliseconds when when is true
3. useIntervalWhen should not call the callback function when when is false
4. useIntervalWhen should call the callback function immediately when startImmediately is true
5. useIntervalWhen should not call the callback function immediately when startImmediately is false
6. useIntervalWhen should update the interval when ms changes
7. useIntervalWhen should clear the interval when the component is removed from the DOM
