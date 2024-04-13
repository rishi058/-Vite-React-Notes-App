function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CogDrawer-CETgQULJ.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-B5p0OL-A.js";async function _(a,o=!0){const{CogDrawer:t}=await e(()=>import("./CogDrawer-CETgQULJ.js"),__vite__mapDeps([0,1,2]));await a.addShape("cog",new t,o)}export{_ as loadCogShape};
