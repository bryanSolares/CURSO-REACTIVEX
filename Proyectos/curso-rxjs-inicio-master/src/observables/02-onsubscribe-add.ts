import { Observable, Observer } from "rxjs";

let observer: Observer<any> = {
  next: (value) => console.log(value),
  error: (error) => console.warn(error),
  complete: () => console.info("Completado"),
};

const intervalo$ = new Observable((subs) => {
  let contador = 1;
  const interval = setInterval(() => {
    subs.next(contador);
    contador++;
    ///console.log(contador);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

const susbcription = intervalo$.subscribe(observer);
const susbcription2 = intervalo$.subscribe(observer);
const susbcription3 = intervalo$.subscribe(observer);

susbcription.add(susbcription2).add(susbcription3);
setTimeout(() => {
  susbcription.unsubscribe();
  //susbcription2.unsubscribe();
  ///susbcription3.unsubscribe();
  console.log("completado timeout");
}, 3000);
