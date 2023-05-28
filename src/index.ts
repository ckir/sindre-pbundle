import pAll from 'p-all';
import pAny from 'p-any';
import pBreak from 'p-break';
import PCancelable from 'p-cancelable';
import pCatchIf from 'p-catch-if';
import pDebounce from 'p-debounce';
import pDefer from 'p-defer';
import delay from 'delay';
import pDoWhilst from 'p-do-whilst';
import pEachSeries from 'p-each-series';
import { pEvent } from 'p-event';
import pEvery from 'p-every';
import pFilter from 'p-filter';
import pForever from 'p-forever';
import hardRejection from 'hard-rejection';
import pIf from 'p-if';
import pImmediate from 'p-immediate';
import isPromise from 'p-is-promise';
import PLazy from 'p-lazy';
import pLimit from 'p-limit';
import pLocate from 'p-locate';
import pLog from 'p-log';
import loudRejection from 'loud-rejection';
import pMap from 'p-map';
import pMapSeries from 'p-map-series';
import pMemoize from 'p-memoize';
import pMinDelay from 'p-min-delay';
import pOne from 'p-one';
import pify from 'pify';
import pPipe from 'p-pipe';
import pProgress from 'p-progress';
import pProps from 'p-props';
import PQueue from 'p-queue';
import pRace from 'p-race';
import pReduce from 'p-reduce';
import pReflect from 'p-reflect';
import pRetry from 'p-retry';
import pSeries from 'p-series';
import pSettle from 'p-settle';
import pSome from 'p-some';
import pTap from 'p-tap';
import pThrottle from 'p-throttle';
import pTime from 'p-time';
import pTimeout from 'p-timeout';
import pTimes from 'p-times';
import pTry from 'p-try';
import pWaitFor from 'p-wait-for';
import pWaterfall from 'p-waterfall';
import pWhilst from 'p-whilst';

const p:object  = {
    all: pAll,
    any: pAny,
    break: pBreak,
    cancelable: PCancelable,
    catchIf: pCatchIf,
    debounce: pDebounce,
    defer: pDefer,
    delay: delay,
    doWhilst: pDoWhilst,
    eachSeries: pEachSeries,
    event: pEvent,
    every: pEvery,
    filter: pFilter,
    forever: pForever,
    hardRejection: hardRejection,
    if: pIf,
    immediate: pImmediate,
    isPromise: isPromise,
    lazy: PLazy,
    limit: pLimit,
    locate: pLocate,
    log: pLog,
    loudRejection: loudRejection,
    map: pMap,
    mapSeries: pMapSeries,
    memoize: pMemoize,
    minDelay: pMinDelay,
    one: pOne,
    pify: pify,
    pipe: pPipe,
    progress: pProgress,
    props: pProps,
    queue: PQueue,
    race: pRace,
    reduce: pReduce,
    reflect: pReflect,
    retry: pRetry,
    series: pSeries,
    settle: pSettle,
    some: pSome,
    tap: pTap,
    throttle: pThrottle,
    time: pTime,
    timeout: pTimeout,
    times: pTimes,
    try: pTry,
    waitFor: pWaitFor,
    waterfall: pWaterfall,
    whilst: pWhilst
};

export default p
