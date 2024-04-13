function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DanBsDUQ.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css","assets/OptionsColor-Cd26pwu5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CKF4anYh.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-DanBsDUQ.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
