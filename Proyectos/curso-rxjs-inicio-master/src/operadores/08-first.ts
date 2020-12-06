import { fromEvent } from "rxjs";
import { first, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap(({ clientX, clientY }) => console.log({ clientX, clientY })),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first((event) => event.clientY >= 150)
  )
  .subscribe({ next: (val) => console.log(val), complete: () => console.log("completado") });
