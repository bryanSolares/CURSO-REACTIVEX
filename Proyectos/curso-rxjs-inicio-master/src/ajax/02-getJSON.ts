import { ajax, AjaxError } from "rxjs/ajax";
import { OBSERBABLE } from "../OBSERBABLE";

const url1 = "https://api.github.com/users?per_page=5";
const url2 = "https://httpbin.org/delay/1";
const obs$ = ajax.getJSON(url2, {
  "Content-Type": "application/json",
  "mi-token": "abc123",
});

obs$.subscribe(OBSERBABLE);
