## useEventListener
https://fireship.dev/c/react/useeventlistener-challenge

useEventListener gives you a simple way to add event listeners to a target element.

```js
useEventListener(target, eventName, handler, options);
```

For the full documentation, see [usehooks.com/useeventlistener](https://usehooks.com/useeventlistener).

## Tasks
1. useEventListener should accept a target element, an eventName, a handler function, and an optional options object
2. useEventListener should add an event listener to the target element unless the target element is not defined
3. useEventListener should update the event listener when the target, eventName, or options change
4. useEventListener should remove the event listener when the component using useEventListener is removed from the DOM
