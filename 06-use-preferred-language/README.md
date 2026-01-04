## Exercise:
usePreferredLanguage returns a string that represents the preferred language of the user, as set in the browser settings. You can get access to their preferred language via navigator.language. You can listen to changes to the preferred language by adding an event listener for the languagechange event.

const language = usePreferredLanguage()
Tasks
usePreferredLanguage should return the user's preferred language as a string
usePreferredLanguage should listen for changes to the user's preferred language and update the return value accordingly
usePreferredLanguage should unsubscribe from the languagechange event when the component that uses usePreferredLanguage is removed from the DOM
usePreferredLanguage should throw an error if it's used on the server
The Result
The final version of your app should look and behave like this.

## Hints Solution
### Hint #1
Because you're synchronizing your component with state that the browser is already controlling, you'll want to use React's useSyncExternalStore hook to implement usePreferredLanguage.

useSyncExternalStore takes in three arguments: subscribe, getSnapshot, and getServerSnapshot.

``` js
import * as React from "react";

const subscribe = (cb) => {

};

const getSnapshot = () => {

};

const getServerSnapshot = () => {

};

export default function usePreferredLanguage() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
```
### Hint #2
To listen for when the user changes their preferred language, you'll want to add an event listener for the languagechange event.

It's pretty simple to do this in combination with useSyncExternalStore – you'll just pass subscribe's callback function as the second argument to addEventListener.

``` js
const subscribe = (cb) => {
  window.addEventListener("languagechange", cb);
  return () => window.removeEventListener("languagechange", cb);
};
```
### Hint #3
What you return from getSnapshot will be what the user receives when they invoke usePreferredLanguage. This, of course, should be the user's preferred language which we can get via navigator.language.

``` js
const getSnapshot = () => {
  return navigator.language;
};
```
### Hint #4
To ensure that usePreferredLanguage is only used on the client (where navigator exists), you'll want to throw an error in getServerSnapshot. This isn't necessary, but it does provide a better UX than leaving it out.

``` js
const getServerSnapshot = () => {
  throw Error("usePreferredLanguage is a client-only hook");
};
```
