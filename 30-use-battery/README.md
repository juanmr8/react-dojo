## useBattery
The useBattery hook uses the browser's navigator.getBattery API in order to access and monitor the battery status of the user’s device.

The battery events you'll want to listen for are: levelchange, chargingchange, chargingtimechange, and dischargingtimechange.

```js
const { supported, loading, level, charging, chargingTime, dischargingTime } = useBattery();
```
For the full documentation, see [usehooks.com/usebattery](https://usehooks.com/usebattery).

## Tasks
1. useBattery should return an object with the following properties – supported, loading, level, charging, chargingTime, dischargingTime
2. useBattery should set supported and loading to false when navigator.getBattery is not supported
3. useBattery should update its state with the battery information from the user's device
4. useBattery should update its state with the battery information from the user's device when the battery information changes
5. useBattery should remove any event listeners it established when the component using useBattery is removed from the DOM
