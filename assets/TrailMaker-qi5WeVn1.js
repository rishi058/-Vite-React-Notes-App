import{Trail as p}from"./index-h-xZEA55.js";import{E as h}from"./ExternalInteractorBase-CIi3zRdK.js";import{o as f,S as u}from"./index-B5p0OL-A.js";const m="trail";class O extends h{constructor(t){super(t),this._delay=0}clear(){}init(){}interact(t){var r,c,l,d;const i=this.container,{interactivity:o}=i;if(!i.retina.reduceFactor)return;const e=i.actualOptions,s=e.interactivity.modes.trail;if(!s)return;const n=s.delay*f/this.container.retina.reduceFactor;if(this._delay<n&&(this._delay+=t.value),this._delay<n)return;const y=!(s.pauseOnStop&&(o.mouse.position===this._lastPosition||((r=o.mouse.position)==null?void 0:r.x)===((c=this._lastPosition)==null?void 0:c.x)&&((l=o.mouse.position)==null?void 0:l.y)===((d=this._lastPosition)==null?void 0:d.y))),a=i.interactivity.mouse.position;a?this._lastPosition={...a}:delete this._lastPosition,y&&i.particles.push(s.quantity,i.interactivity.mouse,s.particles),this._delay-=n}isEnabled(t){const i=this.container,o=i.actualOptions,e=i.interactivity.mouse,s=((t==null?void 0:t.interactivity)??o.interactivity).events;return e.clicking&&e.inside&&!!e.position&&u(m,s.onClick.mode)||e.inside&&!!e.position&&u(m,s.onHover.mode)}loadModeOptions(t,...i){t.trail||(t.trail=new p);for(const o of i)t.trail.load(o==null?void 0:o.trail)}reset(){}}export{O as TrailMaker};
