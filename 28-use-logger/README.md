## useLogger
https://ui.dev/c/react/use-logger-challenge

useLogger is a hook that can be used in development to give you more insight into when your component renders and re-renders. Specifically, it logs the name you give it along with any arguments as well as if the component is on the initial render (mounted), being updated (updated), or about to be removed from the DOM (unmounted).

```js
useLogger(name, arguments);
```

For the full documentation, see [usehooks.com/uselogger](https://usehooks.com/uselogger).

## Tasks
1. useLogger should log name, the event, and any arguments passed to it
2. useLogger should log mounted on the initial render of the component using useLogger
3. useLogger should log updated when the component using useLogger is updated
4. useLogger should log unmounted when the component using useLogger is removed from the DOM
5. useLogger should support multiple arguments
