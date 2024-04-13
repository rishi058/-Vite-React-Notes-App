function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-CrEPGxVi.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/OptionsColor-BM9eQp3A.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B5p0OL-A.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-CrEPGxVi.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
