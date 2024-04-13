function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Repulser-04w-hIb8.js","assets/ValueWithRandom-QRDwt-VY.js","assets/AnimationOptions-dYZkkA9i.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B5p0OL-A.js";async function n(e,t=!0){await e.addInteractor("particlesRepulse",async r=>{const{Repulser:a}=await o(()=>import("./Repulser-04w-hIb8.js"),__vite__mapDeps([0,1,2,3,4,5]));return new a(r)},t)}export{n as loadParticlesRepulseInteraction};
