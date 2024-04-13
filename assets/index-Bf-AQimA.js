function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PathDrawer-Ub0RYNPX.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CKF4anYh.js";async function _(a,t=!0){const{PathDrawer:e}=await o(()=>import("./PathDrawer-Ub0RYNPX.js"),__vite__mapDeps([0,1,2]));await a.addShape("path",new e,t)}export{_ as loadPathShape};
