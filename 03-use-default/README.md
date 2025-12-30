The useDefault hook behaves similar to useState but with one difference – if the state of the hook is undefined or null, useDefault will default the state back to a provided default value.

```js
const [state, setState] = useDefault(initialValue, defaultValue);
