function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPathShapeGenerator-C4tgITIN.js","assets/index-B5p0OL-A.js","assets/index-Cdb3OlsM.css","assets/EmitterShapeBase-4KcS34Iy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-B5p0OL-A.js";async function h(e,r=!0){var a;const t=e,{EmittersPathShapeGenerator:o}=await i(()=>import("./EmittersPathShapeGenerator-C4tgITIN.js"),__vite__mapDeps([0,1,2,3]));(a=t.addEmitterShapeGenerator)==null||a.call(t,"path",new o),await t.refresh(r)}export{h as loadEmittersShapePath};
