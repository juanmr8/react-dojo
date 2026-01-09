## useVisibilityChange
useVisibilityChange is useful for tracking the visibility state (document.visibilityState) of the document. It returns a boolean value that indicates whether the document is visible or not. It also updates the value when the document's visibility state changes by adding an event listener to the document's visibilitychange event.

```js
const documentVisible = useVisibilityChange();
```

For the full documentation, see [usehooks.com/usevisibilitychange](https://usehooks.com/usevisibilitychange).

## Tasks
1. useVisibilityChange should return a boolean value that defaults to true
2. useVisibilityChange should return true when the document is visible
3. useVisibilityChange should return false when the document is not visible
4. useVisibilityChange should clean up the event listener when the component using useVisibilityChange is removed from the DOM
