import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150) // todo no pasa el último argumento
    takeWhile(({ y }) => y <= 150, true) // todo para el último argumento
  )
  .subscribe({ next: (value) => console.log(value), complete: () => console.log("completado") });
