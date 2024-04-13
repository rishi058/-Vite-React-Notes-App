function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/GradientUpdater-D2qL3jsd.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/AnimatableColor-Crycc3PH.js","assets/AnimationOptions-dYZkkA9i.js","assets/OptionsColor-BM9eQp3A.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-B5p0OL-A.js";async function i(t,a=!0){await t.addParticleUpdater("gradient",async()=>{const{GradientUpdater:r}=await e(()=>import("./GradientUpdater-D2qL3jsd.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r},a)}export{i as loadGradientUpdater};
