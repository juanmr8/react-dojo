## useFetch
useFetch allows you to easily fetch data from a specified url using the browser's fetch API and provides a consistent pattern for handling success (data) and error states. It also incorporates an internal caching mechanism to store and retrieve previously fetched data as well as a mechanism to ignore stale responses if the component unmounts or if a new request is made before the previous one completes.

```javascript
const { error, data } = useFetch(url, options);
```

For the full documentation, see [usehooks.com/useFetch](https://usehooks.com/useFetch/).

## Tasks
1. useFetch should return an object with error and data properties
2. useFetch should return the data if the request is successful
3. useFetch should return the error if the request fails
4. useFetch should cache the response if the same request is made again
5. useFetch should reset its state if the url changes
