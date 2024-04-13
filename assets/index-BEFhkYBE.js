function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-DD8kf0gJ.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/ValueWithRandom-QRDwt-VY.js","assets/AnimationOptions-dYZkkA9i.js","assets/OptionsColor-BM9eQp3A.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B5p0OL-A.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-DD8kf0gJ.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
