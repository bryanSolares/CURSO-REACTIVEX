import { fromEvent, asyncScheduler } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged, throttleTime } from "rxjs/operators";
import { OBSERBABLE } from "../OBSERBABLE";

const clicks$ = fromEvent(document, "click");
clicks$.pipe(throttleTime(3000)).subscribe(OBSERBABLE);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");
input$
  .pipe(
    throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe(OBSERBABLE);
