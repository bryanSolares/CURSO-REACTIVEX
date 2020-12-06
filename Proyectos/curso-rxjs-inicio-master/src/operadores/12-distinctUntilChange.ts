import { of, from } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";
import { OBSERBABLE } from "../OBSERBABLE";

const numeros$ = of<number | string>(1, 3, 2, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 2, 1, "1", "2");
numeros$.pipe(distinctUntilChanged()).subscribe(OBSERBABLE);

const personajes: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "Megaman" },
  { nombre: "X" },
  { nombre: "Zero" },
  { nombre: "Zero" },
  { nombre: "Dr. Willy" },
  { nombre: "X" },
  { nombre: "Megaman" },
  { nombre: "Zero" },
];

from(personajes)
  .pipe(distinctUntilChanged((e, y) => e.nombre === y.nombre))
  .subscribe(OBSERBABLE);

interface Personaje {
  nombre: string;
}
