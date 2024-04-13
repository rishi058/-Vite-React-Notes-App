function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportVideoPlugin-B0YOzkn3.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-B5p0OL-A.js";async function _(o,t=!0){const{ExportVideoPlugin:i}=await a(()=>import("./ExportVideoPlugin-B0YOzkn3.js"),__vite__mapDeps([0,1,2]));await o.addPlugin(new i(o),t)}export{_ as loadExportVideoPlugin};
