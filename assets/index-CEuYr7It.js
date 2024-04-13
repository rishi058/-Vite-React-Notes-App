function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RoundedRectDrawer-BmGY1AVt.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B5p0OL-A.js";async function r(e,t=!0){const{RoundedRectDrawer:a}=await o(()=>import("./RoundedRectDrawer-BmGY1AVt.js"),__vite__mapDeps([0,1,2]));await e.addShape("rounded-rect",new a,t)}export{r as loadRoundedRectShape};
