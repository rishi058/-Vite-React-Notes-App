function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SpadeDrawer-DwuuFUI5.js","assets/Utils-7xW-ZCmj.js","assets/HeartDrawer-BxtJS7ek.js","assets/DiamondDrawer-Mvs5XolR.js","assets/ClubDrawer-DFRN09g7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as d}from"./index-B5p0OL-A.js";async function e(a,t=!0){const{SpadeDrawer:_}=await d(()=>import("./SpadeDrawer-DwuuFUI5.js"),__vite__mapDeps([0,1])),{HeartDrawer:i}=await d(()=>import("./HeartDrawer-BxtJS7ek.js"),__vite__mapDeps([2,1])),{DiamondDrawer:r}=await d(()=>import("./DiamondDrawer-Mvs5XolR.js"),__vite__mapDeps([3,1])),{ClubDrawer:o}=await d(()=>import("./ClubDrawer-DFRN09g7.js"),__vite__mapDeps([4,1]));await a.addShape(["spade","spades"],new _,t),await a.addShape(["heart","hearts"],new i,t),await a.addShape(["diamond","diamonds"],new r,t),await a.addShape(["club","clubs"],new o,t)}export{e as loadCardsShape};
