import { KeepAwake, registerRootComponent } from "expo";

import App from "./App";

// console.log(KeepAwake, registerRootComponent, 'ANDY')
// if (__DEV__) {
//   KeepAwake.activate();
// }

registerRootComponent(App);
