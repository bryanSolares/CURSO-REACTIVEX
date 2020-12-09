import { interval, fromEvent } from "rxjs";
import { take, exhaustMap } from "rxjs/operators";

const intervarl$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$.pipe(exhaustMap(() => intervarl$)).subscribe(console.log);
