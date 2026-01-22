## useIdle
useIdle provides a simple way to know if the user has been idle or inactive. It defines "idle" by going a specified amount of time without any of the following events: mousemove, mousedown, resize, keydown, touchstart, wheel, and visibilitychange.

```javascript
const userIsIdle = useIdle(ms);
```

For the full documentation, see [usehooks.com/useidle](https://usehooks.com/useidle).

## Tasks
1. useIdle should take a ms argument that defaults to 1000 * 20 (20 seconds)
2. useIdle should return true if the user has been idle for ms milliseconds, otherwise it should return false
3. useIdle should listen for the following events: mousemove, mousedown, resize, keydown, touchstart, wheel, and visibilitychange
4. useIdle should reset its internal timer whenever any relevant event occurs
5. useIdle should clean up all event listeners when the component using useIdle is removed from the DOM
