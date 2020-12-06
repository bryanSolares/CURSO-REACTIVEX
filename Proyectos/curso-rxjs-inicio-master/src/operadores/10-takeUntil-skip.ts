import { interval, fromEvent } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerHTML = "Detener Timer";
document.querySelector("body").append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, "click");
const clickBtn$ = fromEvent(boton, "click").pipe(
  tap(() => console.log("Antes de operador")),
  skip(1),
  tap(() => console.log("Fin de operador"))
);

counter$
  .pipe(takeUntil(clickBtn$))
  .subscribe({ next: (value) => console.log(value), complete: () => console.log("complete") });
