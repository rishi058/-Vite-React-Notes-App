function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/InfectionPlugin-DEqcZqBg.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/OptionsColor-BM9eQp3A.js","assets/ParticlesInfecter-D1zCl3Rj.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-B5p0OL-A.js";async function c(t,i=!0){const{InfectionPlugin:a}=await n(()=>import("./InfectionPlugin-DEqcZqBg.js"),__vite__mapDeps([0,1,2,3])),o=new a;await t.addPlugin(o,i),await t.addInteractor("particlesInfection",async r=>{const{ParticlesInfecter:e}=await n(()=>import("./ParticlesInfecter-D1zCl3Rj.js"),__vite__mapDeps([4,5,1,2]));return new e(r)},i)}export{c as loadInfectionPlugin};
