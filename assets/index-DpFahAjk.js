function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Popper-Ctm5oeEf.js","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CKF4anYh.js";async function i(t,r=!0){await t.addInteractor("externalPop",async a=>{const{Popper:o}=await e(()=>import("./Popper-Ctm5oeEf.js"),__vite__mapDeps([0,1]));return new o(a)},r)}export{i as loadExternalPopInteraction};
