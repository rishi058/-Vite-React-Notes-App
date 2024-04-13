function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-C9s-Ummk.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/ValueWithRandom-QRDwt-VY.js","assets/AnimationOptions-dYZkkA9i.js","assets/OptionsColor-BM9eQp3A.js","assets/OptionsUtils-KL6aO5xk.js","assets/AnimatableColor-Crycc3PH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B5p0OL-A.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-C9s-Ummk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
