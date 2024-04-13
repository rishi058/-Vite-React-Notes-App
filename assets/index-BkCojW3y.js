function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-gxylRO0L.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/index-ywVQQ75K.js","assets/index-tKurW_eB.js","assets/index-CqCCjpLs.js","assets/index-ZDY632yG.js","assets/index-Fq21M_jH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B5p0OL-A.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-gxylRO0L.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-ywVQQ75K.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-tKurW_eB.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CqCCjpLs.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-ZDY632yG.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Fq21M_jH.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
