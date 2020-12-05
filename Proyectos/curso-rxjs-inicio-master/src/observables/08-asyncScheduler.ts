import { asyncScheduler, scheduled } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

// const saludar1 = () => console.log("Hola Mundo");
// const saludar2 = (nombre: string) => console.log(`Hola Mundo ${nombre}`);
// asyncScheduler.schedule(saludar1, 2000);
// asyncScheduler.schedule(saludar2, 2000, "Bryan Solares");

const subscription = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
