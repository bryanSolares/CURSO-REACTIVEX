import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5).pipe(tap(console.log), take(3));

numeros$.subscribe(
  (val) => console.log(val),
  (error) => console.log(error),
  () => console.log("completado")
);
