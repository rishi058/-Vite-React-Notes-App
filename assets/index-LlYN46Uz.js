function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PoissonDiscPlugin-0g2-T0Z8.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-CKF4anYh.js";async function n(i,o=!0){const{PoissonDiscPlugin:t}=await a(()=>import("./PoissonDiscPlugin-0g2-T0Z8.js"),__vite__mapDeps([0,1,2]));await i.addPlugin(new t(i),o)}export{n as loadPoissonDiscPlugin};
