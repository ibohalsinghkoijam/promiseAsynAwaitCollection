// https://nuget.qite.be/feeds/NPM/rxjs/5.5.11

//JP
//fun fact: `async`/`await` will turn whatever you await into a promise:

// Results in ‘hi’ being written to the console twice.

/* 
This is helpful in a situation where you’re calling a generic thing 
and some of those things return a promise and some of them don’t. 
You’ll see what I mean in a significantly updated version of the 
StorageService that’s coming out in the SakuraApi.com website code and 
can be refactored into the ILB. It will be the StorageService 
we use for Cord
*/
const rxjs = require('rxjs');

const o = rxjs
  .Observable
  .fromPromise((async () => {
    return await 'hi';
  })());
o.subscribe((r) => console.log(r));

const p = rxjs
  .Observable
  .fromPromise((async () => {
    return await Promise.resolve('hi');
  })());
p.subscribe((r) => console.log(r));