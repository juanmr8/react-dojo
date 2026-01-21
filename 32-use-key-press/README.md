## useKeyPress
useKeyPress gives you a convenient way to listen for key presses on a specific target. It defaults to adding an event listener for the keydown event on window, but allows the user to customize that via its third options argument.

```js
useKeyPress(key, handler, options);
```
For the full documentation, see [usehooks.com/usekeypress](https://usehooks.com/usekeypress).

## Tasks
1. useKeyPress should add an event listener for the keydown event on window
2. useKeyPress should call the handler function when the key argument matches the event.key value
3. useKeyPress should support event options via the options argument
4. useKeyPress should remove the event listener when the component using useKeyPress is removed from the DOM

