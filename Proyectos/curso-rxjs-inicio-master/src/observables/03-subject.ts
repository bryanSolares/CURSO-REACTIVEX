import { Observable, Observer, Subject } from "rxjs";

let observer: Observer<any> = {
  next: (value) => console.log(value),
  error: (error) => console.warn(error),
  complete: () => console.info("Completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => {
    subs.next(Math.floor(Math.random() * 100));
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log("Intervalo destruido");
  };
});

/*
    1 - Casteo Múltiple
    2 - Es un observable
    3 - next, error y complete
*/
const subject$ = new Subject<number>();
const intervalSubjec = intervalo$.subscribe(subject$);

//const subs1 = intervalo$.subscribe(console.log);
//const subs2 = intervalo$.subscribe(console.log);
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  intervalSubjec.unsubscribe();
}, 3500);
