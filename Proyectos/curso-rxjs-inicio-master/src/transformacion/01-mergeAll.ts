import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";
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

input$
  .pipe(
    debounceTime<KeyboardEvent>(1000),
    pluck<KeyboardEvent, string>("target", "value"),
    map<string, Observable<GitHubUsersResponse>>((texto) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    mergeAll<GitHubUsersResponse>(),
    pluck<GitHubUsersResponse, GitHubUser[]>("items")
  )
  .subscribe(mostrarUsuarios);
