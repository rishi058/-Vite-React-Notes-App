import{O as o,I as i}from"./index-B5p0OL-A.js";class r{constructor(){this._createDirs=()=>{this.dirsList=[];for(let e=0;e<360;e+=360/this.options.sides){const t=this.options.angle+e;this.dirsList.push(o.create(Math.cos(t*Math.PI/180),Math.sin(t*Math.PI/180)))}},this.dirsList=[],this.options={sides:6,turnSteps:20,angle:30}}generate(e){const{sides:t}=this.options;e.hexStep===void 0&&(e.hexStep=0),e.hexDirection===void 0&&(e.hexDirection=t===6?(i()*3|0)*2:i()*t|0),e.hexSpeed===void 0&&(e.hexSpeed=e.velocity.length),e.hexStep%this.options.turnSteps===0&&(e.hexDirection=i()>.5?(e.hexDirection+1)%t:(e.hexDirection+t-1)%t),e.velocity.x=0,e.velocity.y=0,e.hexStep++;const s=this.dirsList[e.hexDirection];return o.create(s.x*e.hexSpeed,s.y*e.hexSpeed)}init(e){const t=e.actualOptions.particles.move.path.options;this.options.sides=t.sides>0?t.sides:6,this.options.angle=t.angle??30,this.options.turnSteps=t.turnSteps>=0?t.turnSteps:20,this._createDirs()}reset(e){delete e.hexStep,delete e.hexDirection,delete e.hexSpeed}update(){}}export{r as PolygonPathGenerator};
