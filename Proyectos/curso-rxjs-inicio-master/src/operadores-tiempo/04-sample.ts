import { fromEvent, interval } from "rxjs";
import { sampleTime, map, sample } from "rxjs/operators";
import { OBSERBABLE } from "../OBSERBABLE";

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, "click");

interval$.pipe(sample(click$)).subscribe(OBSERBABLE);
