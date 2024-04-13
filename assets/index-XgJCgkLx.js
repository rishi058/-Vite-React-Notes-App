function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-C133Yrmj.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css","assets/ValueWithRandom-C8gtC9b7.js","assets/AnimationOptions-CqnKjqNH.js","assets/OptionsColor-Cd26pwu5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CKF4anYh.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-C133Yrmj.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
