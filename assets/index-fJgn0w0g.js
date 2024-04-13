function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C4rSrDL9.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css","assets/index-ksHNv4Nh.js","assets/index-DLlptiEh.js","assets/index-00_zfvvS.js","assets/index-DnOIBctz.js","assets/index-sL6CAlIW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CKF4anYh.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C4rSrDL9.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-ksHNv4Nh.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DLlptiEh.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-00_zfvvS.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DnOIBctz.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-sL6CAlIW.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
