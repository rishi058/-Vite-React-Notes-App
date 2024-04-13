function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportImagePlugin-BW5AZwpd.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B5p0OL-A.js";async function _(t,a=!0){const{ExportImagePlugin:o}=await i(()=>import("./ExportImagePlugin-BW5AZwpd.js"),__vite__mapDeps([0,1,2]));await t.addPlugin(new o(t),a)}export{_ as loadExportImagePlugin};
