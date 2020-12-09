import { fromEvent, of } from "rxjs";
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// helper
const peticionHTTPLogin = (user) =>
  ajax.post("https://reqres.in/api/login?delay=1", user).pipe(
    pluck("response", "token"),
    catchError((error) => of(""))
  );

// html
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPassword = document.createElement("input");
const submitBtn = document.createElement("button");

// configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPassword.type = "password";
inputPassword.placeholder = "Password";
inputPassword.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

form.append(inputEmail, inputPassword, submitBtn);
document.querySelector("body").append(form);

// Streams
const submitForm$ = fromEvent(form, "submit").pipe(
  tap((event) => event.preventDefault()),
  map((event) => ({ email: event.target[0].value, password: event.target[1].value })),
  //mergeMap(peticionHTTPLogin)
  //switchMap(peticionHTTPLogin)
  exhaustMap(peticionHTTPLogin)
);

submitForm$.subscribe((response) => console.log(response));
