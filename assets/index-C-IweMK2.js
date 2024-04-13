function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/InteractivityParticleMaker-v60n9_Wl.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B5p0OL-A.js";async function o(t,a=!0){await t.addInteractor("externalParticle",async r=>{const{InteractivityParticleMaker:e}=await i(()=>import("./InteractivityParticleMaker-v60n9_Wl.js"),__vite__mapDeps([0,1,2,3]));return new e(r)},a)}export{o as loadExternalParticleInteraction};
