import { Observable, Observer } from "rxjs";

let observer: Observer<any> = {
  next: (value) => console.log("siguiente", value),
  error: (error) => console.warn("error", error),
  complete: () => console.log("Completado"),
};

// const obs$ = Observable.create()
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  ///const a = undefined;
  ///a.nombre = "fernando";
  subs.next("Hola");
  subs.next("Mundo");
  ///subs.error("error ocurrido");
  subs.complete();
});

obs$.subscribe(
  (value) => console.log(value),
  (error) => console.error(error, "Ha ocurrido un error"),
  () => console.log("termino")
);

obs$.subscribe(observer);
