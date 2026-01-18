## Use click away
Finish implementing the useClickAway hook so that, as seen in App.js, when the user clicks outside of the modal (the dialog element), the callback function passed to useClickAway is invoked which will then hide the modal.

```javascript
const ref = useClickAway(callback);
```

For the full documentation, see [usehooks.com/useclickaway](https://usehooks.com/useclickaway).

## Tasks
1. useClickAway should return a ref that the consumer of useClickAway can attach to an element
2. Call useClickAway's callback function when clicking outside the ref's element
3. Don't call useClickAway's callback function when clicking inside the ref's element
4. Remove any event listeners when the component using useClickAway is removed from the DOM
