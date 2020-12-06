import { of, from } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";
import { OBSERBABLE } from "../OBSERBABLE";

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

from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(OBSERBABLE);

interface Personaje {
  nombre: string;
}
