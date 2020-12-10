import { of, interval, forkJoin } from "rxjs";
import { delay, take } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of("a", "b", "c").pipe(delay(3500));

forkJoin([numeros$, intervalo$, letras$]).subscribe(console.log);
forkJoin({ numeros$, intervalo$, letras$ }).subscribe(console.log);
forkJoin({ num: numeros$, int: intervalo$, let: letras$ }).subscribe(console.log);
