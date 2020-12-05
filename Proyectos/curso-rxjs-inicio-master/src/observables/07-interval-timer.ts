import { interval, timer } from "rxjs";

const observer = {
  next: (value) => console.log(value),
  complete: () => console.log("Complete"),
};

///const interval$ = interval(1000);
//console.log("inicio");
//interval$.subscribe(observer);
//console.log("fin");

//const timer$ = timer(2000);
//const timer$ = timer(2000, 1000);
// const timer$ = timer();
// console.log("inicio");
// timer$.subscribe(observer);
// console.log("fin");

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer$ = timer(hoyEn5);
console.log("inicio");
timer$.subscribe(observer);
console.log("fin");
