UseEffect is not lifecycle hook
==> The mental model is synchronization. Not lifecycle.
By default, Effects run after every render. This is why code like this will produce an infinite loop:
```javascript
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  })
```
Effects run as a result of rendering. When setting state (setCount) => triggering rendering.
--> effect will be run because of rendering --> setState in Effect -> rendering -> and so on
---> Setting State immediately in an Effect is like pluggin a power outlet into itself.
--> Effect is used for synchronize your component with an external system. If there's no external system and you only want to adjust some state based on other state, you might not need and effect

The best ideal of useEffect
```javascript
  useEffect(() => {
    doSomething();

    return () => cleanUp();
  }, [whenThisChanges]);
```

```javascript
  const [itemData, setItemData] = useState(null);
  useEffect(() => {
    // Synchronize with external system
    const sub = storeApi.subscribeToItem(itemId, setItemData);
    // Subscription disposal
    return sub.unsubsribe;
  }, [itemId])
```


--------------------------------------------------------------------------------------------------
```javascript
  useEffect(() => {
    // componentDidMount
    doSomething() ==> Effect
  }, []) ===> Dependency array
```

```javascript
  useEffect(() => {
    // componentDidUpdate
  }, [something, something])
```


```javascript
  useEffect(() => {
      return () => {
        // componentWillUnmount
      }
  }, [])
```