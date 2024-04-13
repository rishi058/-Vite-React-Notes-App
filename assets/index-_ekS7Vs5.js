function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OrbitUpdater-BVnDC_4N.js","assets/ValueWithRandom-QRDwt-VY.js","assets/AnimationOptions-dYZkkA9i.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/OptionsColor-BM9eQp3A.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B5p0OL-A.js";async function d(t,r=!0){await t.addParticleUpdater("orbit",async a=>{const{OrbitUpdater:e}=await i(()=>import("./OrbitUpdater-BVnDC_4N.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e(a)},r)}export{d as loadOrbitUpdater};
