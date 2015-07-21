# Nesting Find Calls in Mongo

## Objectives

- Be able to find documents from multiple collections in succession

## Refresher on Async behavior

Take a look at the following code (but don't run it):

```js
var result = []

setTimeout(function () {
  result.push("foo")
}, 500)

setTimeout(function () {
  result.push("bar")
}, 500)

console.log(result);
```

What will be printed to the console?  Take a minute to really think about it.

The answer is that you'll see `[]` printed.  Why?

If this is at all unclear, 
