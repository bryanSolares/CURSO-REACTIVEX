import { fromEvent } from "rxjs";
import { sampleTime, map } from "rxjs/operators";
import { OBSERBABLE } from "../OBSERBABLE";

const click$ = fromEvent<MouseEvent>(document, "click");
click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    sampleTime(2000)
  )
  .subscribe(OBSERBABLE);
