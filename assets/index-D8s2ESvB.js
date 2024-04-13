function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SoundsPlugin-BcihY1UA.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-CKF4anYh.js";async function _(o,t=!0){const{SoundsPlugin:a}=await n(()=>import("./SoundsPlugin-BcihY1UA.js").then(i=>i.S),__vite__mapDeps([0,1,2]));await o.addPlugin(new a(o),t)}export{_ as loadSoundsPlugin};
