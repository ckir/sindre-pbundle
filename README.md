# sindre-p 
---


All Promise Utils functions from github.com/sindresorhus bundled together!

## Installation
---

```sh
npm install github:ckir/sindre-p --save
```

## Usage
---

```javascript
import p from "sindre-p"

/*
    That's it!, now you can call any of his functions :)
*/

p.delay(1000)
 .then(() => console.log('I waited 1000 milliseconds to send this message! :D'))

```

## Documentation
---
##### `import p from "sindre-p"`

Returns an object with all the Promise util functions!

They will be mapped just like this:

- `all` -> [`import pAll from 'p-all'`](https://github.com/sindresorhus/p-all): Run promise-returning &amp; async functions concurrently with optional limited concurrency
- `any` -> [`import pAny from 'p-any'`](https://github.com/sindresorhus/p-any): Wait for any promise to be fulfilled
- `cancelable` -> [`import PCancelable from 'p-cancelable')`](https://github.com/sindresorhus/p-cancelable): Create a promise that can be canceled
- `catchIf` -> [`import pCatchIf from 'p-catch-if')`](https://github.com/sindresorhus/p-catch-if): Conditional promise catch handler
- `debounce` -> [`import pDebounce from 'p-debounce'`](https://github.com/sindresorhus/p-debounce): Debounce promise-returning &amp; async functions
- `defer` -> [`import pDefer from 'p-defer')`](https://github.com/sindresorhus/p-defer): Create a deferred promise
- `delay` -> [`import delay from 'delay'`](https://github.com/sindresorhus/delay): Delay a promise a specified amount of time
- `doWhilst` -> [`import pDoWhilst from 'p-do-whilst'`](https://github.com/sindresorhus/p-do-whilst): Calls a function repeatedly while a condition returns true and then resolves the promise
- `eachSeries` -> [`import pEachSeries from 'p-each-series')`](https://github.com/sindresorhus/p-each-series): Iterate over promises serially
- `event` -> [`import { pEvent } from 'p-event'`](https://github.com/sindresorhus/p-event): Promisify an event by waiting for it to be emitted
- `every` -> [`import pEvery from 'p-every'`](https://github.com/kevva/p-every): Test whether all promises passes a testing function
- `filter` -> [`import pFilter from 'p-filter'`](https://github.com/sindresorhus/p-filter): Filter promises concurrently
- `forever` -> [`import pForever from 'p-forever'`](https://github.com/sindresorhus/p-forever): Run promise-returning &amp; async functions repeatedly until you end it
- `hardRejection` -> [`import hardRejection from 'hard-rejection'`](https://github.com/sindresorhus/hard-rejection): Make unhandled promise rejections fail hard right away instead of the default silent fail
- `if` -> [`import pIf from 'p-if'`](https://github.com/sindresorhus/p-if): Conditional promise chains
- `immediate` -> [`import pImmediate from 'p-immediate'`](https://github.com/sindresorhus/p-immediate): Returns a promise resolved in the next event loop - think `setImmediate()`
- `isPromise` -> [`import isPromise from 'p-is-promise'`](https://github.com/sindresorhus/p-is-promise): Check if something is a promise
- `lazy` -> [`import PLazy from 'p-lazy'`](https://github.com/sindresorhus/p-lazy): Create a lazy promise that defers execution until `.then()` or `.catch()` is called
- `limit` -> [`import pLimit from 'p-limit'`](https://github.com/sindresorhus/p-limit): Run multiple promise-returning &amp; async functions with limited concurrency
- `locate` -> [`import pLocate from 'p-locate'`](https://github.com/sindresorhus/p-locate): Get the first fulfilled promise that satisfies the provided testing function
- `log` -> [`import pLog from 'p-log'`](https://github.com/sindresorhus/p-log): Log the value/error of a promise
- `loudRejection` -> [`import loudRejection from 'loud-rejection'`](https://github.com/sindresorhus/loud-rejection): Make unhandled promise rejections fail loudly instead of the default silent fail
- `map` -> [`import pMap from 'p-map')`](https://github.com/sindresorhus/p-map): Map over promises concurrently
- `mapSeries` -> [`import pMapSeries from 'p-map-series'`](https://github.com/sindresorhus/p-map-series): Map over promises serially
- `memoize` -> [`import pMemoize from 'p-memoize'`](https://github.com/sindresorhus/p-memoize): Memoize promise-returning &amp; async functions
- `minDelay` -> [`import pMinDelay from 'p-min-delay'`](https://github.com/sindresorhus/p-min-delay): Delay a promise a minimum amount of time
- `one` -> [`import pOne from 'p-one'`](https://github.com/kevva/p-one): Test whether some promise passes a testing function
- `pify` -> [`import pify from 'pify'`](https://github.com/sindresorhus/pify): Promisify a callback-style function
- `pipe` -> [`import pPipe from 'p-pipe'`](https://github.com/sindresorhus/p-pipe): Compose promise-returning &amp; async functions into a reusable pipeline
- `progress` -> [`import pProgress from 'p-progress'`](https://github.com/sindresorhus/p-progress): Create a promise that reports progress
- `props` -> [`import pProps from 'p-props'`](https://github.com/sindresorhus/p-props): Like `Promise.all()` but for `Map` and `Object`
- `queue` -> [`import PQueue from 'p-queue'`](https://github.com/sindresorhus/p-queue): Promise queue with concurrency control
- `race` -> [`import pRace from 'p-race'`](https://github.com/sindresorhus/p-race): A better `Promise.race()`
- `reduce` -> [`import pReduce from 'p-reduce'`](https://github.com/sindresorhus/p-reduce): Reduce a list of values using promises into a promise for a value
- `reflect` -> [`import pReflect from 'p-reflect'`](https://github.com/sindresorhus/p-reflect): Make a promise always fulfill with its actual fulfillment value or rejection reason
- `retry` -> [`import pRetry from 'p-retry')`](https://github.com/sindresorhus/p-retry): Retry a promise-returning or async function
- `series` -> [`import pSeries from 'p-series'`](https://github.com/sindresorhus/p-series): Run promise-returning &amp; async functions in series
- `settle` -> [`import pSettle from 'p-settle'`](https://github.com/sindresorhus/p-settle): Settle promises concurrently and get their fulfillment value or rejection reason
- `some` -> [`import pSome from 'p-some'`](https://github.com/sindresorhus/p-some): Wait for a specified number of promises to be fulfilled
- `tap` -> [`import pTap from 'p-tap'`](https://github.com/sindresorhus/p-tap): Tap into a promise chain without affecting its value or state
- `throttle` -> [`import pThrottle from 'p-throttle'`](https://github.com/sindresorhus/p-throttle): Throttle promise-returning &amp; async functions
- `time` -> [`import pTime from 'p-time'`](https://github.com/sindresorhus/p-time): Measure the time a promise takes to resolve
- `timeout` -> [`import pTimeout from 'p-timeout'`](https://github.com/sindresorhus/p-timeout): Timeout a promise after a specified amount of time
- `times` -> [`import pTimes from 'p-times'`](https://github.com/sindresorhus/p-times): Run promise-returning &amp; async functions a specific number of times concurrently
- `try` -> [`import pTry from 'p-try')`](https://github.com/sindresorhus/p-try): `Promise#try()` ponyfill - Starts a promise chain
- `waitFor` -> [`import pWaitFor from 'p-wait-for'`](https://github.com/sindresorhus/p-wait-for): Wait for a condition to be true
- `waterfall` -> [`import pWaterfall from 'p-waterfall'`](https://github.com/sindresorhus/p-waterfall): Run promise-returning &amp; async functions in series, each passing its result to the next
- `whilst` -> [`import pWhilst from 'p-whilst'`](https://github.com/sindresorhus/p-whilst): Calls a function repeatedly while a condition returns true and then resolves the promise

## License

MIT
