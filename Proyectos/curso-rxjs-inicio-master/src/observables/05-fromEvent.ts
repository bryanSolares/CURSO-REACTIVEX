import { fromEvent } from "rxjs";

/*
  Eventos del DOM
 */

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

src1$.subscribe((event) => {
  console.log(event);
});

src2$.subscribe((event) => {
  console.log(event);
});
