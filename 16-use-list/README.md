## useList
useList allows the user to more conveniently manage a list of items. It returns an array with the list as the first element and an object with methods to manage the list as the second element.

```js
const [list, { set, push, removeAt, insertAt, updateAt, clear }] = useList(initialState);
```
For the full documentation, see [usehooks.com/uselist](https://usehooks.com/uselist).

## Tasks
1. useList should return an array with the list and an object containing methods for set, push, removeAt, insertAt, updateAt, and clear
2. useList should accept an optional initial value for the list
useList should have a set method that allows the user to set the list to a new value
3. useList should have a push method that allows the user to push a new element onto the end of the list
4. useList should have a removeAt method that allows the user to remove an element at a given index
5. useList should have an insertAt method that allows the user to insert an element at a given index
6. useList should have an updateAt method that allows the user to update an element at a given index
7. useList should have a clear method that allows the user to clear the list
