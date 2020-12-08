import { ajax } from "rxjs/ajax";
import { OBSERBABLE } from "../OBSERBABLE";

const url = "https://httpbin.org/delay/1";
ajax.get(url, {}).subscribe(OBSERBABLE);
ajax.post(url, { id: 1, nombre: "Bryan Solares" }, { "mi-token": "abc123" }).subscribe(OBSERBABLE);
ajax.put(url, { id: 1, nombre: "Bryan Solares" }, { "mi-token": "abc123" }).subscribe(OBSERBABLE);
ajax.delete(url, { "mi-token": "abc123" }).subscribe(OBSERBABLE);

ajax({ url, method: "POST", headers: { "mi-token": "abc123" }, body: { id: 1, nombre: "Solares" } }).subscribe(
  OBSERBABLE
);

ajax({ url, method: "DELETE", headers: { "mi-token": "abc123" }, body: { id: 1, nombre: "Solares" } }).subscribe(
  OBSERBABLE
);
