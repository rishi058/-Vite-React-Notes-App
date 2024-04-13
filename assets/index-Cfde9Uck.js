function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportJSONPlugin-DQUEzAvM.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CKF4anYh.js";async function _(t,o=!0){const{ExportJSONPlugin:a}=await i(()=>import("./ExportJSONPlugin-DQUEzAvM.js"),__vite__mapDeps([0,1,2]));await t.addPlugin(new a(t),o)}export{_ as loadExportJSONPlugin};
