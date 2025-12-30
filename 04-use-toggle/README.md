useToggle has a similar API to useState in that both return an array with the first item being the state and the second item being a way to update that state. However, unlike useState, useToggle's state value can only ever be a boolean.

```js
const [on, setOn] = useToggle(true);

setOn() // false
setOn() // true
setOn(false) // false
setOn(true) // true
setOn("state is still toggled") // false
```
