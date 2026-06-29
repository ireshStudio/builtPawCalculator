(function(){var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,s=Object.prototype,c=Array.prototype,l=Object.getPrototypeOf,u=Object.isExtensible,d=()=>{};function f(e){return e()}function p(e){for(var t=0;t<e.length;t++)e[t]()}function m(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var h=1024,g=2048,_=4096,v=8192,y=16384,b=32768,x=1<<25,S=65536,C=1<<19,w=1<<20,T=1<<25,E=65536,ee=1<<21,te=1<<22,ne=1<<23,D=Symbol(`$state`),re=Symbol(`legacy props`),ie=Symbol(``),ae=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},oe=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`);function se(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function ce(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function le(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function ue(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function de(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function fe(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function pe(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function me(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function he(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function ge(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function _e(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function ve(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var ye={},O=Symbol(),be=`http://www.w3.org/1999/xhtml`;function xe(){console.warn(`https://svelte.dev/e/derived_inert`)}function Se(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function Ce(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function we(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var k=!1;function Te(e){k=e}var A;function Ee(e){if(e===null)throw Se(),ye;return A=e}function De(){return Ee(tn(A))}function j(e){if(k){if(tn(A)!==null)throw Se(),ye;A=e}}function Oe(e=1){if(k){for(var t=e,n=A;t--;)n=tn(n);A=n}}function ke(e=!0){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else (r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=tn(n);e&&n.remove(),n=i}}function Ae(e){if(!e||e.nodeType!==8)throw Se(),ye;return e.data}function je(e){return e===this.v}function Me(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Ne(e){return!Me(e,this.v)}var Pe=!1,Fe=!1;function Ie(){Fe=!0}var M=null;function Le(e){M=e}function Re(e,t=!1,n){M={p:M,i:!1,c:null,e:null,s:e,x:null,r:U,l:Fe&&!t?{s:null,u:null,$:[]}:null}}function ze(e){var t=M,n=t.e;if(n!==null){t.e=null;for(var r of n)gn(r)}return e!==void 0&&(t.x=e),t.i=!0,M=t.p,e??{}}function Be(){return!Fe||M!==null&&M.l===null}var Ve=[];function He(){var e=Ve;Ve=[],p(e)}function Ue(e){if(Ve.length===0&&!nt){var t=Ve;queueMicrotask(()=>{t===Ve&&He()})}Ve.push(e)}function We(){for(;Ve.length>0;)He()}function Ge(e){var t=U;if(t===null)return H.f|=ne,e;if(!(t.f&32768)&&!(t.f&4))throw e;Ke(e,t)}function Ke(e,t){for(;t!==null;){if(t.f&128){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}var qe=~(g|_|h);function N(e,t){e.f=e.f&qe|t}function Je(e){e.f&512||e.deps===null?N(e,h):N(e,_)}function Ye(e){if(e!==null)for(let t of e)!(t.f&2)||!(t.f&65536)||(t.f^=E,Ye(t.deps))}function Xe(e,t,n){e.f&2048?t.add(e):e.f&4096&&n.add(e),Ye(e.deps),N(e,h)}var Ze=!1,Qe=!1;function $e(e){var t=Qe;try{return Qe=!1,[e(),Qe]}finally{Qe=t}}var et=new Set,P=null,F=null,tt=null,nt=!1,rt=!1,it=null,at=null,ot=0,st=1,ct=class e{id=st++;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=new Set;#r=new Map;#i=new Map;#a=null;#o=[];#s=[];#c=new Set;#l=new Set;#u=new Map;#d=new Set;is_fork=!1;#f=!1;#p=new Set;#m(){return this.is_fork||this.#i.size>0}#h(){for(let n of this.#p)for(let r of n.#i.keys()){for(var e=!1,t=r;t.parent!==null;){if(this.#u.has(t)){e=!0;break}t=t.parent}if(!e)return!0}return!1}skip_effect(e){this.#u.has(e)||this.#u.set(e,{d:[],m:[]}),this.#d.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#u.get(e);if(n){this.#u.delete(e);for(var r of n.d)N(r,g),t(r);for(r of n.m)N(r,_),t(r)}this.#d.add(e)}#g(){if(ot++>1e3&&(et.delete(this),ut()),!this.#m()){for(let e of this.#c)this.#l.delete(e),N(e,g),this.schedule(e);for(let e of this.#l)N(e,_),this.schedule(e)}let t=this.#o;this.#o=[],this.apply();var n=it=[],r=[],i=at=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw _t(e),t}if(P=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(it=null,at=null,this.#m()||this.#h()){this.#v(r),this.#v(n);for(let[e,t]of this.#u)gt(e,t)}else{this.#r.size===0&&et.delete(this),this.#c.clear(),this.#l.clear();for(let e of this.#e)e(this);this.#e.clear(),ft(r),ft(n),this.#a?.resolve()}var o=P;if(this.#o.length>0){let e=o??=this;e.#o.push(...this.#o.filter(t=>!e.#o.includes(t)))}o!==null&&(et.add(o),o.#g()),Pe&&!et.has(this)&&this.#y()}#_(e,t,n){e.f^=h;for(var r=e.first;r!==null;){var i=r.f,a=(i&96)!=0;if(!(a&&i&1024||i&8192||this.#u.has(r))&&r.fn!==null){a?r.f^=h:i&4?t.push(r):Pe&&i&16777224?n.push(r):Xn(r)&&(i&16&&this.#l.add(r),tr(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(e){for(var t=0;t<e.length;t+=1)Xe(e[t],this.#c,this.#l)}capture(e,t,n=!1){e.v!==O&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&8388608||(this.current.set(e,[t,n]),F?.set(e,t)),this.is_fork||(e.v=t)}activate(){P=this}deactivate(){P=null,F=null}flush(){try{rt=!0,P=this,this.#g()}finally{ot=0,tt=null,it=null,at=null,rt=!1,P=null,F=null,Ft.clear()}}discard(){for(let e of this.#t)e(this);this.#t.clear(),this.#n.clear(),et.delete(this)}register_created_effect(e){this.#s.push(e)}#y(){for(let l of et){var e=l.id<this.id,t=[];for(let[r,[i,a]]of this.current){if(l.current.has(r)){var n=l.current.get(r)[0];if(e&&i!==n)l.current.set(r,[i,a]);else continue}t.push(r)}var r=[...l.current.keys()].filter(e=>!this.current.has(e));if(r.length===0)e&&l.discard();else if(t.length>0){if(e)for(let e of this.#d)l.unskip_effect(e,e=>{e.f&4194320?l.schedule(e):l.#v([e])});l.activate();var i=new Set,a=new Map;for(var o of t)pt(o,r,i,a);a=new Map;var s=[...l.current.keys()].filter(e=>this.current.has(e)?this.current.get(e)[0]!==e:!0);for(let e of this.#s)!(e.f&155648)&&mt(e,s,a)&&(e.f&4194320?(N(e,g),l.schedule(e)):l.#c.add(e));if(l.#o.length>0){l.apply();for(var c of l.#o)l.#_(c,[],[]);l.#o=[]}l.deactivate()}}for(let e of et)e.#p.has(this)&&(e.#p.delete(this),e.#p.size===0&&!e.#m()&&(e.activate(),e.#g()))}increment(e,t){let n=this.#r.get(t)??0;if(this.#r.set(t,n+1),e){let e=this.#i.get(t)??0;this.#i.set(t,e+1)}}decrement(e,t,n){let r=this.#r.get(t)??0;if(r===1?this.#r.delete(t):this.#r.set(t,r-1),e){let e=this.#i.get(t)??0;e===1?this.#i.delete(t):this.#i.set(t,e-1)}this.#f||n||(this.#f=!0,Ue(()=>{this.#f=!1,this.flush()}))}transfer_effects(e,t){for(let t of e)this.#c.add(t);for(let e of t)this.#l.add(e);e.clear(),t.clear()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}on_fork_commit(e){this.#n.add(e)}run_fork_commit_callbacks(){for(let e of this.#n)e(this);this.#n.clear()}settled(){return(this.#a??=m()).promise}static ensure(){if(P===null){let t=P=new e;rt||(et.add(P),nt||Ue(()=>{P===t&&t.flush()}))}return P}apply(){if(!Pe||!this.is_fork&&et.size===1){F=null;return}F=new Map;for(let[e,[t]]of this.current)F.set(e,t);for(let n of et)if(!(n===this||n.is_fork)){var e=!1,t=!1;if(n.id<this.id)for(let[r,[,i]]of n.current)i||(e||=this.current.has(r),t||=!this.current.has(r));if(e&&t)this.#p.add(n);else for(let[e,t]of n.previous)F.has(e)||F.set(e,t)}}schedule(e){if(tt=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(it!==null&&t===U&&(Pe||(H===null||!(H.f&2))&&!Ze))return;if(n&96){if(!(n&1024))return;t.f^=h}}this.#o.push(t)}};function lt(e){var t=nt;nt=!0;try{var n;for(e&&(P!==null&&!P.is_fork&&P.flush(),n=e());;){if(We(),P===null)return n;P.flush()}}finally{nt=t}}function ut(){try{pe()}catch(e){Ke(e,tt)}}var dt=null;function ft(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Xn(r)&&(dt=new Set,tr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&kn(r),dt?.size>0)){Ft.clear();for(let e of dt){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)dt.has(n)&&(dt.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||tr(n)}}dt.clear()}}dt=null}}function pt(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let i of e.reactions){let e=i.f;e&2?pt(i,t,n,r):e&4194320&&!(e&2048)&&mt(i,t,r)&&(N(i,g),ht(i))}}function mt(e,t,r){let i=r.get(e);if(i!==void 0)return i;if(e.deps!==null)for(let i of e.deps){if(n.call(t,i))return!0;if(i.f&2&&mt(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ht(e){P.schedule(e)}function gt(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),N(e,h);for(var n=e.first;n!==null;)gt(n,t),n=n.next}}function _t(e){N(e,h);for(var t=e.first;t!==null;)_t(t),t=t.next}function vt(e){let t=0,n=Lt(0),r;return()=>{pn()&&(q(n),Cn(()=>(t===0&&(r=J(()=>e(()=>Ut(n)))),t+=1,()=>{Ue(()=>{--t,t===0&&(r?.(),r=void 0,Ut(n))})})))}}var yt=S|C;function bt(e,t,n,r){new xt(e,t,n,r)}var xt=class{parent;is_pending=!1;transform_error;#e;#t=k?A:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=vt(()=>(this.#m=Lt(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=U;t.b=this,t.f|=128,n(e)},this.parent=U.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=wn(()=>{if(k){let e=this.#t;De();let t=e.data===`[!`;if(e.data.startsWith(`[?`)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#v():this.#g()}else this.#y()},yt),k&&(this.#e=A)}#g(){try{this.#a=B(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed;t&&(this.#s=B(()=>{t(this.#e,()=>e,()=>()=>{})}))}#v(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=B(()=>e(this.#e)),Ue(()=>{var e=this.#c=document.createDocumentFragment(),t=$t();e.append(t),this.#a=this.#x(()=>B(()=>this.#r(t))),this.#u===0&&(this.#e.before(e),this.#c=null,An(this.#o,()=>{this.#o=null}),this.#b(P))}))}#y(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=B(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Pn(this.#a,e);let t=this.#n.pending;this.#o=B(()=>t(this.#e))}else this.#b(P)}catch(e){this.error(e)}}#b(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){Xe(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#x(e){var t=U,n=H,r=M;Vn(this.#i),Bn(this.#i),Le(this.#i.ctx);try{return ct.ensure(),e()}catch(e){return Ge(e),null}finally{Vn(t),Bn(n),Le(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#u+=e,this.#u===0&&(this.#b(t),this.#o&&An(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))}update_pending_count(e,t){this.#S(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,Ue(()=>{this.#d=!1,this.#m&&Vt(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),q(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;P?.is_fork?(this.#a&&P.skip_effect(this.#a),this.#o&&P.skip_effect(this.#o),this.#s&&P.skip_effect(this.#s),P.on_fork_commit(()=>{this.#C(e)})):this.#C(e)}#C(e){this.#a&&=(V(this.#a),null),this.#o&&=(V(this.#o),null),this.#s&&=(V(this.#s),null),k&&(Ee(this.#t),Oe(),Ee(ke()));var t=this.#n.onerror;let n=this.#n.failed;var r=!1,i=!1;let a=()=>{if(r){we();return}r=!0,i&&ve(),this.#s!==null&&An(this.#s,()=>{this.#s=null}),this.#x(()=>{this.#y()})},o=e=>{try{i=!0,t?.(e,a),i=!1}catch(e){Ke(e,this.#i&&this.#i.parent)}n&&(this.#s=this.#x(()=>{try{return B(()=>{var t=U;t.b=this,t.f|=128,n(this.#e,()=>e,()=>a)})}catch(e){return Ke(e,this.#i.parent),null}}))};Ue(()=>{var t;try{t=this.transform_error(e)}catch(e){Ke(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(o,e=>Ke(e,this.#i&&this.#i.parent)):o(t)})}};function St(e,t,n,r){let i=Be()?Et:Ot;var a=e.filter(e=>!e.settled);if(n.length===0&&a.length===0){r(t.map(i));return}var o=U,s=Ct(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function l(e){s();try{r(e)}catch(e){o.f&16384||Ke(e,o)}wt()}if(n.length===0){c.then(()=>l(t.map(i)));return}var u=Tt();function d(){Promise.all(n.map(e=>Dt(e))).then(e=>l([...t.map(i),...e])).catch(e=>Ke(e,o)).finally(()=>u())}c?c.then(()=>{s(),d(),wt()}):d()}function Ct(){var e=U,t=H,n=M,r=P;return function(i=!0){Vn(e),Bn(t),Le(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function wt(e=!0){Vn(null),Bn(null),Le(null),e&&P?.deactivate()}function Tt(){var e=U,t=e.b,n=P,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),(i=!1)=>{t.update_pending_count(-1,n),n.decrement(r,e,i)}}function Et(e){var t=2|g;return U!==null&&(U.f|=C),{ctx:M,deps:null,effects:null,equals:je,f:t,fn:e,reactions:null,rv:0,v:O,wv:0,parent:U,ac:null}}function Dt(e,t,n){let r=U;r===null&&ce();var i=void 0,a=Lt(O),o=!H,s=new Map;return Sn(()=>{var t=U,n=m();i=n.promise;try{Promise.resolve(e()).then(n.resolve,n.reject).finally(wt)}catch(e){n.reject(e),wt()}var c=P;if(o){if(t.f&32768)var l=Tt();if(r.b.is_rendered())s.get(c)?.reject(ae),s.delete(c);else{for(let e of s.values())e.reject(ae);s.clear()}s.set(c,n)}let u=(e,n=void 0)=>{if(l&&l(n===ae),!(n===ae||t.f&16384)){if(c.activate(),n)a.f|=ne,Vt(a,n);else{a.f&8388608&&(a.f^=ne),Vt(a,e);for(let[e,t]of s){if(s.delete(e),e===c)break;t.reject(ae)}}c.deactivate()}};n.promise.then(u,e=>u(null,e||`unknown`))}),mn(()=>{for(let e of s.values())e.reject(ae)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function Ot(e){let t=Et(e);return t.equals=Ne,t}function kt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)V(t[n])}}function At(e){var t,n=U,r=e.parent;if(!Ln&&r!==null&&r.f&24576)return xe(),e.v;Vn(r);try{e.f&=~E,kt(e),t=Qn(e)}finally{Vn(n)}return t}function jt(e){var t=At(e);if(!e.equals(t)&&(e.wv=Yn(),(!P?.is_fork||e.deps===null)&&(P===null?e.v=t:P.capture(e,t,!0),e.deps===null))){N(e,h);return}Ln||(F===null?Je(e):(pn()||P?.is_fork)&&F.set(e,t))}function Mt(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(ae),t.teardown=d,t.ac=null,er(t,0),En(t))}function Nt(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&tr(t)}var Pt=new Set,Ft=new Map,It=!1;function Lt(e,t){return{f:0,v:e,reactions:null,equals:je,rv:0,wv:0}}function Rt(e,t){let n=Lt(e,t);return Un(n),n}function zt(e,t=!1,n=!0){let r=Lt(e);return t||(r.equals=Ne),Fe&&n&&M!==null&&M.l!==null&&(M.l.s??=[]).push(r),r}function Bt(e,t){return I(e,J(()=>q(e))),t}function I(e,t,r=!1){return H!==null&&(!zn||H.f&131072)&&Be()&&H.f&4325394&&(Hn===null||!n.call(Hn,e))&&_e(),Vt(e,r?Gt(t):t,at)}function Vt(e,t,n=null){if(!e.equals(t)){Ft.set(e,Ln?t:e.v);var r=ct.ensure();if(r.capture(e,t),e.f&2){let t=e;e.f&2048&&At(t),F===null&&Je(t)}e.wv=Yn(),Wt(e,g,n),Be()&&U!==null&&U.f&1024&&!(U.f&96)&&(K===null?Wn([e]):K.push(e)),!r.is_fork&&Pt.size>0&&!It&&Ht()}return t}function Ht(){It=!1;for(let e of Pt)e.f&1024&&N(e,_),Xn(e)&&tr(e);Pt.clear()}function Ut(e){I(e,e.v+1)}function Wt(e,t,n){var r=e.reactions;if(r!==null)for(var i=Be(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(!(!i&&s===U)){var l=(c&g)===0;if(l&&N(s,t),c&2){var u=s;F?.delete(u),c&65536||(c&512&&(s.f|=E),Wt(u,_,n))}else if(l){var d=s;c&16&&dt!==null&&dt.add(d),n===null?ht(d):n.push(d)}}}}function Gt(t){if(typeof t!=`object`||!t||D in t)return t;let n=l(t);if(n!==s&&n!==c)return t;var r=new Map,i=e(t),o=Rt(0),u=null,d=qn,f=e=>{if(qn===d)return e();var t=H,n=qn;Bn(null),Jn(d);var r=e();return Bn(t),Jn(n),r};return i&&r.set(`length`,Rt(t.length,u)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&he();var i=r.get(t);return i===void 0?f(()=>{var e=Rt(n.value,u);return r.set(t,e),e}):I(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>Rt(O,u));r.set(t,e),Ut(o)}}else I(n,O),Ut(o);return!0},get(e,n,i){if(n===D)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||a(e,n)?.writable)&&(o=f(()=>Rt(Gt(s?e[n]:O),u)),r.set(n,o)),o!==void 0){var c=q(o);return c===O?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=q(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==O)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===D)return!0;var n=r.get(t),i=n!==void 0&&n.v!==O||Reflect.has(e,t);return(n!==void 0||U!==null&&(!i||a(e,t)?.writable))&&(n===void 0&&(n=f(()=>Rt(i?Gt(e[t]):O,u)),r.set(t,n)),q(n)===O)?!1:i},set(e,t,n,s){var c=r.get(t),l=t in e;if(i&&t===`length`)for(var d=n;d<c.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>Rt(O,u)),r.set(d+``,p)):I(p,O)}if(c===void 0)(!l||a(e,t)?.writable)&&(c=f(()=>Rt(void 0,u)),I(c,Gt(n)),r.set(t,c));else{l=c.v!==O;var m=f(()=>Gt(n));I(c,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(s,n),!l){if(i&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&I(g,_+1)}Ut(o)}return!0},ownKeys(e){q(o);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==O});for(var[n,i]of r)i.v!==O&&!(n in e)&&t.push(n);return t},setPrototypeOf(){ge()}})}function Kt(e){try{if(typeof e==`object`&&e&&D in e)return e[D]}catch{}return e}function qt(e,t){return Object.is(Kt(e),Kt(t))}var Jt,Yt,Xt,Zt;function Qt(){if(Jt===void 0){Jt=window,Yt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Xt=a(t,`firstChild`).get,Zt=a(t,`nextSibling`).get,u(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),u(n)&&(n.__t=void 0)}}function $t(e=``){return document.createTextNode(e)}function en(e){return Xt.call(e)}function tn(e){return Zt.call(e)}function L(e,t){if(!k)return en(e);var n=en(A);if(n===null)n=A.appendChild($t());else if(t&&n.nodeType!==3){var r=$t();return n?.before(r),Ee(r),r}return t&&on(n),Ee(n),n}function R(e,t=1,n=!1){let r=k?A:e;for(var i;t--;)i=r,r=tn(r);if(!k)return r;if(n){if(r?.nodeType!==3){var a=$t();return r===null?i?.after(a):r.before(a),Ee(a),a}on(r)}return Ee(r),r}function nn(e){e.textContent=``}function rn(){return!Pe||dt!==null?!1:(U.f&b)!==0}function an(e,t,n){let r=n?{is:n}:void 0;return document.createElementNS(t??`http://www.w3.org/1999/xhtml`,e,r)}function on(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}var sn=!1;function cn(){sn||(sn=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function ln(e){var t=H,n=U;Bn(null),Vn(null);try{return e()}finally{Bn(t),Vn(n)}}function un(e){U===null&&(H===null&&fe(e),de()),Ln&&ue(e)}function dn(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function fn(e,t){var n=U;n!==null&&n.f&8192&&(e|=v);var r={ctx:M,deps:null,nodes:null,f:e|g|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};P?.register_created_effect(r);var i=r;if(e&4)it===null?ct.ensure().schedule(r):it.push(r);else if(t!==null){try{tr(r)}catch(e){throw V(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=S))}if(i!==null&&(i.parent=n,n!==null&&dn(i,n),H!==null&&H.f&2&&!(e&64))){var a=H;(a.effects??=[]).push(i)}return r}function pn(){return H!==null&&!zn}function mn(e){let t=fn(8,null);return N(t,h),t.teardown=e,t}function hn(e){un(`$effect`);var t=U.f;if(!H&&t&32&&!(t&32768)){var n=M;(n.e??=[]).push(e)}else return gn(e)}function gn(e){return fn(4|w,e)}function _n(e){return un(`$effect.pre`),fn(8|w,e)}function vn(e){ct.ensure();let t=fn(64|C,e);return(e={})=>new Promise(n=>{e.outro?An(t,()=>{V(t),n(void 0)}):(V(t),n(void 0))})}function yn(e){return fn(4,e)}function bn(e,t){var n=M,r={effect:null,ran:!1,deps:e};n.l.$.push(r),r.effect=Cn(()=>{if(e(),!r.ran){r.ran=!0;var n=U;try{Vn(n.parent),J(t)}finally{Vn(n)}}})}function xn(){var e=M;Cn(()=>{for(var t of e.l.$){t.deps();var n=t.effect;n.f&1024&&n.deps!==null&&N(n,_),Xn(n)&&tr(n),t.ran=!1}})}function Sn(e){return fn(te|C,e)}function Cn(e,t=0){return fn(8|t,e)}function z(e,t=[],n=[],r=[]){St(r,t,n,t=>{fn(8,()=>e(...t.map(q)))})}function wn(e,t=0){return fn(16|t,e)}function B(e){return fn(32|C,e)}function Tn(e){var t=e.teardown;if(t!==null){let e=Ln,n=H;Rn(!0),Bn(null);try{t.call(null)}finally{Rn(e),Bn(n)}}}function En(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&ln(()=>{e.abort(ae)});var r=n.next;n.f&64?n.parent=null:V(n,t),n=r}}function Dn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||V(t),t=n}}function V(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(On(e.nodes.start,e.nodes.end),n=!0),N(e,x),En(e,t&&!n),er(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();Tn(e),e.f^=x,e.f|=y;var i=e.parent;i!==null&&i.first!==null&&kn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function On(e,t){for(;e!==null;){var n=e===t?null:tn(e);e.remove(),e=n}}function kn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function An(e,t,n=!0){var r=[];jn(e,r,!0);var i=()=>{n&&V(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function jn(e,t,n){if(!(e.f&8192)){e.f^=v;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if(!(i.f&64)){var o=(i.f&65536)!=0||(i.f&32)!=0&&(e.f&16)!=0;jn(i,t,o?n:!1)}i=a}}}function Mn(e){Nn(e,!0)}function Nn(e,t){if(e.f&8192){e.f^=v,e.f&1024||(N(e,g),ct.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&65536)!=0||(n.f&32)!=0;Nn(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Pn(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:tn(n);t.append(n),n=i}}var Fn=null,In=!1,Ln=!1;function Rn(e){Ln=e}var H=null,zn=!1;function Bn(e){H=e}var U=null;function Vn(e){U=e}var Hn=null;function Un(e){H!==null&&(!Pe||H.f&2)&&(Hn===null?Hn=[e]:Hn.push(e))}var W=null,G=0,K=null;function Wn(e){K=e}var Gn=1,Kn=0,qn=Kn;function Jn(e){qn=e}function Yn(){return++Gn}function Xn(e){var t=e.f;if(t&2048)return!0;if(t&2&&(e.f&=~E),t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Xn(a)&&jt(a),a.wv>e.wv)return!0}t&512&&F===null&&N(e,h)}return!1}function Zn(e,t,r=!0){var i=e.reactions;if(i!==null&&!(!Pe&&Hn!==null&&n.call(Hn,e)))for(var a=0;a<i.length;a++){var o=i[a];o.f&2?Zn(o,t,!1):t===o&&(r?N(o,g):o.f&1024&&N(o,_),ht(o))}}function Qn(e){var t=W,n=G,r=K,i=H,a=Hn,o=M,s=zn,c=qn,l=e.f;W=null,G=0,K=null,H=l&96?null:e,Hn=null,Le(e.ctx),zn=!1,qn=++Kn,e.ac!==null&&(ln(()=>{e.ac.abort(ae)}),e.ac=null);try{e.f|=ee;var u=e.fn,d=u();e.f|=b;var f=e.deps,p=P?.is_fork;if(W!==null){var m;if(p||er(e,G),f!==null&&G>0)for(f.length=G+W.length,m=0;m<W.length;m++)f[G+m]=W[m];else e.deps=f=W;if(pn()&&e.f&512)for(m=G;m<f.length;m++)(f[m].reactions??=[]).push(e)}else !p&&f!==null&&G<f.length&&(er(e,G),f.length=G);if(Be()&&K!==null&&!zn&&f!==null&&!(e.f&6146))for(m=0;m<K.length;m++)Zn(K[m],e);if(i!==null&&i!==e){if(Kn++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=Kn;if(t!==null)for(let e of t)e.rv=Kn;K!==null&&(r===null?r=K:r.push(...K))}return e.f&8388608&&(e.f^=ne),d}catch(e){return Ge(e)}finally{e.f^=ee,W=t,G=n,K=r,H=i,Hn=a,Le(o),zn=s,qn=c}}function $n(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&r.f&2&&(W===null||!n.call(W,r))){var s=r;s.f&512&&(s.f^=512,s.f&=~E),s.v!==O&&Je(s),Mt(s),er(s,0)}}function er(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)$n(e,n[r])}function tr(e){var t=e.f;if(!(t&16384)){N(e,h);var n=U,r=In;U=e,In=!0;try{t&16777232?Dn(e):En(e),Tn(e);var i=Qn(e);e.teardown=typeof i==`function`?i:null,e.wv=Gn}finally{In=r,U=n}}}async function nr(){if(Pe)return new Promise(e=>{requestAnimationFrame(()=>e()),setTimeout(()=>e())});await Promise.resolve(),lt()}function q(e){var t=(e.f&2)!=0;if(Fn?.add(e),H!==null&&!zn&&!(U!==null&&U.f&16384)&&(Hn===null||!n.call(Hn,e))){var r=H.deps;if(H.f&2097152)e.rv<Kn&&(e.rv=Kn,W===null&&r!==null&&r[G]===e?G++:W===null?W=[e]:W.push(e));else{(H.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[H]:n.call(i,H)||i.push(H)}}if(Ln&&Ft.has(e))return Ft.get(e);if(t){var a=e;if(Ln){var o=a.v;return(!(a.f&1024)&&a.reactions!==null||ir(a))&&(o=At(a)),Ft.set(a,o),o}var s=(a.f&512)==0&&!zn&&H!==null&&(In||(H.f&512)!=0),c=(a.f&b)===0;Xn(a)&&(s&&(a.f|=512),jt(a)),s&&!c&&(Nt(a),rr(a))}if(F?.has(e))return F.get(e);if(e.f&8388608)throw e.v;return e.v}function rr(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),t.f&2&&!(t.f&512)&&(Nt(t),rr(t))}function ir(e){if(e.v===O)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(Ft.has(t)||t.f&2&&ir(t))return!0;return!1}function J(e){var t=zn;try{return zn=!0,e()}finally{zn=t}}function Y(e){if(!(typeof e!=`object`||!e||e instanceof EventTarget)){if(D in e)ar(e);else if(!Array.isArray(e))for(let t in e){let n=e[t];typeof n==`object`&&n&&D in n&&ar(n)}}}function ar(e,t=new Set){if(typeof e==`object`&&e&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{ar(e[n],t)}catch{}let n=l(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){let t=o(n);for(let n in t){let r=t[n].get;if(r)try{r.call(e)}catch{}}}}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var or=[`touchstart`,`touchmove`];function sr(e){return or.includes(e)}var cr=Symbol(`events`),lr=new Set,ur=new Set;function dr(e,t,n,r={}){function i(e){if(r.capture||mr.call(t,e),!e.cancelBubble)return ln(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?Ue(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function fr(e,t,n,r,i){var a={capture:r,passive:i},o=dr(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&mn(()=>{t.removeEventListener(e,o,a)})}var pr=null;function mr(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;pr=e;var s=0,c=pr===e&&e[cr];if(c){var l=a.indexOf(c);if(l!==-1&&(t===document||t===window)){e[cr]=t;return}var u=a.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=a[s]||e.target,o!==t){i(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=H,f=U;Bn(null),Vn(null);try{for(var p,m=[];o!==null;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var g=o[cr]?.[r];g!=null&&(!o.disabled||e.target===o)&&g.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble||h===t||h===null)break;o=h}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[cr]=t,delete e.currentTarget,Bn(d),Vn(f)}}}var hr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function gr(e){return hr?.createHTML(e)??e}function _r(e){var t=an(`template`);return t.innerHTML=gr(e.replaceAll(`<!>`,`<!---->`)),t.content}function vr(e,t){var n=U;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function X(e,t){var n=(t&1)!=0,r=(t&2)!=0,i,a=!e.startsWith(`<!>`);return()=>{if(k)return vr(A,null),A;i===void 0&&(i=_r(a?e:`<!>`+e),n||(i=en(i)));var t=r||Yt?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=en(t),s=t.lastChild;vr(o,s)}else vr(t,t);return t}}function Z(e,t){if(k){var n=U;(!(n.f&32768)||n.nodes.end===null)&&(n.nodes.end=A),De();return}e!==null&&e.before(t)}function Q(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=`${n}`)}function yr(e,t){return xr(e,t)}var br=new Map;function xr(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){Qt();var l=void 0,u=vn(()=>{var s=n??t.appendChild($t());bt(s,{pending:()=>{}},t=>{Re({});var n=M;if(o&&(n.c=o),a&&(i.$$events=a),k&&vr(t,null),l=e(t,i)||{},k&&(U.nodes.end=A,A===null||A.nodeType!==8||A.data!==`]`))throw Se(),ye;ze()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=sr(r);for(let e of[t,document]){var a=br.get(e);a===void 0&&(a=new Map,br.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,mr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(lr)),ur.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=br.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,mr),r.delete(e),r.size===0&&br.delete(n)):r.set(e,i)}ur.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return Sr.set(l,u),l}var Sr=new WeakMap,Cr=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)Mn(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(V(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Pn(r,t),t.append($t()),this.#n.set(e,{effect:r,fragment:t})}else V(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),An(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(V(n.effect),this.#n.delete(e))};ensure(e,t){var n=P,r=rn();if(t&&!this.#t.has(e)&&!this.#n.has(e))if(r){var i=document.createDocumentFragment(),a=$t();i.append(a),this.#n.set(e,{effect:B(()=>t(a)),fragment:i})}else this.#t.set(e,B(()=>t(this.anchor)));if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else k&&(this.anchor=A),this.#a(n)}};function wr(e,t,n=!1){var r;k&&(r=A,De());var i=new Cr(e),a=n?S:0;function o(e,t){if(k){var n=Ae(r);if(e!==parseInt(n.substring(1))){var a=ke();Ee(a),i.anchor=a,Te(!1),i.ensure(e,t),Te(!0);return}}i.ensure(e,t)}wn(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}function Tr(e,t){return t}function Er(e,t,n){for(var i=[],a=t.length,o,s=t.length,c=0;c<a;c++){let n=t[c];An(n,()=>{if(o){if(o.pending.delete(n),o.done.add(n),o.pending.size===0){var t=e.outrogroups;Dr(e,r(o.done)),t.delete(o),t.size===0&&(e.outrogroups=null)}}else --s},!1)}if(s===0){var l=i.length===0&&n!==null;if(l){var u=n,d=u.parentNode;nn(d),d.append(u),e.items.clear()}Dr(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(o)}function Dr(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(let t of e.pending.values())for(let n of t)r.add(e.items.get(n).e)}for(var i=0;i<t.length;i++){var a=t[i];r?.has(a)?(a.f|=T,Pn(a,document.createDocumentFragment())):V(t[i],n)}}var Or;function kr(t,n,i,a,o,s=null){var c=t,l=new Map;if(n&4){var u=t;c=k?Ee(en(u)):u.appendChild($t())}k&&De();var d=null,f=Ot(()=>{var t=i();return e(t)?t:t==null?[]:r(t)}),p,m=new Map,h=!0;function g(e){v.effect.f&16384||(v.pending.delete(e),v.fallback=d,jr(v,p,c,n,a),d!==null&&(p.length===0?d.f&33554432?(d.f^=T,Nr(d,null,c)):Mn(d):An(d,()=>{d=null})))}function _(e){v.pending.delete(e)}var v={effect:wn(()=>{p=q(f);var e=p.length;let t=!1;k&&Ae(c)===`[!`!=(e===0)&&(c=ke(),Ee(c),Te(!1),t=!0);for(var r=new Set,u=P,v=rn(),y=0;y<e;y+=1){k&&A.nodeType===8&&A.data===`]`&&(c=A,t=!0,Te(!1));var b=p[y],x=a(b,y),S=h?null:l.get(x);S?(S.v&&Vt(S.v,b),S.i&&Vt(S.i,y),v&&u.unskip_effect(S.e)):(S=Mr(l,h?c:Or??=$t(),b,x,y,o,n,i),h||(S.e.f|=T),l.set(x,S)),r.add(x)}if(e===0&&s&&!d&&(h?d=B(()=>s(c)):(d=B(()=>s(Or??=$t())),d.f|=T)),e>r.size&&le(``,``,``),k&&e>0&&Ee(ke()),!h)if(m.set(u,r),v){for(let[e,t]of l)r.has(e)||u.skip_effect(t.e);u.oncommit(g),u.ondiscard(_)}else g(u);t&&Te(!0),q(f)}),flags:n,items:l,pending:m,outrogroups:null,fallback:d};h=!1,k&&(c=A)}function Ar(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function jr(e,t,n,i,a){var o=(i&8)!=0,s=t.length,c=e.items,l=Ar(e.effect.first),u,d=null,f,p=[],m=[],h,g,_,v;if(o)for(v=0;v<s;v+=1)h=t[v],g=a(h,v),_=c.get(g).e,_.f&33554432||(_.nodes?.a?.measure(),(f??=new Set).add(_));for(v=0;v<s;v+=1){if(h=t[v],g=a(h,v),_=c.get(g).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(_),t.done.delete(_);if(_.f&8192&&(Mn(_),o&&(_.nodes?.a?.unfix(),(f??=new Set).delete(_))),_.f&33554432)if(_.f^=T,_===l)Nr(_,null,n);else{var y=d?d.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Pr(e,d,_),Pr(e,_,y),Nr(_,y,n),d=_,p=[],m=[],l=Ar(d.next);continue}if(_!==l){if(u!==void 0&&u.has(_)){if(p.length<m.length){var b=m[0],x;d=b.prev;var S=p[0],C=p[p.length-1];for(x=0;x<p.length;x+=1)Nr(p[x],b,n);for(x=0;x<m.length;x+=1)u.delete(m[x]);Pr(e,S.prev,C.next),Pr(e,d,S),Pr(e,C,b),l=b,d=C,--v,p=[],m=[]}else u.delete(_),Nr(_,l,n),Pr(e,_.prev,_.next),Pr(e,_,d===null?e.effect.first:d.next),Pr(e,d,_),d=_;continue}for(p=[],m=[];l!==null&&l!==_;)(u??=new Set).add(l),m.push(l),l=Ar(l.next);if(l===null)continue}_.f&33554432||p.push(_),d=_,l=Ar(_.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(Dr(e,r(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var w=[];if(u!==void 0)for(_ of u)_.f&8192||w.push(_);for(;l!==null;)!(l.f&8192)&&l!==e.fallback&&w.push(l),l=Ar(l.next);var E=w.length;if(E>0){var ee=i&4&&s===0?n:null;if(o){for(v=0;v<E;v+=1)w[v].nodes?.a?.measure();for(v=0;v<E;v+=1)w[v].nodes?.a?.fix()}Er(e,w,ee)}}o&&Ue(()=>{if(f!==void 0)for(_ of f)_.nodes?.a?.apply()})}function Mr(e,t,n,r,i,a,o,s){var c=o&1?o&16?Lt(n):zt(n,!1,!1):null,l=o&2?Lt(i):null;return{v:c,i:l,e:B(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function Nr(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=tn(r);if(a.before(r),r===i)return;r=o}}function Pr(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}var Fr=[...` 	
\r\f\xA0\v﻿`];function Ir(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Fr.includes(r[o-1]))&&(s===r.length||Fr.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Lr(e,t,n,r,i,a){var o=e.__className;if(k||o!==n||o===void 0){var s=Ir(n,r,a);(!k||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function Rr(t,n,r=!1){if(t.multiple){if(n==null)return;if(!e(n))return Ce();for(var i of t.options)i.selected=n.includes(Br(i));return}for(i of t.options)if(qt(Br(i),n)){i.selected=!0;return}(!r||n!==void 0)&&(t.selectedIndex=-1)}function zr(e){var t=new MutationObserver(()=>{Rr(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),mn(()=>{t.disconnect()})}function Br(e){return`__value`in e?e.__value:e.value}var Vr=Symbol(`is custom element`),Hr=Symbol(`is html`),Ur=oe?`link`:`LINK`,Wr=oe?`progress`:`PROGRESS`;function Gr(e){if(k){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;$(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;$(e,`checked`,null),e.checked=r}}};e.__on_r=n,Ue(n),cn()}}function Kr(e,t){var n=qr(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Wr)||(e.value=t??``)}function $(e,t,n,r){var i=qr(e);k&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===Ur)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[ie]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&Yr(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function qr(e){return e.__attributes??={[Vr]:e.nodeName.includes(`-`),[Hr]:e.namespaceURI===be}}var Jr=new Map;function Yr(e){var t=e.getAttribute(`is`)||e.nodeName,n=Jr.get(t);if(n)return n;Jr.set(t,n=[]);for(var r,i=e,a=Element.prototype;a!==i;){for(var s in r=o(i),r)r[s].set&&n.push(s);i=l(i)}return n}function Xr(e,t){return e===t||e?.[D]===t}function Zr(e={},t,n,r){var i=M.r,a=U;return yn(()=>{var o,s;return Cn(()=>{o=s,s=r?.()||[],J(()=>{e!==n(...s)&&(t(e,...s),o&&Xr(n(...o),e)&&t(null,...o))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&33554432;)r=r.parent;let o=()=>{s&&Xr(n(...s),e)&&t(null,...s)},c=r.teardown;r.teardown=()=>{o(),c?.()}}}),e}function Qr(e){return function(...t){return t[0].preventDefault(),e?.apply(this,t)}}function $r(e=!1){let t=M,n=t.l.u;if(!n)return;let r=()=>Y(t.s);if(e){let e=0,n={},i=Et(()=>{let r=!1,i=t.s;for(let e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0);return r&&e++,e});r=()=>q(i)}n.b.length&&_n(()=>{ei(t,r),p(n.b)}),hn(()=>{let e=J(()=>n.m.map(f));return()=>{for(let t of e)typeof t==`function`&&t()}}),n.a.length&&hn(()=>{ei(t,r),p(n.a)})}function ei(e,t){if(e.l.s)for(let t of e.l.s)q(t);t()}function ti(e,t,n,r){var i=!Fe||(n&2)!=0,o=(n&8)!=0,s=(n&16)!=0,c=r,l=!0,u=()=>(l&&(l=!1,c=s?J(r):r),c);let d;if(o){var f=D in e||re in e;d=a(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;o?[p,m]=$e(()=>e[t]):p=e[t],p===void 0&&r!==void 0&&(p=u(),d&&(i&&me(t),d(p)));var h=i?()=>{var n=e[t];return n===void 0?u():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(i&&!(n&4))return h;if(d){var g=e.$$legacy;return(function(e,t){return arguments.length>0?((!i||!t||g||m)&&d(t?h():e),e):h()})}var _=!1,v=(n&1?Et:Ot)(()=>(_=!1,h()));o&&q(v);var y=U;return(function(e,t){if(arguments.length>0){let n=t?q(v):i&&o?Gt(e):e;return I(v,n),_=!0,c!==void 0&&(c=n),e}return Ln&&_||y.f&16384?v.v:q(v)})}function ni(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}function ri(){let t=M;return t===null&&se(`createEventDispatcher`),(n,r,i)=>{let a=t.s.$$events?.[n];if(a){let o=e(a)?a.slice():[a],s=ni(n,r,i);for(let e of o)e.call(t.x,s);return!s.defaultPrevented}return!0}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`),Ie();var ii=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='_圖層_1'%20data-name='圖層%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201553.16%201517.42'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20d='M1296.82,465.37c-7.03-5-12.58-11.81-15.81-19.8L1110.31,23.64c-2.13-7.09-12.46-7.6-15.3-.74l-192.33,327.78-207.61-4.13L515.93,11.39c-2.58-6.96-12.91-6.87-15.32.14l-182.34,401.13c-4.14,9.12-10.89,16.82-19.45,22.03C134.34,534.71,23.23,709.04,19.26,908.38h0c-6.29,316.27,259.38,580.43,590.38,587.01l318.15,6.32c331,6.58,606.96-246.8,613.25-563.08h0c3.83-192.51-93.12-365.7-244.22-473.26Z'/%3e%3cg%3e%3cpath%20class='cls-1'%20d='M561.67,872.57c-.88,44.2-37.42,79.33-81.63,78.45-44.2-.88-79.33-37.43-78.45-81.63.88-44.2,37.43-79.33,81.63-78.45,44.2.88,79.33,37.42,78.45,81.63Z'/%3e%3cpath%20class='cls-1'%20d='M1160.57,884.47c-.88,44.2-37.43,79.33-81.63,78.45-44.2-.88-79.33-37.42-78.45-81.63.88-44.2,37.42-79.33,81.63-78.45,44.2.88,79.33,37.43,78.45,81.63Z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='cls-1'%20d='M852.27,1100.76c-.58,28.89-44.89,51.43-98.99,50.36-54.09-1.08-97.48-25.37-96.91-54.25.57-28.89,44.89-51.43,98.99-50.36,54.09,1.07,97.48,25.36,96.91,54.25Z'/%3e%3cpolygon%20class='cls-1'%20points='801.33%201103.37%20774.59%201084.38%20898.52%20927.73%20925.26%20946.71%20801.33%201103.37'/%3e%3cpolygon%20class='cls-1'%20points='720.9%201110.29%20643.94%201021.78%20666.78%201003.6%20743.74%201092.1%20720.9%201110.29'/%3e%3c/g%3e%3c/svg%3e`,ai=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='_圖層_1'%20data-name='圖層%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201816.9%201389.34'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20d='M1748.7,47.18h0c-74.55-63.96-187.76-55.16-251.58,19.55l-167.81,196.43c-10,11.7-25.77,16.64-40.63,12.69-23.91-6.37-61.36-16.25-112.6-23.29-140.46-19.3-302.06-12.75-438.15,14.63-66.29,13.34-85.54,20.85-120.9,37.98-5.85-22.61-16.19-44.41-31.28-63.99-59.95-77.86-172.57-92.4-250.27-32.31L74,411.09c-80.94,62.59-93.31,182.47-24.34,260.38,62.6,70.71,170.27,78.51,244.94,20.76l111.33-86.1c-.33,6.15-.93,12.23-.93,18.45h0c.03,45.44,9.15,88.79,25.24,128.62-94.54,62.01-157.41,168.94-157.32,289.99h0c.15,190.42,155.74,346.1,345.75,345.95l462.37-.36c81.19-.06,243.29-38.28,355.07-156.9,129.06-136.94,146.1-281.02,150.05-413.23,3.7-123.69,2.43-200.98,2.11-256.2-.19-33.66,11.74-66.24,33.58-91.81l146.35-171.32c63.82-74.71,55.04-188.17-19.52-252.13Z'/%3e%3cpath%20class='cls-1'%20d='M795.8,710.74c.03,43.47-35.11,78.74-78.49,78.78-43.38.04-78.57-35.18-78.61-78.65-.03-43.47,35.1-78.74,78.48-78.78,43.38-.03,78.58,35.18,78.61,78.65Z'/%3e%3cpath%20class='cls-1'%20d='M1195.89,774.51c.03,43.48-35.11,78.74-78.49,78.78-43.38.03-78.58-35.18-78.61-78.66-.03-43.47,35.11-78.74,78.49-78.78,43.38-.03,78.58,35.18,78.61,78.65Z'/%3e%3cpath%20class='cls-1'%20d='M795.36,1017.48c.06,74.15-81.74,134.33-182.7,134.41-100.96.08-182.85-59.97-182.91-134.12-.06-74.15,81.74-134.33,182.7-134.41,100.96-.08,182.85,59.97,182.91,134.12Z'/%3e%3cpolygon%20points='503.25%201050.92%20500.86%201027.89%20639.27%201013.43%20672.15%20954.74%20692.34%20966.05%20653.59%201035.21%20503.25%201050.92'/%3e%3c/svg%3e`,oi=X(`<small class="field-error"> </small>`),si=X(`<small id="weightKg-error" class="field-error"> </small>`),ci=X(`<small id="lifeStage-error" class="field-error"> </small>`),li=X(`<small id="juvenileAgeBand-error" class="field-error"> </small>`),ui=X(`<label class="field" for="juvenileAgeBand"><span>幼年期月齡</span> <select id="juvenileAgeBand"><option disabled="">請選擇月齡</option><option>0 - 4 個月</option><option>4 個月以上</option></select> <!></label>`),di=X(`<small id="neuterStatus-error" class="field-error"> </small>`),fi=X(`<form class="calculator-form"><div class="field-group field-group--species" aria-label="物種"><button type="button"><img class="species-icon" alt="" aria-hidden="true"/> 狗</button> <button type="button"><img class="species-icon" alt="" aria-hidden="true"/> 貓</button></div> <!> <div class="form-grid"><label class="field" for="weightKg"><span>體重</span> <div><input id="weightKg" type="number" min="0.5" max="80" step="0.1" placeholder="請輸入體重"/> <strong>kg</strong></div> <!></label> <label class="field" for="lifeStage"><span>年齡</span> <select id="lifeStage"><option disabled="">請選擇年齡</option><option>不確定年齡</option><option>幼年期（1歲以下）</option><option>成年期（1-7歲）</option><option>老年期（7歲以上）</option></select> <!></label> <!> <label class="field" for="neuterStatus"><span>是否絕育</span> <select id="neuterStatus"><option disabled="">請選擇是否絕育</option><option>已絕育</option><option>未絕育</option></select> <!></label></div> <button class="submit-button" type="submit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 4a7 7 0 1 0 4.4 12.4l3.1 3.1 1.4-1.4-3.1-3.1A7 7 0 0 0 11 4Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"></path></svg> 計算每日飯飯量</button></form>`);function pi(e,t){Re(t,!1);let n=ti(t,`value`,12),r=ti(t,`errors`,24,()=>({})),i=ri();function a(e,t){n({...n(),[e]:t})}function o(e){n({...n(),lifeStage:e,juvenileAgeBand:e===`juvenile`?n().juvenileAgeBand:``})}$r();var s=fi(),c=L(s),l=L(c);let u;var d=L(l);Oe(),j(l);var f=R(l,2);let p;var m=L(f);Oe(),j(f),j(c);var h=R(c,2),g=e=>{var t=oi(),n=L(t,!0);j(t),z(()=>Q(n,(Y(r()),J(()=>r().species)))),Z(e,t)};wr(h,e=>{Y(r()),J(()=>r().species)&&e(g)});var _=R(h,2),v=L(_),y=R(L(v),2);let b;var x=L(y);Gr(x),Oe(2),j(y);var S=R(y,2),C=e=>{var t=si(),n=L(t,!0);j(t),z(()=>Q(n,(Y(r()),J(()=>r().weightKg)))),Z(e,t)};wr(S,e=>{Y(r()),J(()=>r().weightKg)&&e(C)}),j(v);var w=R(v,2),T=R(L(w),2),E=L(T);E.value=E.__value=``;var ee=R(E);ee.value=ee.__value=`default`;var te=R(ee);te.value=te.__value=`juvenile`;var ne=R(te);ne.value=ne.__value=`adult`;var D=R(ne);D.value=D.__value=`senior`,j(T);var re;zr(T);var ie=R(T,2),ae=e=>{var t=ci(),n=L(t,!0);j(t),z(()=>Q(n,(Y(r()),J(()=>r().lifeStage)))),Z(e,t)};wr(ie,e=>{Y(r()),J(()=>r().lifeStage)&&e(ae)}),j(w);var oe=R(w,2),se=e=>{var t=ui(),i=R(L(t),2),o=L(i);o.value=o.__value=``;var s=R(o);s.value=s.__value=`under4Months`;var c=R(s);c.value=c.__value=`over4Months`,j(i);var l;zr(i);var u=R(i,2),d=e=>{var t=li(),n=L(t,!0);j(t),z(()=>Q(n,(Y(r()),J(()=>r().juvenileAgeBand)))),Z(e,t)};wr(u,e=>{Y(r()),J(()=>r().juvenileAgeBand)&&e(d)}),j(t),z(e=>{$(i,`aria-invalid`,e),$(i,`aria-describedby`,(Y(r()),J(()=>r().juvenileAgeBand?`juvenileAgeBand-error`:void 0))),l!==(l=(Y(n()),J(()=>n().juvenileAgeBand)))&&(i.value=(i.__value=(Y(n()),J(()=>n().juvenileAgeBand)))??``,Rr(i,(Y(n()),J(()=>n().juvenileAgeBand))))},[()=>(Y(r()),J(()=>!!r().juvenileAgeBand))]),fr(`change`,i,e=>a(`juvenileAgeBand`,e.currentTarget.value)),Z(e,t)};wr(oe,e=>{Y(n()),J(()=>n().lifeStage===`juvenile`)&&e(se)});var ce=R(oe,2),le=R(L(ce),2),ue=L(le);ue.value=ue.__value=``;var de=R(ue);de.value=de.__value=`neutered`;var fe=R(de);fe.value=fe.__value=`intact`,j(le);var pe;zr(le);var me=R(le,2),he=e=>{var t=di(),n=L(t,!0);j(t),z(()=>Q(n,(Y(r()),J(()=>r().neuterStatus)))),Z(e,t)};wr(me,e=>{Y(r()),J(()=>r().neuterStatus)&&e(he)}),j(ce),j(_),Oe(2),j(s),z((e,t,i,a,o)=>{$(l,`aria-pressed`,(Y(n()),J(()=>n().species===`dog`))),u=Lr(l,1,``,null,u,{active:n().species===`dog`}),$(d,`src`,ai),$(f,`aria-pressed`,(Y(n()),J(()=>n().species===`cat`))),p=Lr(f,1,``,null,p,{active:n().species===`cat`}),$(m,`src`,ii),b=Lr(y,1,`input-shell`,null,b,e),Kr(x,t),$(x,`aria-invalid`,i),$(x,`aria-describedby`,(Y(r()),J(()=>r().weightKg?`weightKg-error`:void 0))),$(T,`aria-invalid`,a),$(T,`aria-describedby`,(Y(r()),J(()=>r().lifeStage?`lifeStage-error`:void 0))),re!==(re=(Y(n()),J(()=>n().lifeStage)))&&(T.value=(T.__value=(Y(n()),J(()=>n().lifeStage)))??``,Rr(T,(Y(n()),J(()=>n().lifeStage)))),$(le,`aria-invalid`,o),$(le,`aria-describedby`,(Y(r()),J(()=>r().neuterStatus?`neuterStatus-error`:void 0))),pe!==(pe=(Y(n()),J(()=>n().neuterStatus)))&&(le.value=(le.__value=(Y(n()),J(()=>n().neuterStatus)))??``,Rr(le,(Y(n()),J(()=>n().neuterStatus))))},[()=>({error:!!r().weightKg}),()=>(Y(n()),J(()=>Number.isFinite(n().weightKg)?n().weightKg:``)),()=>(Y(r()),J(()=>!!r().weightKg)),()=>(Y(r()),J(()=>!!r().lifeStage)),()=>(Y(r()),J(()=>!!r().neuterStatus))]),fr(`click`,l,()=>a(`species`,`dog`)),fr(`click`,f,()=>a(`species`,`cat`)),fr(`input`,x,e=>a(`weightKg`,e.currentTarget.valueAsNumber)),fr(`change`,T,e=>o(e.currentTarget.value)),fr(`change`,le,e=>a(`neuterStatus`,e.currentTarget.value)),fr(`submit`,s,Qr(()=>i(`submit`))),Z(e,s),ze()}function mi(e){return e.min!==e.max}function hi(e,t=``,n=0){let r=e.min.toFixed(n),i=e.max.toFixed(n),a=t?` ${t}`:``;return mi(e)?`${r} - ${i}${a}`:`${r}${a}`}function gi(e){return hi(e,`kcal`,0)}function _i(e,t){return e?hi(e,t===`stick`?`條`:`包`,1):`待補 kcal`}var vi=X(`<button type="button" class="clear-filter-button">清除篩選</button>`),yi=X(`<button type="button"> </button>`),bi=X(`<a class="pawpaw-product-card" target="_blank" rel="noreferrer"><div class="pawpaw-product-image-well"><img loading="lazy"/></div> <div class="pawpaw-product-card-body"><div class="pawpaw-product-card-meta"><span> </span></div> <h4> </h4> <div class="pawpaw-product-card-numbers"><span> </span> <strong> </strong></div></div></a>`),xi=X(`<div class="pawpaw-product-grid"></div>`),Si=X(`<div class="quiet-card"><p>目前沒有可確認避開已勾選過敏原的商品。</p></div>`),Ci=X(`<a class="pawpaw-product-card pawpaw-product-card--blocked" target="_blank" rel="noreferrer"><div class="pawpaw-product-image-well"><img loading="lazy"/></div> <div class="pawpaw-product-card-body"><div class="pawpaw-product-card-meta"><span> </span></div> <h4> </h4> <div class="pawpaw-product-card-numbers"><span> </span> <strong> </strong></div> <span class="pawpaw-status-label"> </span></div></a>`),wi=X(`<section class="result-section" aria-labelledby="other-products-title"><div class="result-hero"><div><h2 id="other-products-title">其他口味主食</h2></div></div> <div class="pawpaw-product-grid"></div></section>`),Ti=X(`<section class="results-panel" aria-live="polite"><div class="result-hero"><div><h2>每日所需熱量</h2></div></div> <div class="metric-grid"><article class="metric-card"><span>每日熱量</span> <strong> </strong> <small>WSAVA / NRC 平均值</small></article> <article class="metric-card"><span>營養評估標準</span> <strong> </strong> <strong> </strong> <a class="text-link" target="_blank" rel="noreferrer">公式說明</a></article></div> <section class="allergen-section" aria-labelledby="allergen-section-title"><div class="result-hero"><div><h2 id="allergen-section-title">需要避開的食材</h2></div></div> <div class="allergen-field allergen-field--result" role="group" aria-labelledby="allergen-section-title"><div class="allergen-field__heading"><p>即時篩選推薦口味，不影響上方每日熱量。</p> <!></div> <div class="chip-grid"></div></div></section> <section class="result-section" aria-labelledby="recommended-products-title"><div class="result-hero"><div><h2 id="recommended-products-title">適合優先挑選的口味</h2> <p>已避開勾選的食材</p></div></div> <!></section> <!> <aside class="notice-card"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 2.7 20h18.6L12 2Zm0 4.4 5.8 11.2H6.2L12 6.4Zm-1 3.6h2v4.7h-2V10Zm0 6h2v2h-2v-2Z"></path></svg> <ul aria-label="注意事項"><li>本計算結果為營養估算值，實際餵食量需依寵物體態、排便與活動量調整。</li> <li>若寵物有慢性疾病、術後恢復或特殊飲食需求，請先諮詢獸醫師。</li> <li>詳細成分與營養資訊，請參考各產品頁面說明。</li></ul></aside></section>`);function Ei(e,t){Re(t,!1);let n=zt(),r=zt(),i=ti(t,`result`,8),a=ti(t,`allergens`,24,()=>[]),o=ti(t,`allergenIds`,28,()=>[]),s=ti(t,`nutritionArticleUrl`,8,`https://www.pawsup365.com/blog/posts/wsava-nrc`);function c(e){return[...e].sort((e,t)=>{if(e.product.sortGroup!==t.product.sortGroup)return e.product.sortGroup-t.product.sortGroup;let n=e.product.code||e.product.id,r=t.product.code||t.product.id;return n.localeCompare(r,`zh-Hant`,{numeric:!0})})}function l(e){return typeof e==`number`?`${e.toLocaleString(`zh-TW`,{maximumFractionDigits:2})} kcal`:`待補 kcal`}function u(e){return e.product.unit===`stick`?`條`:`包`}function d(e){return e.blockReason?e.blockReason:`可優先查看`}function f(e){o(o().includes(e)?o().filter(t=>t!==e):[...o(),e])}bn(()=>Y(i()),()=>{I(n,c(i().products.filter(e=>e.isRecommended)))}),bn(()=>Y(i()),()=>{I(r,c(i().products.filter(e=>!e.isRecommended)))}),xn(),$r();var p=Ti(),m=R(L(p),2),h=L(m),g=R(L(h),2),_=L(g,!0);j(g),Oe(2),j(h);var v=R(h,2),y=R(L(v),2),b=L(y);j(y);var x=R(y,2),S=L(x);j(x);var C=R(x,2);j(v),j(m);var w=R(m,2),T=R(L(w),2),E=L(T),ee=R(L(E),2),te=e=>{var t=vi();fr(`click`,t,()=>o([])),Z(e,t)};wr(ee,e=>{Y(o()),J(()=>o().length>0)&&e(te)}),j(E);var ne=R(E,2);kr(ne,5,a,Tr,(e,t)=>{var n=yi();let r;var i=L(n,!0);j(n),z((e,a)=>{$(n,`aria-pressed`,e),r=Lr(n,1,``,null,r,a),Q(i,(q(t),J(()=>q(t).label)))},[()=>(Y(o()),q(t),J(()=>o().includes(q(t).id))),()=>({active:o().includes(q(t).id)})]),fr(`click`,n,()=>f(q(t).id)),Z(e,n)}),j(ne),j(T),j(w);var D=R(w,2),re=R(L(D),2),ie=e=>{var t=xi();kr(t,5,()=>q(n),e=>e.product.id,(e,t)=>{var n=bi(),r=L(n),i=L(r);j(r);var a=R(r,2),o=L(a),s=L(o),c=L(s,!0);j(s),j(o);var d=R(o,2),f=L(d,!0);j(d);var p=R(d,2),m=L(p),h=L(m);j(m);var g=R(m,2),_=L(g);j(g),j(p),j(a),j(n),z((e,r,a)=>{$(n,`href`,(q(t),J(()=>q(t).product.productUrl))),$(i,`src`,(q(t),J(()=>q(t).product.imageUrl))),$(i,`alt`,(q(t),J(()=>q(t).product.name))),Q(c,(q(t),J(()=>q(t).product.primaryFunction))),Q(f,(q(t),J(()=>q(t).product.name))),Q(h,`每${e??``} ${r??``}`),Q(_,`${a??``} / 日`)},[()=>(q(t),J(()=>u(q(t)))),()=>(q(t),J(()=>l(q(t).product.kcalPerUnit))),()=>(Y(_i),q(t),J(()=>_i(q(t).packsPerDay,q(t).product.unit)))]),Z(e,n)}),j(t),Z(e,t)},ae=e=>{Z(e,Si())};wr(re,e=>{q(n),J(()=>q(n).length>0)?e(ie):e(ae,-1)}),j(D);var oe=R(D,2),se=e=>{var t=wi(),n=R(L(t),2);kr(n,5,()=>q(r),e=>e.product.id,(e,t)=>{var n=Ci(),r=L(n),i=L(r);j(r);var a=R(r,2),o=L(a),s=L(o),c=L(s,!0);j(s),j(o);var f=R(o,2),p=L(f,!0);j(f);var m=R(f,2),h=L(m),g=L(h);j(h);var _=R(h,2),v=L(_);j(_),j(m);var y=R(m,2),b=L(y,!0);j(y),j(a),j(n),z((e,r,a,o)=>{$(n,`href`,(q(t),J(()=>q(t).product.productUrl))),$(i,`src`,(q(t),J(()=>q(t).product.imageUrl))),$(i,`alt`,(q(t),J(()=>q(t).product.name))),Q(c,(q(t),J(()=>q(t).product.primaryFunction))),Q(p,(q(t),J(()=>q(t).product.name))),Q(g,`每${e??``} ${r??``}`),Q(v,`${a??``} / 日`),Q(b,o)},[()=>(q(t),J(()=>u(q(t)))),()=>(q(t),J(()=>l(q(t).product.kcalPerUnit))),()=>(Y(_i),q(t),J(()=>_i(q(t).packsPerDay,q(t).product.unit))),()=>(q(t),J(()=>d(q(t))))]),Z(e,n)}),j(n),j(t),Z(e,t)};wr(oe,e=>{q(r),J(()=>q(r).length>0)&&e(se)}),Oe(2),j(p),z((e,t,n)=>{Q(_,e),Q(b,`WSAVA ${t??``}`),Q(S,`NRC ${n??``}`),$(C,`href`,s())},[()=>(Y(gi),Y(i()),J(()=>gi(i().averageKcal))),()=>(Y(gi),Y(i()),J(()=>gi(i().wsavaKcal))),()=>(Y(gi),Y(i()),J(()=>gi(i().nrcKcal)))]),Z(e,p),ze()}var Di=1.4,Oi=e=>({min:e,max:e}),ki=(e,t=0)=>({min:Number(e.min.toFixed(t)),max:Number(e.max.toFixed(t))}),Ai=(e,t)=>({min:e*t.min,max:e*t.max}),ji=(e,t)=>({min:e.min/t,max:e.max/t}),Mi=(e,t)=>({min:(e.min+t.min)/2,max:(e.max+t.max)/2}),Ni={species:``,weightKg:NaN,lifeStage:``,juvenileAgeBand:``,neuterStatus:``,allergenIds:[]};function Pi(e){if(e.lifeStage===`default`)return{id:`brand-default`,label:`年年產品背標預設`,helper:`未選擇活動係數條件時，使用文件指定的 1.4。`,coefficient:Oi(Di),source:`brandDefault`};if(e.lifeStage===`juvenile`){if(!e.juvenileAgeBand)throw Error(`Juvenile age band is required.`);let t=e.juvenileAgeBand===`under4Months`;return{id:t?`juvenile-under-4-months`:`juvenile-over-4-months`,label:t?`幼年期 0-4 個月`:`幼年期 4 個月以上`,helper:t?`文件指定活動係數 3.0。`:`文件指定活動係數 2.0。`,coefficient:Oi(t?3:2),source:`condition`}}if(e.lifeStage===`senior`)return{id:`senior`,label:`老年期 7 歲以上`,helper:`文件指定活動係數 1.1 - 1.4。`,coefficient:{min:1.1,max:1.4},source:`condition`};if(e.lifeStage!==`adult`||!e.neuterStatus)throw Error(`A valid life stage and neuter status are required.`);let t=e.neuterStatus===`neutered`;return{id:t?`adult-neutered`:`adult-intact`,label:t?`成年期已絕育`:`成年期未絕育`,helper:t?`文件指定活動係數 1.2 - 1.4。`:`文件指定活動係數 1.4 - 1.6。`,coefficient:t?{min:1.2,max:1.4}:{min:1.4,max:1.6},source:`condition`}}function Fi(e,t){if(!e.species)throw Error(`Species is required.`);let n=e.species,r=Pi(e),i=30*e.weightKg+70,a=70*e.weightKg**.75,o=Ai(i,r.coefficient),s=Ai(a,r.coefficient),c=Mi(o,s);return{factor:r,wsavaKcal:ki(o,0),nrcKcal:ki(s,0),averageKcal:ki(c,0),products:t.filter(e=>e.species.includes(n)).map(t=>{let n=Li(t,e),r=t.kcalPerUnit;if(!(typeof r==`number`&&r>0))return{product:t,packsPerDay:null,wsavaPacks:null,nrcPacks:null,isRecommended:n.length===0,blockReason:n};let i=ji(o,r),a=ji(s,r);return{product:t,packsPerDay:ki(Mi(i,a),1),wsavaPacks:ki(i,1),nrcPacks:ki(a,1),isRecommended:n.length===0,blockReason:n}})}}function Ii(e){let t={};return e.species||(t.species=`請選擇毛孩種類。`),Number.isFinite(e.weightKg)?(e.weightKg<.5||e.weightKg>80)&&(t.weightKg=`體重需介於 0.5 kg 到 80 kg。`):t.weightKg=`請輸入體重。`,e.lifeStage||(t.lifeStage=`請選擇年齡。`),e.lifeStage===`juvenile`&&!e.juvenileAgeBand&&(t.juvenileAgeBand=`請選擇幼年期月齡。`),e.neuterStatus||(t.neuterStatus=`請選擇是否絕育。`),t}function Li(e,t){return t.allergenIds.length===0?``:e.allergenStatus===`pending`?`過敏原資料待補，暫不列為推薦。`:e.allergenIds.some(e=>t.allergenIds.includes(e))?`含已勾選過敏原`:``}var Ri=[{id:`chicken`,label:`雞肉`},{id:`beef`,label:`牛肉`},{id:`pork`,label:`豬肉`},{id:`lamb`,label:`羊肉`},{id:`duck`,label:`鴨肉`},{id:`turkey`,label:`火雞`},{id:`salmon`,label:`鮭魚`},{id:`otherFish`,label:`其他魚類`},{id:`shrimp`,label:`蝦子`},{id:`crab`,label:`螃蟹`},{id:`egg`,label:`蛋類`},{id:`beans`,label:`豆類`},{id:`grains`,label:`穀物`}],zi={logoUrl:`https://shoplineimg.com/6412eff5f205dd0021575268/655b069e4f80a00023cef4b3/1200x.webp?source_format=png`,heroImageUrl:`https://img.shoplineapp.com/media/image_clips/655b069e4f80a00023cef4b3/original.png?1700464286`,shopUrl:`https://www.pawsup365.com`,nutritionArticleUrl:`https://www.pawsup365.com/blog/posts/wsava-nrc`},Bi=JSON.parse(`[{"id":"dog-pork","code":"D1","name":"皮皮癢癢","subtitle":"香煎松阪豬佐菠菜","series":"科學機能配方","primaryFunction":"皮毛保養","unit":"pack","kcalPerUnit":248.5,"kcalStatus":"confirmed","ingredients":"松阪豬、菠菜、地瓜、豌豆、山藥、芹菜、綜合維生素、綜合礦物質、魚油","allergenIds":["pork","beans","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-pork","sourceImageUrl":"https://drive.google.com/file/d/1_zNoDMT3iz-JLthX120IfodSvJlz6ja8/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1_zNoDMT3iz-JLthX120IfodSvJlz6ja8&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬"]},{"id":"dog-chicken","code":"D2","name":"腸腸久久","subtitle":"舒肥雞燕麥雜炊","series":"科學機能配方","primaryFunction":"腸胃調理","unit":"pack","kcalPerUnit":171.9,"kcalStatus":"confirmed","ingredients":"去皮雞腿肉、南瓜、白蘿蔔、燕麥、蕎麥、綠豆、干貝、亞麻仁籽、綜合維生素、綜合礦物質","allergenIds":["chicken","beans","grains"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-chicken","sourceImageUrl":"https://drive.google.com/file/d/1BTTje3_2-GVnNvUlbAeULG9-_fnPQ6_u/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1BTTje3_2-GVnNvUlbAeULG9-_fnPQ6_u&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬"]},{"id":"dog-sardine","code":"D3","name":"免免強強","subtitle":"沙丁魚燉青花濃湯","series":"科學機能配方","primaryFunction":"體質調理","unit":"pack","kcalPerUnit":181.4,"kcalStatus":"confirmed","ingredients":"火雞胸肉、菲力牛排、花椰菜、紅椒、豆腐、黑鮪魚、沙丁魚、蛤蜊、綜合維生素、綜合礦物質","allergenIds":["turkey","beef","beans","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-sardine","sourceImageUrl":"https://drive.google.com/file/d/1hA4KltTzJUgysMurYXufYRXA67c7FoW8/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1hA4KltTzJUgysMurYXufYRXA67c7FoW8&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬"]},{"id":"lowallergy-dog-turkey","code":"D7","name":"低敏皮皮癢癢","subtitle":"川燙火雞胸佐地瓜","series":"低敏呵護機能","primaryFunction":"皮毛保養","unit":"pack","kcalPerUnit":127.8,"kcalStatus":"confirmed","ingredients":"火雞胸、地瓜、綜合維生素、綜合礦物質","allergenIds":["turkey"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/lowallergy-dog-turkey","sourceImageUrl":"https://drive.google.com/file/d/1OMJgjQ0NLgpLUjuNDhsD8K_W6jZa5qFt/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1OMJgjQ0NLgpLUjuNDhsD8K_W6jZa5qFt&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬","低敏"]},{"id":"lowallergy-dog-mutton","code":"D8","name":"低敏腸腸久久","subtitle":"薏香羊腿高麗煲","series":"低敏呵護機能","primaryFunction":"腸胃調理","unit":"pack","kcalPerUnit":176.74,"kcalStatus":"confirmed","ingredients":"羊前腿肉、紅薯、高麗菜、羊腎、豬肚、薏仁、魚油、綜合維生素、綜合礦物質","allergenIds":["lamb","pork","grains","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/lowallergy-dog-mutton","sourceImageUrl":"https://drive.google.com/file/d/1GxlIG-MLv-Nujhc0JLvkWXL-gtUJKnIW/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1GxlIG-MLv-Nujhc0JLvkWXL-gtUJKnIW&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬","低敏"]},{"id":"dog-tumor","code":"D4","name":"炎炎散散","subtitle":"熟成鴨胸及薑黃蟹","series":"白金照護配方","primaryFunction":"炎症、腫瘤適用","unit":"pack","kcalPerUnit":174.45,"kcalStatus":"confirmed","ingredients":"蟹腳肉、炙燒鴨肉、雞肉、番薯、糙米、菠菜、苦瓜、大豆油、魚油、薑黃、綜合維生素、綜合礦物質","allergenIds":["crab","duck","chicken","beans","grains","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-tumor","sourceImageUrl":"https://drive.google.com/file/d/11mhh1nLG-N4lAf-dQy5-WH1eGiEgmAC6/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=11mhh1nLG-N4lAf-dQy5-WH1eGiEgmAC6&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬"]},{"id":"dog-senior","code":"D5","name":"百百歲歲","subtitle":"胭脂蝦煨牛心煮","series":"白金照護配方","primaryFunction":"中高齡適用","unit":"pack","kcalPerUnit":205.35,"kcalStatus":"confirmed","ingredients":"去皮鴨肉、胭脂蝦仁、牛心、鵪鶉蛋、番薯、羽衣甘藍、小薏仁、蘑菇、魚油、綜合維生素、綜合礦物質","allergenIds":["duck","shrimp","egg","grains","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-senior","sourceImageUrl":"https://drive.google.com/file/d/15Ht4hCwP4Xy2031pFkXZBWzFXe1vPvd0/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=15Ht4hCwP4Xy2031pFkXZBWzFXe1vPvd0&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬"]},{"id":"dog-relax","code":"D9","name":"安安心心","subtitle":"厚切牛舌與球芽甘藍沙拉","series":"白金照護配方","primaryFunction":"心血管保健","unit":"pack","kcalPerUnit":186.7,"kcalStatus":"confirmed","ingredients":"牛舌、紅薯、球芽甘藍、番茄、火雞胸肉、鮭魚、燕麥、魚油、綜合維生素、綜合礦物質","allergenIds":["beef","turkey","salmon","grains","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-set-6","sourceImageUrl":"https://drive.google.com/file/d/1vmhkLfeU3c9eM2SUtrpjwt8SMy7TFIhK/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1vmhkLfeU3c9eM2SUtrpjwt8SMy7TFIhK&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬"]},{"id":"dog-breathing","code":"","name":"氣氣順順","subtitle":"氣管保健配方","series":"白金照護配方","primaryFunction":"呼吸道保養","unit":"pack","kcalPerUnit":240.75,"kcalStatus":"confirmed","ingredients":"火雞、豬腎、穀物、蛋黃油、綜合維生素、綜合礦物質","allergenIds":["turkey","pork","egg","grains"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products","sourceImageUrl":"https://drive.google.com/file/d/1oBNOv2iUXiobZXYfqCWTYPixGhDwAAZC/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1oBNOv2iUXiobZXYfqCWTYPixGhDwAAZC&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬"]},{"id":"dog-ckd-m1","code":"D6","name":"腎腎力力 CKD-M1","subtitle":"嫩煮沙朗羊腎佐蓮藕","series":"璟逸研發處方","primaryFunction":"腎臟機能養護","unit":"pack","kcalPerUnit":141.77,"kcalStatus":"confirmed","ingredients":"沙朗牛、荸薺、菠菜、蘆筍、蘋果、羊腎、魚油、芡實粉、滴雞精、黑芝麻粉、綜合維生素、綜合礦物質","allergenIds":["beef","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-ckd-m1","sourceImageUrl":"https://drive.google.com/file/d/1VdbM69S1QWYNwIP9Z1C1nf4Vg6pmQEi0/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1VdbM69S1QWYNwIP9Z1C1nf4Vg6pmQEi0&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬","處方"]},{"id":"dog-kangaroo","code":"DR1","name":"野生袋鼠","subtitle":"袋鼠鮮煨南瓜米香","series":"珍稀超級主食","primaryFunction":"溫補低敏","unit":"pack","kcalPerUnit":117.85,"kcalStatus":"confirmed","ingredients":"野生袋鼠、黑鮪魚、南瓜、甘藍、小米、魚油、綜合維生素、綜合礦物質","allergenIds":["otherFish","grains"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-kangaroo","sourceImageUrl":"https://drive.google.com/file/d/1wzNvwjQ85TX6jqrN90pQ0XeVMW0Eopmi/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1wzNvwjQ85TX6jqrN90pQ0XeVMW0Eopmi&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬","珍稀"]},{"id":"dog-alligator","code":"DR2","name":"鱷魚菲力","subtitle":"鱷魚菲力佐番茄山藥","series":"珍稀超級主食","primaryFunction":"清爽低敏","unit":"pack","kcalPerUnit":167.7,"kcalStatus":"confirmed","ingredients":"鱷魚菲力、鬼頭刀、山藥、番茄、紅扁豆、芹菜、魚油、魚水解蛋白、綜合維生素、綜合礦物質","allergenIds":["otherFish","beans"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-alligator","sourceImageUrl":"https://drive.google.com/file/d/1Q-A6vEw6Fj8VFunuL1Y1KJQy9u1GuWcG/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1Q-A6vEw6Fj8VFunuL1Y1KJQy9u1GuWcG&sz=w640","species":["dog"],"sortGroup":1,"tags":["鮮食包","犬","珍稀"]},{"id":"cat-chicken","code":"C3","name":"輕輕鬆鬆","subtitle":"嫩煎雞腿佐葵花籽","series":"科學機能配方","primaryFunction":"情緒舒緩","unit":"pack","kcalPerUnit":121.6,"kcalStatus":"confirmed","ingredients":"雞腿肉、胡蘿蔔、菠菜、昆布、葵花籽粉、蛤蜊、蘋果醋、綜合維生素、綜合礦物質","allergenIds":["chicken"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-chicken","sourceImageUrl":"https://drive.google.com/file/d/1oRFt94a7jHRfcTDgbmHWc-Yt7xHMyHEF/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1oRFt94a7jHRfcTDgbmHWc-Yt7xHMyHEF&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓"]},{"id":"cat-salmon","code":"C2","name":"腸腸久久","subtitle":"銀鮭干貝雜炊","series":"科學機能配方","primaryFunction":"腸胃調理","unit":"pack","kcalPerUnit":100.7,"kcalStatus":"confirmed","ingredients":"雞胸肉、鮭魚肉、干貝、紅藜麥、地瓜、芥菜、薑、昆布、綜合維生素、綜合礦物質","allergenIds":["chicken","salmon","grains"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-salmon","sourceImageUrl":"https://drive.google.com/file/d/1ReaAWPfBbcqH7EPTOOC-V6IDN7jaUdGE/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1ReaAWPfBbcqH7EPTOOC-V6IDN7jaUdGE&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓"]},{"id":"cat-beef","code":"C1","name":"免免強強","subtitle":"菲力牛佐無花果紅藜","series":"科學機能配方","primaryFunction":"體質調理","unit":"pack","kcalPerUnit":115.1,"kcalStatus":"confirmed","ingredients":"牛肉、干貝、鮪魚、牛腎、紅藜麥、無花果、全蛋、杏仁粉、綜合維生素、綜合礦物質","allergenIds":["beef","otherFish","egg","grains"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-beef","sourceImageUrl":"https://drive.google.com/file/d/1N6ZN84E7tCKYZlWosOBegcMNEUma2XQT/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1N6ZN84E7tCKYZlWosOBegcMNEUma2XQT&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓"]},{"id":"lowallergy-cat-fish","code":"","name":"低敏輕輕鬆鬆","subtitle":"白蝦銀鯡輕煮煲","series":"低敏呵護機能","primaryFunction":"情緒舒緩","unit":"pack","kcalPerUnit":143.17,"kcalStatus":"confirmed","ingredients":"銀帶鯡、蟹腿肉、白蝦仁、地瓜、卵磷脂、甘藍、魚油、綜合維生素、綜合礦物質","allergenIds":["otherFish","shrimp","crab"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/lowallergy-cat-fish","sourceImageUrl":"https://drive.google.com/file/d/1q64iI3YRCeEWxvHkQBGu-jO8-XldiSga/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1q64iI3YRCeEWxvHkQBGu-jO8-XldiSga&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓","低敏"]},{"id":"lowallergy-cat-boar","code":"","name":"低敏腸腸久久","subtitle":"慢燉山豚甘藍薏仁羹","series":"低敏呵護機能","primaryFunction":"腸胃調理","unit":"pack","kcalPerUnit":101.48,"kcalStatus":"confirmed","ingredients":"山野豚腿、牛肝、高麗菜、薏仁、豆類、綜合維生素、綜合礦物質","allergenIds":["pork","beans","grains"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products","sourceImageUrl":"https://drive.google.com/file/d/1hhVyhkPWPD3e480W0S-uaquq9eO32gd8/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1hhVyhkPWPD3e480W0S-uaquq9eO32gd8&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓","低敏"]},{"id":"cat-senior","code":"C5","name":"百百歲歲","subtitle":"野生鱸煨牛筋清湯","series":"白金照護配方","primaryFunction":"中高齡適用","unit":"pack","kcalPerUnit":105.28,"kcalStatus":"confirmed","ingredients":"野生鱸魚、鴨肉、鱸魚精、牛腳筋、地瓜、魚油、綜合維生素、綜合礦物質","allergenIds":["otherFish","duck","beef"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-senior","sourceImageUrl":"https://drive.google.com/file/d/1JlGrVvjE0EMNzFgWu9d5thaMwvoPO04g/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1JlGrVvjE0EMNzFgWu9d5thaMwvoPO04g&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓"]},{"id":"cat-rabbit","code":"C6","name":"通通順順","subtitle":"金鯷慢燉兔菲力","series":"白金照護配方","primaryFunction":"呼吸道保養","unit":"pack","kcalPerUnit":98.24,"kcalStatus":"confirmed","ingredients":"兔菲力、金鯷、豆類、蔬菜、綜合維生素、綜合礦物質","allergenIds":["otherFish","beans"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-set-7","sourceImageUrl":"https://drive.google.com/file/d/1pISO4L3vt5mkTPgnlhEdAkusRJqmibek/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1pISO4L3vt5mkTPgnlhEdAkusRJqmibek&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓"]},{"id":"cat-urinary","code":"C7","name":"排排暢暢","subtitle":"甘露糖燒鴨胸","series":"白金照護配方","primaryFunction":"泌尿系統維護","unit":"pack","kcalPerUnit":96.79,"kcalStatus":"confirmed","ingredients":"慢煎鴨胸、野生鯖魚、滴雞精、雞胗、大麥仁、小米、蔓越莓、甘露糖、魚油、綜合維生素、綜合礦物質","allergenIds":["duck","otherFish","grains"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-urinary","sourceImageUrl":"https://drive.google.com/file/d/1xWYxVUfZ3nRkV9E3VRoT50tJ7D5qursd/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1xWYxVUfZ3nRkV9E3VRoT50tJ7D5qursd&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓"]},{"id":"cat-ckd-m1","code":"C4","name":"腎腎力力 CKD-M1","subtitle":"鮮燉鮪魚南瓜粥","series":"璟逸研發處方","primaryFunction":"腎臟機能養護","unit":"pack","kcalPerUnit":36.46,"kcalStatus":"confirmed","ingredients":"鮪魚、蘑菇、南瓜、羊腎、黑秈糯米、滴雞精、鯷魚、魚油、干貝、綜合維生素、綜合礦物質","allergenIds":["otherFish","grains"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-ckd-m1","sourceImageUrl":"https://drive.google.com/file/d/1K-DxMoM15Dr4B5ZCNl47Y9V-V7VEVq60/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1K-DxMoM15Dr4B5ZCNl47Y9V-V7VEVq60&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓","處方"]},{"id":"cat-jump","code":"C8","name":"喵喵跳跳","subtitle":"嫩煮火雞菠菜菇菇煲","series":"璟逸研發處方","primaryFunction":"體重管理","unit":"pack","kcalPerUnit":67.68,"kcalStatus":"confirmed","ingredients":"火雞、菠菜、菇類、牛肝、牛腎、豆類、綜合維生素、綜合礦物質","allergenIds":["turkey","beans"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products","sourceImageUrl":"https://drive.google.com/file/d/1_MEpKw7bEVs2UjrSmah9exd5c65nbnEY/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1_MEpKw7bEVs2UjrSmah9exd5c65nbnEY&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓","處方"]},{"id":"cat-kangaroo","code":"CR1","name":"野生袋鼠","subtitle":"野燉袋鼠南瓜燕麥炊","series":"珍稀超級主食","primaryFunction":"溫補低敏","unit":"pack","kcalPerUnit":92.79,"kcalStatus":"confirmed","ingredients":"野生袋鼠、南瓜、燕麥、櫛瓜、蘑菇、昆布、魚油、干貝、綜合維生素、綜合礦物質","allergenIds":["grains","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products","sourceImageUrl":"https://drive.google.com/file/d/1poIPRoQlh8ktx-DNMVIFL-WClh_zNol6/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1poIPRoQlh8ktx-DNMVIFL-WClh_zNol6&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓","珍稀"]},{"id":"cat-alligator","code":"CR2","name":"鱷魚菲力","subtitle":"鱷魚菲力佐紅薯菠菜","series":"珍稀超級主食","primaryFunction":"清爽低敏","unit":"pack","kcalPerUnit":87.36,"kcalStatus":"confirmed","ingredients":"鱷魚菲力、紅薯、綠豆、菠菜、芹菜、卵磷脂、干貝、昆布、綜合維生素、綜合礦物質","allergenIds":["beans"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-alligator","sourceImageUrl":"https://drive.google.com/file/d/1Nh3IubYOGYZTeTWEHVcFVPnCM9TfXJy-/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1Nh3IubYOGYZTeTWEHVcFVPnCM9TfXJy-&sz=w640","species":["cat"],"sortGroup":1,"tags":["鮮食包","貓","珍稀"]},{"id":"cat-treat-chicken","code":"CP1","name":"初乳雞","subtitle":"雞肉葵花籽情緒穩定配方","series":"泥好好吃","primaryFunction":"情緒舒緩","unit":"stick","kcalPerUnit":23.02,"kcalStatus":"confirmed","ingredients":"雞胸肉、雞肝、初乳蛋白、雞心、雞油、葵花籽粉、蛤蜊、滴雞精、綜合維生素、綜合礦物質","allergenIds":["chicken"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-treat-chicken","sourceImageUrl":"https://drive.google.com/file/d/1rZUMDu0WQ3rFvGD1f9TIkOcKtKrD3Q_Y/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1rZUMDu0WQ3rFvGD1f9TIkOcKtKrD3Q_Y&sz=w640","species":["cat"],"sortGroup":2,"tags":["泥好好吃","貓"]},{"id":"cat-treat-salmon","code":"CP2","name":"初乳鮭","subtitle":"鮭魚藜麥腸胃保健","series":"泥好好吃","primaryFunction":"腸胃調理","unit":"stick","kcalPerUnit":18,"kcalStatus":"confirmed","ingredients":"雞胸肉、鮭魚、滴雞精、雞肝、地瓜、干貝、雞油、藜麥、芥菜、魚油、綜合維生素、綜合礦物質","allergenIds":["chicken","salmon","grains","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-treat-salmon","sourceImageUrl":"https://drive.google.com/file/d/1uJAQjJDklsDVydgzHuGnOTaY5NR-tHil/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1uJAQjJDklsDVydgzHuGnOTaY5NR-tHil&sz=w640","species":["cat"],"sortGroup":2,"tags":["泥好好吃","貓"]},{"id":"cat-treat-beef","code":"CP3","name":"初乳牛","subtitle":"牛肉黑鮪紅藜補充體力","series":"泥好好吃","primaryFunction":"體質調理","unit":"stick","kcalPerUnit":23.99,"kcalStatus":"confirmed","ingredients":"菲力牛、黑鮪魚、雞心、雞肝、牛腎、紅藜麥、干貝、全蛋、魚油、綜合維生素、綜合礦物質","allergenIds":["beef","otherFish","egg","grains"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-treat-beef","sourceImageUrl":"https://drive.google.com/file/d/1Jbdwoavp1yanDid6aPCED5C9k3nQ1GbT/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1Jbdwoavp1yanDid6aPCED5C9k3nQ1GbT&sz=w640","species":["cat"],"sortGroup":2,"tags":["泥好好吃","貓"]},{"id":"cat-treat-kangaroo","code":"CP4","name":"野生袋鼠","subtitle":"袋鼠南瓜燕麥配方","series":"泥好好吃","primaryFunction":"溫補低敏","unit":"stick","kcalPerUnit":14.14,"kcalStatus":"confirmed","ingredients":"野生袋鼠、南瓜、燕麥、櫛瓜、蘑菇、昆布、魚油、干貝、綜合維生素、綜合礦物質","allergenIds":["grains","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-treat-kangaroo","sourceImageUrl":"https://drive.google.com/file/d/1hii4L429MkD-c_QlqUU49dJ8KY6dqZFv/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1hii4L429MkD-c_QlqUU49dJ8KY6dqZFv&sz=w640","species":["cat"],"sortGroup":2,"tags":["泥好好吃","貓"]},{"id":"cat-treat-alligator","code":"CP5","name":"鱷魚菲力","subtitle":"鱷魚菠菜高蛋白配方","series":"泥好好吃","primaryFunction":"清爽低敏","unit":"stick","kcalPerUnit":15.73,"kcalStatus":"confirmed","ingredients":"鱷魚菲力、地瓜、綠豆、菠菜、芹菜、卵磷脂、干貝、初乳、昆布、綜合維生素、綜合礦物質","allergenIds":["beans"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/cat-treat-alligator","sourceImageUrl":"https://drive.google.com/file/d/1u8Aew0EzIZUBTGx6ytiz3nRTAVOuBjtq/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1u8Aew0EzIZUBTGx6ytiz3nRTAVOuBjtq&sz=w640","species":["cat"],"sortGroup":2,"tags":["泥好好吃","貓"]},{"id":"dog-treat-pork","code":"DP1","name":"初乳豚","subtitle":"松阪豬營養配方","series":"泥好好吃","primaryFunction":"皮毛保養","unit":"stick","kcalPerUnit":16.01,"kcalStatus":"confirmed","ingredients":"松阪豬、蔬菜、初乳、綜合維生素、綜合礦物質","allergenIds":["pork"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-treat-pork","sourceImageUrl":"https://drive.google.com/file/d/1WG7uOabcT1hrewTn4vwzwZrHfVYHegsD/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1WG7uOabcT1hrewTn4vwzwZrHfVYHegsD&sz=w640","species":["dog"],"sortGroup":2,"tags":["泥好好吃","犬"]},{"id":"dog-treat-turkey","code":"DP2","name":"初乳火雞","subtitle":"火雞牛肉雙蛋白","series":"泥好好吃","primaryFunction":"體質調理","unit":"stick","kcalPerUnit":19.25,"kcalStatus":"confirmed","ingredients":"火雞胸、菲力牛排、花椰菜、紅椒、豆腐、黑鮪魚、沙丁魚、蛤蜊、初乳、綜合維生素、綜合礦物質","allergenIds":["turkey","beef","beans","otherFish"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-treat-sardine","sourceImageUrl":"https://drive.google.com/file/d/18E1zrVfVr0PK3NOWPpXP6RHmA_eowvhY/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=18E1zrVfVr0PK3NOWPpXP6RHmA_eowvhY&sz=w640","species":["dog"],"sortGroup":2,"tags":["泥好好吃","犬"]},{"id":"dog-treat-kangaroo","code":"DP3","name":"野生袋鼠","subtitle":"袋鼠黑鮪低敏配方","series":"泥好好吃","primaryFunction":"溫補低敏","unit":"stick","kcalPerUnit":12.14,"kcalStatus":"confirmed","ingredients":"野生袋鼠、黑鮪魚、南瓜、甘藍、小米、魚油、綜合維生素、綜合礦物質","allergenIds":["otherFish","grains"],"allergenStatus":"confirmed","productUrl":"https://www.pawsup365.com/products/dog-treat-kangaroo","sourceImageUrl":"https://drive.google.com/file/d/1sqAWtCxQz9JXhP8l-2swN7lXWdmmuOWW/view?usp=drive_link","imageUrl":"https://drive.google.com/thumbnail?id=1sqAWtCxQz9JXhP8l-2swN7lXWdmmuOWW&sz=w640","species":["dog"],"sortGroup":2,"tags":["泥好好吃","犬"]}]`),Vi=`data:image/webp;base64,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`,Hi=X(`<section class="empty-result" aria-label="尚未計算"><span class="empty-result__icon" aria-hidden="true"></span> <div><h2>完成輸入後按下計算，這裡會顯示每日熱量與推薦口味。</h2> <p>計算後可以即時勾選要避開的食材，不會改變熱量公式。</p></div></section>`),Ui=X(`<main class="pawpaw-calculator"><header class="app-header"><div class="brand-header"><a class="brand-lockup" target="_blank" rel="noreferrer"><img alt="年年 PAWPAW"/></a></div> <div class="header-copy"><h1>幫毛孩找到<br/>剛剛好的每日飯飯量</h1> <p>輸入體重與身體狀態，就能換算每日的餵食份量！</p></div></header> <section class="workspace-section"><div class="calculator-card" aria-labelledby="calculator-form-title"><div class="card-heading"><div><h2 id="calculator-form-title">毛孩資料</h2></div></div> <!></div> <aside aria-labelledby="formula-card-title"><div class="card-heading"><div><span>說明</span> <h2 id="formula-card-title">怎麼估算的？</h2></div> <button class="formula-toggle" type="button" aria-controls="formula-list"><span aria-hidden="true"> </span></button></div> <div id="formula-list" class="formula-list"><article><span>每日熱量</span> <strong>以 WSAVA 與 NRC 兩種常用公式平均。</strong></article> <article><span>份量換算</span> <strong>每日所需熱量除以年年產品每份熱量值，即為建議餵食量。</strong></article></div></aside></section> <div class="result-anchor"><!></div></main>`);function Wi(e,t){Re(t,!1);let n=zt(),r=Ri,i=zi,a=Bi,o=zt({...Ni}),s=zt({}),c=zt(null),l=zt(),u=zt(``),d=zt(!1),f=zt(!1);function p(e){return JSON.stringify({species:e.species,weightKg:e.weightKg,lifeStage:e.lifeStage,juvenileAgeBand:e.juvenileAgeBand,neuterStatus:e.neuterStatus})}async function m(){if(I(s,Ii(q(o))),Object.keys(q(s)).length>0){I(c,null);return}I(u,p(q(o))),I(d,!0),I(c,Fi(q(o),a)),await nr();let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`;q(l)?.scrollIntoView({behavior:e,block:`start`})}bn(()=>q(o),()=>{I(n,p(q(o)))}),bn(()=>(q(d),q(u),q(n)),()=>{q(d)&&q(u)&&q(n)!==q(u)&&(I(c,null),I(d,!1))}),bn(()=>(q(d),q(u),q(n),q(o)),()=>{q(d)&&q(u)&&q(n)===q(u)&&I(c,Fi(q(o),a))}),xn(),$r();var h=Ui(),g=L(h),_=L(g),v=L(_),y=L(v);j(v),j(_),Oe(2),j(g);var b=R(g,2),x=L(b);pi(R(L(x),2),{get errors(){return q(s)},get value(){return q(o)},set value(e){I(o,e)},$$events:{submit:m},$$legacy:!0}),j(x);var S=R(x,2);let C;var w=L(S),T=R(L(w),2),E=L(T),ee=L(E,!0);j(E),j(T),j(w),Oe(2),j(S),j(b);var te=R(b,2),ne=L(te),D=e=>{Ei(e,{get result(){return q(c)},get allergens(){return r},get nutritionArticleUrl(){return J(()=>i.nutritionArticleUrl)},get allergenIds(){return q(o).allergenIds},set allergenIds(e){Bt(o,q(o).allergenIds=e)},$$legacy:!0})},re=e=>{Z(e,Hi())};wr(ne,e=>{q(c)?e(D):e(re,-1)}),j(te),Zr(te,e=>I(l,e),()=>q(l)),j(h),z(()=>{$(v,`href`,J(()=>i.shopUrl)),$(y,`src`,Vi),C=Lr(S,1,`formula-card`,null,C,{expanded:q(f)}),$(T,`aria-expanded`,q(f)),$(T,`aria-label`,q(f)?`收合估算說明`:`展開估算說明`),Q(ee,q(f)?`−`:`+`)}),fr(`click`,T,()=>I(f,!q(f))),Z(e,h),ze()}var Gi=`:root {
  color: #193f4c;
  background: #f6f6f6;
  font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  background: #f6f6f6;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
  color: #000000;
}

img {
  max-width: 100%;
}

.pawpaw-calculator {
  --brand-blue: #a2d8e6;
  --brand-blue-soft: #e9f7fb;
  --brand-blue-dark: #006a84;
  --brand-pink: #c74060;
  --brand-pink-soft: #fff0f4;
  --brand-cream: #fff8f2;
  --brand-ink: #193f4c;
  --brand-muted: #667e87;
  --brand-line: #d4ebf1;
  --brand-card: rgba(255, 255, 255, 0.94);
  --shadow-airy: 0 14px 34px rgba(0, 106, 132, 0.08);
  --shadow-hover: 0 16px 32px rgba(0, 106, 132, 0.13);
  --focus-ring: 0 0 0 4px rgba(162, 216, 230, 0.46);
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 28px 18px 56px;
  color: var(--brand-ink);
}

.pawpaw-calculator a {
  color: #000;
}

.app-header {
  display: grid;
  gap: 16px;
  align-items: start;
  margin-bottom: 0;
  padding: 18px 24px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  box-shadow: none;
}

.brand-header {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  width: fit-content;
  max-width: 100%;
}

.brand-lockup {
  display: inline-flex;
  align-items: center;
  width: min(280px, 52vw);
  min-height: 64px;
  text-decoration: none;
}

.brand-lockup img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.header-copy {
  min-width: 0;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  min-height: 28px;
  padding: 4px 10px;
  border: 1px solid rgba(199, 64, 96, 0.18);
  border-radius: 999px;
  color: var(--brand-pink);
  background: rgba(255, 240, 244, 0.9);
  font-size: 13px;
  font-weight: 800;
}

.header-copy h1,
.card-heading h2,
.result-hero h2,
.section-heading h3,
.empty-result h2 {
  margin: 0;
  color: #000000;
  letter-spacing: 0;
}

.header-copy h1 {
  color: #000000;
  font-size: 34px;
  line-height: 1.2;
}

.header-copy h1 br {
  display: none;
}

.header-copy p,
.card-heading p,
.result-hero p,
.section-heading p,
.empty-result p,
.quiet-card p {
  margin: 6px 0 0;
  color: var(--brand-muted);
  font-size: 14px;
  line-height: 1.7;
}

.calculator-card,
.formula-card,
.empty-result,
.results-panel {
  border: 1px solid rgba(0, 106, 132, 0.1);
  border-radius: 8px;
  background: var(--brand-card);
  box-shadow: var(--shadow-airy);
}

.calculator-card,
.formula-card,
.results-panel {
  padding: 24px;
}

.workspace-section {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.6fr);
  gap: 18px;
  align-items: start;
}

.formula-card {
  background: #ffffff;
}

.formula-list {
  display: grid;
  gap: 10px;
}

.formula-list article {
  display: grid;
  gap: 6px;
  padding: 14px;
  border: 1px solid rgba(0, 106, 132, 0.08);
  border-radius: 8px;
  background: rgba(233, 247, 251, 0.55);
}

.formula-list span {
  color: var(--brand-muted);
  font-size: 13px;
  font-weight: 900;
}

.formula-list strong {
  color: var(--brand-ink);
  font-size: 14px;
  line-height: 1.55;
}

.card-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.card-heading span {
  display: inline-flex;
  margin-bottom: 5px;
  color: #000;
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
}

.card-heading h2 {
  font-size: 24px;
  line-height: 1.28;
}

.formula-card .card-heading {
  position: relative;
  align-items: center;
  min-height: 44px;
  padding-right: 44px;
  margin-bottom: 0;
}

.formula-card.expanded .card-heading {
  margin-bottom: 20px;
}

.formula-card .formula-list {
  display: none;
}

.formula-card.expanded .formula-list {
  display: grid;
}

.formula-toggle {
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  color: #000000;
  background: transparent;
  cursor: pointer;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
}

.formula-toggle > span {
  margin: 0;
  color: #000000;
  font-size: inherit;
  line-height: 1;
}

.formula-toggle:hover {
  opacity: 0.6;
}

.formula-toggle:focus-visible {
  outline: 2px solid #000000;
  outline-offset: 2px;
}

.calculator-form {
  display: grid;
  gap: 18px;
}

.field-group--species {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.field-group--species button,
.chip-grid button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 0;
  min-height: 46px;
  border: 1px solid var(--brand-line);
  border-radius: 999px;
  color: #000000;
  background: rgba(255, 255, 255, 0.74);
  font-weight: 800;
  line-height: 1.2;
  transition:
    border-color 180ms ease-out,
    background-color 180ms ease-out,
    color 180ms ease-out,
    box-shadow 180ms ease-out;
}

.field-group--species button svg,
.chip-grid button svg,
.submit-button svg,
.notice-card svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
  flex: 0 0 auto;
}

.field-group--species .species-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  flex: 0 0 auto;
}

.field-group--species button:hover,
.chip-grid button:hover {
  border-color: rgba(0, 106, 132, 0.34);
  box-shadow: 0 8px 18px rgba(0, 106, 132, 0.08);
}

.field-group--species button.active {
  border-color: rgba(0, 106, 132, 0.32);
  color: #000000;
  background: #a1d8e6;
}

.chip-grid button.active {
  border-color: rgba(199, 64, 96, 0.24);
  color: #fff;
  background: #000;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.field {
  display: grid;
  gap: 7px;
  min-width: 0;
  color: #000;
  font-weight: 800;
}

.field span,
.allergen-field legend {
  font-size: 14px;
}

.field select,
.field input {
  width: 100%;
  min-height: 46px;
  border: 1px solid var(--brand-line);
  border-radius: 8px;
  outline: none;
  color: #000;
  background: rgba(255, 255, 255, 0.9);
  transition:
    border-color 180ms ease-out,
    box-shadow 180ms ease-out,
    background-color 180ms ease-out;
}

.field select {
  appearance: none;
  padding: 0 38px 0 12px;
  background-image:
    linear-gradient(45deg, transparent 50%, var(--brand-blue-dark) 50%),
    linear-gradient(135deg, var(--brand-blue-dark) 50%, transparent 50%);
  background-position:
    calc(100% - 18px) 20px,
    calc(100% - 13px) 20px;
  background-size:
    5px 5px,
    5px 5px;
  background-repeat: no-repeat;
}

.field input {
  padding: 0 12px;
}

.field select:focus,
.field input:focus,
.input-shell:focus-within {
  border-color: rgba(0, 106, 132, 0.48);
  box-shadow: var(--focus-ring);
  background-color: #ffffff;
}

.input-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  border: 1px solid var(--brand-line);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  transition:
    border-color 180ms ease-out,
    box-shadow 180ms ease-out,
    background-color 180ms ease-out;
}

.input-shell input {
  min-height: 44px;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.input-shell strong {
  padding: 0 12px 0 8px;
  color: #000;
  font-size: 13px;
}

.input-shell.error {
  border-color: rgba(199, 64, 96, 0.72);
}

.field-error {
  color: var(--brand-pink);
  font-size: 12px;
  line-height: 1.5;
}

.allergen-field {
  min-width: 0;
  margin: 0;
  padding: 14px;
  border: 1px solid rgba(0, 106, 132, 0.1);
  border-radius: 8px;
  background: #a1d8e6;
}

.allergen-field legend {
  padding: 0 7px;
  color: var(--brand-blue-dark);
  font-weight: 900;
}

.allergen-field--result {
  display: grid;
  gap: 12px;
}

.allergen-section {
  display: grid;
  gap: 12px;
}

.allergen-field__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.allergen-field__heading p {
  margin: 0;
  color: #000;
  font-size: 13px;
  line-height: 1.6;
}

.clear-filter-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  min-height: 34px;
  padding: 0 12px;
  border: 1px solid rgba(199, 64, 96, 0.2);
  border-radius: 999px;
  color: #000000;
  background: #ffffff;
  font-size: 13px;
  font-weight: 900;
}

.clear-filter-button:hover {
  background: var(--brand-pink-soft);
}

.chip-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 9px;
}

.chip-grid button {
  min-height: 42px;
  padding: 0 10px;
  font-size: 13px;
  white-space: normal;
  overflow-wrap: anywhere;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 52px;
  border: 0;
  border-radius: 8px;
  color: #ffffff;
  background: #000000;
  font-weight: 900;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18);
  transition:
    background-color 180ms ease-out,
    box-shadow 180ms ease-out;
}

.submit-button:hover {
  background: #1a1a1a;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.24);
}

.submit-button:focus-visible,
.field-group--species button:focus-visible,
.chip-grid button:focus-visible,
.clear-filter-button:focus-visible,
.pawpaw-product-card:focus-visible,
.text-link:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.result-anchor {
  scroll-margin-top: 18px;
  margin-top: 18px;
}

.empty-result {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 22px 24px;
}

.empty-result__icon {
  position: relative;
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(0, 106, 132, 0.16);
  border-radius: 50%;
  background: var(--brand-blue-soft);
}

.empty-result__icon::before,
.empty-result__icon::after {
  content: "";
  position: absolute;
  border-radius: 999px;
  background: var(--brand-blue-dark);
}

.empty-result__icon::before {
  width: 18px;
  height: 2px;
  left: 12px;
  top: 20px;
}

.empty-result__icon::after {
  width: 2px;
  height: 18px;
  left: 20px;
  top: 12px;
}

.empty-result h2 {
  font-size: 20px;
  line-height: 1.38;
}

.results-panel {
  display: grid;
  gap: 24px;
}

.result-hero,
.section-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.result-hero h2 {
  margin-top: 9px;
  font-size: 28px;
  line-height: 1.2;
}

.text-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0 12px;
  margin-top: 8px;
  border: 1px solid var(--brand-line);
  border-radius: 999px;
  color: #000000;
  background: var(--brand-blue-soft);
  font-size: 13px;
  font-weight: 900;
  text-decoration: none;
}

.metric-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 12px;
}

.metric-card {
  min-width: 0;
  padding: 16px;
  border: 1px solid rgba(0, 106, 132, 0.1);
  border-radius: 8px;
  background: #a1d8e6;
}

.metric-card span,
.pawpaw-product-card-meta,
.pawpaw-product-card-numbers span,
.notice-card li,
.pawpaw-status-label {
  font-size: 13px;
}

.metric-card span {
  display: block;
  color: #000;
  font-weight: 900;
}

.metric-card strong {
  display: block;
  margin-top: 8px;
  color: #000;
  font-size: 24px;
  line-height: 1.18;
  overflow-wrap: anywhere;
}

.metric-card small {
  display: block;
  margin-top: 8px;
  color: #000;
  line-height: 1.5;
}

.result-section {
  display: grid;
  gap: 14px;
}

.section-heading h3 {
  font-size: 22px;
  line-height: 1.28;
}

.pawpaw-product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.pawpaw-product-card {
  position: relative;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(0, 106, 132, 0.1);
  border-radius: 8px;
  background: #f6f6f6;
  text-decoration: none;
  transition:
    border-color 180ms ease-out,
    box-shadow 180ms ease-out;
}

.pawpaw-product-card::after {
  content: "";
  position: absolute;
  right: 12px;
  bottom: 10px;
  width: 28px;
  height: 18px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 36'%3E%3Cpath d='M13 18H48M34 5l14 13-14 13' fill='none' stroke='%23000' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center / contain no-repeat;
  pointer-events: none;
  transition: transform 180ms ease-out;
}

.pawpaw-product-card:hover {
  border-color: rgba(0, 106, 132, 0.3);
  box-shadow: var(--shadow-hover);
}

.pawpaw-product-card:hover::after {
  transform: translateX(2px);
}

.pawpaw-product-card--blocked {
  background: #f6f6f6;
}

.pawpaw-product-image-well {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f6f6f6;
}

.pawpaw-product-image-well img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pawpaw-product-card-body {
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
  gap: 8px;
  min-width: 0;
  padding: 12px;
}

.pawpaw-product-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: var(--brand-muted);
  font-weight: 900;
  line-height: 1.3;
}

.pawpaw-product-card-meta span:first-child,
.pawpaw-product-card-numbers span {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pawpaw-product-card-meta span:last-child {
  flex: 0 0 auto;
  color: #a1d8e6;
}

.pawpaw-product-card h4 {
  min-width: 0;
  margin: 0;
  color: #000000;
  font-size: 18px;
  line-height: 1.28;
  overflow-wrap: anywhere;
}

.pawpaw-product-card p {
  min-width: 0;
  margin: 0;
  color: var(--brand-muted);
  font-size: 13px;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.pawpaw-product-card-numbers {
  display: grid;
  gap: 5px;
  align-self: end;
  min-width: 0;
  padding-top: 4px;
}

.pawpaw-product-card-numbers span {
  color: var(--brand-muted);
  font-weight: 800;
}

.pawpaw-product-card-numbers strong {
  color: var(--brand-ink);
  font-size: 17px;
  line-height: 1.25;
  overflow-wrap: anywhere;
}

.pawpaw-status-label {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  width: fit-content;
  max-width: 100%;
  padding: 4px 9px;
  border: 1px solid #a1d8e6;
  border-radius: 999px;
  color: #000000;
  background: #a1d8e6;
  font-weight: 900;
  line-height: 1.3;
}

.pawpaw-status-label--ready {
  border-color: #a1d8e6;
  color: #000000;
  background: #a1d8e6;
}

.quiet-card,
.notice-card {
  border: 1px solid rgba(0, 106, 132, 0.1);
  border-radius: 8px;
  background: #ffffff;
}

.quiet-card {
  padding: 16px;
}

.notice-card {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px;
  color: #000000;
  background: #f6f6f6;
}

.notice-card svg {
  flex: 0 0 auto;
  margin-top: 2px;
}

.notice-card ul {
  margin: 0;
  padding-left: 18px;
}

.notice-card li {
  line-height: 1.65;
}

.notice-card li + li {
  margin-top: 4px;
}

@media (max-width: 940px) {
  .workspace-section {
    grid-template-columns: 1fr;
  }

  .pawpaw-product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .metric-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .pawpaw-calculator {
    padding: 18px 12px 42px;
  }

  .app-header {
    padding: 14px 18px;
  }

  .brand-header {
    display: grid;
    justify-items: start;
    gap: 8px;
  }

  .brand-lockup {
    width: min(300px, 82vw);
    min-height: 64px;
  }

  .header-copy h1 {
    font-size: 28px;
  }

  .header-copy h1 br {
    display: initial;
  }

  .calculator-card,
  .formula-card,
  .results-panel {
    padding: 18px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .chip-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .allergen-field__heading {
    display: grid;
    justify-items: start;
  }

  .result-hero,
  .section-heading {
    display: grid;
    gap: 8px;
  }

  .pawpaw-product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .pawpaw-product-card-body {
    padding: 10px 10px 24px;
  }

  .pawpaw-product-card h4 {
    font-size: 16px;
  }

  .pawpaw-product-card-numbers strong {
    font-size: 15px;
  }

  .notice-card {
    display: grid;
  }
}

@media (max-width: 430px) {
  .field-group--species {
    gap: 8px;
  }

  .empty-result {
    align-items: flex-start;
    padding: 18px;
  }

  .pawpaw-product-card-meta,
  .pawpaw-product-card p,
  .pawpaw-product-card-numbers span,
  .notice-card li,
  .pawpaw-status-label {
    font-size: 12px;
  }
}
`,Ki=`pawpaw-calculator-shopline`,qi=`data-pawpaw-calculator-mounted`;function Ji(){return`
:host {
  display: block;
  width: 100%;
  color-scheme: light;
}

${Gi.replace(/:root\s*\{/g,`:host {`).replace(/body\s*\{/g,`:host {`)}
`}function Yi(){let e=document.currentScript,t=e?.dataset.target;if(t){let e=document.querySelector(t);if(e)return e}let n=e?.previousElementSibling;if(n instanceof HTMLElement&&n.id===Ki)return n;let r=document.getElementById(Ki);if(r)return r;let i=document.createElement(`div`);return i.id=Ki,e?.parentNode?e.parentNode.insertBefore(i,e):document.body.append(i),i}function Xi(){let e=Yi();if(e.getAttribute(qi)===`true`)return;e.setAttribute(qi,`true`);let t=e.shadowRoot??e.attachShadow({mode:`open`}),n=document.createElement(`style`),r=document.createElement(`div`);t.textContent=``,n.textContent=Ji(),r.setAttribute(`part`,`root`),t.append(n,r),yr(Wi,{target:r})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,Xi,{once:!0}):Xi()})();