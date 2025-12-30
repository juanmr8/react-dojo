usePrevious is useful for tracking what a value was during the previous render. This can be particularly handy in scenarios where it's necessary to compare the current value with the previous one, such as triggering actions or rendering based on changes.

```js
const previousValue = usePrevious(value);
```

For the full documentation, see usehooks.com/useprevious.
