function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersCanvasShapeGenerator-Ck8w-lHm.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/EmitterShapeBase-4KcS34Iy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B5p0OL-A.js";async function s(e,r=!0){var t;const a=e,{EmittersCanvasShapeGenerator:o}=await i(()=>import("./EmittersCanvasShapeGenerator-Ck8w-lHm.js"),__vite__mapDeps([0,1,2,3]));(t=a.addEmitterShapeGenerator)==null||t.call(a,"canvas",new o),await a.refresh(r)}export{s as loadEmittersShapeCanvas};
