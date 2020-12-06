import { fromEvent } from "rxjs";
import { auditTime, tap, map } from "rxjs/operators";
import { OBSERBABLE } from "../OBSERBABLE";

const click$ = fromEvent<MouseEvent>(document, "click");
click$
  .pipe(
    map(({ x }) => ({ x })),
    tap((x) => console.log("valor: ", x)),
    auditTime(2000)
  )
  .subscribe(OBSERBABLE);
