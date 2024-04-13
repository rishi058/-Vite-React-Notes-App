function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PoissonInstance-iC_32GKv.js","assets/index-CKF4anYh.js","assets/index-Cdb3OlsM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CKF4anYh.js";class t{constructor(){this.enable=!1,this.dimensions=2,this.radius=0,this.retries=30,this.steps=0}load(i){i&&(i.enable!==void 0&&(this.enable=i.enable),i.dimensions!==void 0&&(this.dimensions=i.dimensions),i.radius!==void 0&&(this.radius=i.radius),i.retries!==void 0&&(this.retries=i.retries))}}class l{constructor(i){this.id="poisson",this._engine=i}async getPlugin(i){const{PoissonInstance:e}=await r(()=>import("./PoissonInstance-iC_32GKv.js"),__vite__mapDeps([0,1,2]));return new e(i,this._engine)}loadOptions(i,e){if(!this.needsPlugin(i)&&!this.needsPlugin(e))return;let s=i.poisson;(s==null?void 0:s.load)===void 0&&(i.poisson=s=new t),s.load(e==null?void 0:e.poisson)}needsPlugin(i){var e;return((e=i==null?void 0:i.poisson)==null?void 0:e.enable)??!1}}export{l as PoissonDiscPlugin};
