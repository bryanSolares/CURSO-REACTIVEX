import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";
const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_USER = "bryansolares";

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/reposss`).pipe(catchError((error) => of({ error, data: [] }))),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
  .pipe(catchError((error) => of(error.message)))
  .subscribe(console.log);
