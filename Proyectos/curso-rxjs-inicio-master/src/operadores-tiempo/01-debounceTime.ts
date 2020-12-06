import { fromEvent, from } from "rxjs";
import { debounceTime, map, pluck, distinctUntilChanged } from "rxjs/operators";
import { OBSERBABLE } from "../OBSERBABLE";

const clicks$ = fromEvent(document, "click");
clicks$.pipe(debounceTime(3000)).subscribe(OBSERBABLE);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");
input$.pipe(debounceTime(1000), pluck("target", "value"), distinctUntilChanged()).subscribe(OBSERBABLE);
