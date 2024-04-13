function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OrbitUpdater-WaY89jZY.js","assets/ValueWithRandom-C8gtC9b7.js","assets/AnimationOptions-CqnKjqNH.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css","assets/OptionsColor-Cd26pwu5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CKF4anYh.js";async function d(t,r=!0){await t.addParticleUpdater("orbit",async a=>{const{OrbitUpdater:e}=await i(()=>import("./OrbitUpdater-WaY89jZY.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e(a)},r)}export{d as loadOrbitUpdater};
