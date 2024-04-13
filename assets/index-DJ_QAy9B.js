function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportVideoPlugin-1DC_2vo4.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-CKF4anYh.js";async function _(o,t=!0){const{ExportVideoPlugin:i}=await a(()=>import("./ExportVideoPlugin-1DC_2vo4.js"),__vite__mapDeps([0,1,2]));await o.addPlugin(new i(o),t)}export{_ as loadExportVideoPlugin};
