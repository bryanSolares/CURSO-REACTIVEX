import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";
import { of } from "rxjs";

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const atrapaError = (error: AjaxError) => {
  console.warn("Error:", error.message);
  return of([]);
};

// const fetchPromise = fetch(url);
// fetchPromise
//   .then(manejaErrores)
//   .then((response) => response.json())
//   .then((data) => console.log("data:", data))
//   .catch((error) => console.warn("error:", error));

ajax(url)
  //.pipe(map((response) => response.response))
  .pipe(pluck("response"))
  .pipe(catchError(atrapaError))
  .subscribe((users) => console.log("Users:", users));
