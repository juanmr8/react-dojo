## useOrientation
useOrientation gives you a convenient way to get the current orientation of the user's device.

It works by listening for the change event on screen.orientation if the browser supports it, or else it falls back to listen to orientationchange on the window object if it doesn't.

```js
const { angle, type } = useOrientation();
```
Note that `type` will only be available if the browser supports `screen.orientation`. Otherwise, set it to `UNKNOWN`.

For the full documentation, see [usehooks.com/useorientation](https://usehooks.com/useorientation).

## Tasks
1. useOrientation should return an object with angle and type properties
2. useOrientation should listen to change on screen.orientation if the browser supports it
3. useOrientation should listen to orientationchange on window if the browser doesn't support screen.orientation
4. useOrientation should update the state with the device's orientation whenever the event handler is invoked
5. useOrientation should remove the event listeners when the component using useOrientation is removed from the DOM
