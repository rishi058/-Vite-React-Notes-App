function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/GradientUpdater-BbAUmXlb.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css","assets/AnimatableColor-Ctg8MlVq.js","assets/AnimationOptions-CqnKjqNH.js","assets/OptionsColor-Cd26pwu5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CKF4anYh.js";async function i(t,a=!0){await t.addParticleUpdater("gradient",async()=>{const{GradientUpdater:r}=await e(()=>import("./GradientUpdater-BbAUmXlb.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r},a)}export{i as loadGradientUpdater};
