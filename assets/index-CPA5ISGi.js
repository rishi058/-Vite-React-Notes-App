import{t as u,d as b}from"./index-B5p0OL-A.js";const v=120,y=.5,h=100,f=3;class r{static init(t){var e;const n=new r,a=t.selector;if(!a)throw new Error("No selector provided");const l=document.querySelector(a);if(!l)throw new Error("No element found for selector");return u.load({element:l,id:a.replace(".","").replace("!",""),options:{fullScreen:{enable:!1},particles:{color:{value:t.color??"!000000"},links:{color:"random",distance:t.minDistance??v,enable:t.connectParticles??!1},move:{enable:!0,speed:t.speed??y},number:{value:t.maxParticles??h},size:{value:{min:1,max:t.sizeVariations??f}}},responsive:(e=t.responsive)==null?void 0:e.map(i=>{var o,c,d,p,m;return{maxWidth:i.breakpoint,options:{particles:{color:{value:(o=i.options)==null?void 0:o.color},links:{distance:(c=i.options)==null?void 0:c.minDistance,enable:(d=i.options)==null?void 0:d.connectParticles},number:{value:t.maxParticles},move:{enable:!0,speed:(p=i.options)==null?void 0:p.speed},size:{value:(m=i.options)==null?void 0:m.sizeVariations}}}}})}}).then(i=>{n._container=i}),n}destroy(){const t=this._container;t==null||t.destroy()}pauseAnimation(){const t=this._container;t==null||t.pause()}resumeAnimation(){const t=this._container;t==null||t.play()}}const _=0,z=0,k=3,w={particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1},g=s=>{const t=(a,l)=>{const e=b(w,l);return s.load({id:a,options:{fullScreen:{enable:!1},detectRetina:e.retina_detect,smooth:!0,interactivity:{detectsOn:e.interactivity.detect_on,events:{onHover:{enable:e.interactivity.events.onhover.enable,mode:e.interactivity.events.onhover.mode},onClick:{enable:e.interactivity.events.onclick.enable,mode:e.interactivity.events.onclick.mode},resize:{enable:e.interactivity.events.resize}},modes:{grab:{distance:e.interactivity.modes.grab.distance,links:{opacity:e.interactivity.modes.grab.line_linked.opacity}},bubble:{distance:e.interactivity.modes.bubble.distance,size:e.interactivity.modes.bubble.size,duration:e.interactivity.modes.bubble.duration,opacity:e.interactivity.modes.bubble.opacity,speed:e.interactivity.modes.bubble.speed},repulse:{distance:e.interactivity.modes.repulse.distance,duration:e.interactivity.modes.repulse.duration},push:{quantity:e.interactivity.modes.push.particles_nb},remove:{quantity:e.interactivity.modes.remove.particles_nb}}},particles:{collisions:{enable:e.particles.move.bounce},number:{value:e.particles.number.value,density:{enable:e.particles.number.density.enable,width:e.particles.number.density.value_area}},color:{value:e.particles.color.value},stroke:{width:e.particles.shape.stroke.width,color:{value:e.particles.shape.stroke.color}},shape:{type:e.particles.shape.type,options:{polygon:{sides:e.particles.shape.polygon.nb_sides},image:{src:e.particles.shape.image.src,width:e.particles.shape.image.width,height:e.particles.shape.image.height}}},opacity:{value:e.particles.opacity.random?{min:e.particles.opacity.anim.enable?e.particles.opacity.anim.opacity_min:_,max:e.particles.opacity.value}:e.particles.opacity.value,animation:{enable:e.particles.opacity.anim.enable,speed:e.particles.opacity.anim.speed,sync:e.particles.opacity.anim.sync}},size:{value:e.particles.size.random?{min:e.particles.size.anim.enable?e.particles.size.anim.size_min:z,max:e.particles.size.value}:e.particles.size.value,animation:{enable:e.particles.size.anim.enable,speed:e.particles.size.anim.speed,sync:e.particles.size.anim.sync}},links:{enable:e.particles.line_linked.enable,distance:e.particles.line_linked.distance,color:e.particles.line_linked.color,opacity:e.particles.line_linked.opacity,width:e.particles.line_linked.width},move:{enable:e.particles.move.enable,speed:e.particles.move.speed/k,direction:e.particles.move.direction,random:e.particles.move.random,straight:e.particles.move.straight,outModes:e.particles.move.out_mode,attract:{enable:e.particles.move.attract.enable,rotate:{x:e.particles.move.attract.rotateX,y:e.particles.move.attract.rotateY}}}}}})};t.load=(a,l,e)=>{s.load({id:a,url:l}).then(i=>{i&&e(i)}).catch(()=>{e(void 0)})},t.setOnClickHandler=a=>{s.setOnClickHandler(a)};const n=s.dom();return{particlesJS:t,pJSDom:n}},x=s=>{const{particlesJS:t,pJSDom:n}=g(s);return window.particlesJS=t,window.pJSDom=n,window.Particles=r,{particlesJS:t,pJSDom:n,Particles:r}};export{x as initPjs};
