import { ajax, AjaxError } from "rxjs/ajax";
import { OBSERBABLE } from "../OBSERBABLE";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";

const url1 = "https://api.github.com/users?per_page=5";
const url2 = "https://httpbin.org/delay/1xxx";

const manejaError = (error: AjaxError) => {
  console.warn("error:", error.message);
  return of([{ ok: false, users: [] }]);
};

const obs1$ = ajax.getJSON(url2);
const obs2$ = ajax(url2);

//obs1$.pipe(catchError(manejaError)). subscribe(OBSERBABLE);
//obs2$.pipe(catchError(manejaError)).subscribe(OBSERBABLE);
obs1$./*pipe(catchError(manejaError)).*/ subscribe(OBSERBABLE);
obs1$.pipe(catchError(manejaError)).subscribe(OBSERBABLE);
