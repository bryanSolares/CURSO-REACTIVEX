import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, mergeAll, pluck, mergeMap, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GitHubUser } from "../interfaces/github-user.interface";
import { GitHubUsersResponse } from "../interfaces/github-users.interface";
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

const mostrarUsuarios = (users: GitHubUser[]) => {
  orderList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = user.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = user.html_url;
    anchor.text = "Vér Página";
    anchor.target = "_blank";

    li.append(img);
    li.append(user.login + " ");
    li.append(anchor);
    orderList.append(li);
  });
};

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, string>("target", "value"),
  mergeMap<string, Observable<GitHubUsersResponse>>((texto) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
  ),
  pluck<GitHubUsersResponse, GitHubUser[]>("items")
);
//.subscribe(mostrarUsuarios);

const url = "https://httpbin.org/delay/1?arg=";
input$
  .pipe(
    pluck("target", "value"),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
