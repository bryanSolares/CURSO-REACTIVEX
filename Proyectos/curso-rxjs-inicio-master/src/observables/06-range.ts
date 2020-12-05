import { asyncScheduler, of, range } from "rxjs";

const obs1$ = range(1, 5);
const obs2$ = range(1, 5, asyncScheduler);

console.log("inicio");
obs1$.subscribe(console.log);
console.log("fin");

console.log("inicio");
obs2$.subscribe(console.log);
console.log("fin");
