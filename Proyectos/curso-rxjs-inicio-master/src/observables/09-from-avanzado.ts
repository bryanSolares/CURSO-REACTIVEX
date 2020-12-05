import { of, from } from "rxjs";

/*
    of = toma argumentos y genera secuencia de valores
    from = crea observable basado en un arreglo, objeto, promesa, iterable, observable, etc
*/

const obs = {
  next: (value) => console.log(value),
  complete: () => console.log("Completado"),
};

// const source1$ = from([1, 2, 3, 4, 5]);
// source1$.subscribe(obs);

// const source2$ = from([1, 2, 3, 4, 5]);
// source2$.subscribe(obs);

// const source3$ = of("Solares");
// source3$.subscribe(obs);

// const source4$ = from("Solares");
// source4$.subscribe(obs);

//const source$ = from(fetch("https://api.github.com/users/klerith"));
///source$.subscribe(obs);
// source$.subscribe(async (response) => {
//   console.log(response.ok);
//   console.log(await response.json());
// });

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();
// for (const id of miIterable) {
//   console.log(id);
// }

from(miIterable).subscribe(obs);
