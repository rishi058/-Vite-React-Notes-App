function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-C4zElFk2.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CKF4anYh.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-C4zElFk2.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
