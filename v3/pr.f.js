window.__lpIC={"lp-lg_aria": "lg_aria"};window.__lpST=["hidden", "is-menu", "is-open", "lp-nav-on", "lp9_dots", "on"];window.__lpHID=[["save", 0, "inline"], ["save", 1, "inline"], ["save", 2, "inline"]];
(function(){var d=document;var IM=window.__lpIC||{};d.querySelectorAll('img[class]').forEach(function(e){if(e.hasAttribute('data-c'))return;var a=[].slice.call(e.classList);a.forEach(function(c){var v=IM[c];if(v)e.setAttribute('data-c',v)})});d.querySelectorAll('[data-c]').forEach(function(e){e.getAttribute('data-c').split(/\s+/).forEach(function(c){c&&e.classList.add(c)})});(function(){var ST=window.__lpST||[];if(!ST.length)return;var isS=function(c){return ST.indexOf(c)>=0};var hasS=function(e){return (e.getAttribute('data-c')||'').split(/\s+/).some(isS)};var lpOf=function(e){return [].filter.call(e.classList,function(c){return c.indexOf('lp-')===0&&c!=='lp-d'&&c!=='lp-m'})[0]};var key=function(e){return (e.getAttribute('data-c')||'').split(/\s+/).filter(function(c){return c&&!isS(c)}).sort().join(' ')};var L=[].filter.call(d.querySelectorAll('[data-c]'),hasS),sw=[];L.forEach(function(e){var me=lpOf(e);if(!me)return;var k=key(e),tw=null,par=e.parentElement;if(par)[].some.call(par.children,function(s){if(s!==e&&s.tagName===e.tagName&&key(s)===k&&!hasS(s)&&lpOf(s)){tw=s;return true}});if(!tw&&k){[].some.call(d.querySelectorAll(e.tagName.toLowerCase()+'[data-c]'),function(s){if(s!==e&&key(s)===k&&!hasS(s)&&lpOf(s)){tw=s;return true}})}if(tw){var o=lpOf(tw);if(o&&o!==me)sw.push([e,me,o])}});sw.forEach(function(x){x[0].classList.remove(x[1]);x[0].classList.add(x[2])});L.forEach(function(e){e.setAttribute('data-c',key(e))})})();(function(){var H=window.__lpHID||[],by={};d.querySelectorAll('[data-c]').forEach(function(e){var k=e.getAttribute('data-c');(by[k]=by[k]||[]).push(e)});H.forEach(function(h){var e=(by[h[0]]||[])[h[1]];if(!e)return;e.hidden=true;e.setAttribute('data-lp-h','');e.style.setProperty('--lp-h',h[2])});var st=d.createElement('style');st.textContent='[data-lp-h]:not([hidden]){display:var(--lp-h)!important}[data-lp-h][hidden]{display:none!important}';d.head.appendChild(st);d.querySelectorAll('.w-form').forEach(function(w){var f=w.querySelector('form');if(!f)return;[].slice.call(w.classList).forEach(function(c){if(c.indexOf('lp-')===0){w.classList.remove(c);f.classList.add(c)}});w.classList.remove('w-form');[].forEach.call(w.querySelectorAll('.w-form-done,.w-form-fail'),function(x){x.parentNode.removeChild(x)});f.removeAttribute('data-wf-page-id');f.removeAttribute('data-wf-element-id');f.setAttribute('novalidate','')})})();d.querySelectorAll('[data-style]').forEach(function(e){e.style.cssText+=';'+e.getAttribute('data-style')});d.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[data-btn]');if(!a)return;e.preventDefault();if(a.getAttribute('data-btn')==='submit'){var f=a.closest('form');if(f){if(f.requestSubmit)f.requestSubmit();else f.dispatchEvent(new Event('submit',{cancelable:true}))}}},true);d.addEventListener('keydown',function(e){var a=e.target.closest&&e.target.closest('a[data-btn]');if(a&&e.key===' '){e.preventDefault();a.click()}});var p=location.pathname.replace(/\/$/,'')||'/';if(p!=='/'){d.querySelectorAll('header a[href]').forEach(function(a){if(a.getAttribute('href')===p)a.setAttribute('aria-current','page')});if(p==='/demo')d.querySelectorAll('header a[href="/demo"]').forEach(function(a){a.setAttribute('href','#form')});if(/^\/(soluzioni|sviluppatori|agenzie)$/.test(p))d.querySelectorAll('header [data-c~="lpn_t"]').forEach(function(t){t.style.color='#151515'})}})();

;

(function(){
  var fmt=function(n){return n.toLocaleString('it-IT')+' €';};
  document.querySelectorAll('.plan[data-m]').forEach(function(card){
    var sw=card.querySelector('.sw'), pv=card.querySelector('.pv'), lab=card.querySelector('.sw_l'), save=card.querySelector('.save');
    sw.addEventListener('click',function(){
      var on=sw.getAttribute('aria-pressed')!=='true';
      sw.setAttribute('aria-pressed',on);
      pv.textContent=fmt(+card.dataset[on?'y':'m']);
      lab.textContent=on?'Annuale':'Mensile';
      save.hidden=!on;
    });
  });
  var b=document.getElementById('burger'), m=document.getElementById('mnav');
  b.addEventListener('click',function(){var o=m.hidden; m.hidden=!o; b.setAttribute('aria-expanded',o);});
})();

;
(function(){var h=document.querySelector('.lpn');if(!h)return;
document.querySelectorAll('[data-lpn-dd]').forEach(function(d){var b=d.querySelector(':is(button,[data-btn])'),t;function o(){clearTimeout(t);d.classList.add('is-open');b.setAttribute('aria-expanded','true')}function c(){clearTimeout(t);t=setTimeout(function(){d.classList.remove('is-open');b.setAttribute('aria-expanded','false')},120)}
d.addEventListener('mouseenter',o);d.addEventListener('mouseleave',c);d.addEventListener('focusin',o);d.addEventListener('focusout',function(e){if(!d.contains(e.relatedTarget))c()});
b.addEventListener('click',function(){d.classList.contains('is-open')?(d.classList.remove('is-open'),b.setAttribute('aria-expanded','false')):o()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){d.classList.remove('is-open');b.setAttribute('aria-expanded','false')}})});
if(h.getAttribute('data-lpn')==='1'){var g=h.querySelector('.lpn_burger');g.addEventListener('click',function(){var on=h.classList.toggle('is-menu');g.setAttribute('aria-expanded',on?'true':'false');g.setAttribute('aria-label',on?'Chiudi il menu':'Apri il menu')});
h.querySelectorAll('.lpn_m a').forEach(function(a){a.addEventListener('click',function(){h.classList.remove('is-menu');g.setAttribute('aria-expanded','false')})})}
else{var m=h.querySelector('.lpn_m'),bb=h.querySelector('.lpn_burger');new MutationObserver(function(){h.classList.toggle('is-menu',!m.hasAttribute('hidden'))}).observe(m,{attributes:true,attributeFilter:['hidden']});m.setAttribute('hidden','');}
})();
;
(function(){var w=document.querySelector('.cmpw');if(!w)return;var b=[].slice.call(w.querySelectorAll('.cmp_tabs :is(button,[data-btn])'));b.forEach(function(x){x.addEventListener('click',function(){w.setAttribute('data-plan',x.dataset.p);b.forEach(function(y){y.setAttribute('aria-selected',y===x)})})})})();
;
(function(){var inr=document.querySelector('.lpn_in');if(!inr)return;
function rail(){var L={},R={},vw=innerWidth;[].slice.call(document.querySelectorAll('main *,body>div *,section,section *')).forEach(function(e){if(e.closest('header,.lpn,footer'))return;var b=e.getBoundingClientRect();if(b.height<300)return;var c=getComputedStyle(e);
if(c.borderLeftStyle!='none'&&parseFloat(c.borderLeftWidth)>0&&b.left>0&&b.left<vw/3){var k=Math.round(b.left);L[k]=(L[k]||0)+1}
if(c.borderRightStyle!='none'&&parseFloat(c.borderRightWidth)>0&&b.right<vw&&b.right>vw*2/3){var j=Math.round(b.right);R[j]=(R[j]||0)+1}});
function top(o,lo){var best=null,n=0;for(var k in o){k=+k;if(o[k]>n||(o[k]==n&&(lo?k<best:k>best))){n=o[k];best=k}}return n>=3?best:null}var s=Math.max(16,(vw-1292)/2);var a=top(L,1),z=top(R,0);return [a==null?s:a,z==null?vw-s:z]}
function go(){inr.style.paddingLeft='';inr.style.paddingRight='';if(innerWidth<992)return;var r=rail(),b=inr.getBoundingClientRect();if(r[0]==null||r[1]==null)return;
var pl=r[0]-b.left,pr=b.right-r[1];if(pl>=0&&pl<200&&pr>=0&&pr<200){inr.style.paddingLeft=pl+'px';inr.style.paddingRight=pr+'px'}}
var t;function q(){clearTimeout(t);t=setTimeout(go,120)}if(document.readyState!='loading')go();else addEventListener('DOMContentLoaded',go);addEventListener('load',go);addEventListener('resize',q)})();
;
window.LP9_CAROUSELS=[".plans"];
;
(function(){var mq=matchMedia('(max-width:767px)');var sels=window.LP9_CAROUSELS||[];
function build(){sels.forEach(function(sel){[].slice.call(document.querySelectorAll(sel)).forEach(function(el){if(el.__lp9)return;el.__lp9=1;var n=el.children.length;if(n<2)return;
var d=document.createElement('div');d.className='lp9_dots';d.setAttribute('aria-hidden','true');for(var i=0;i<n;i++){var b=document.createElement('i');if(!i)b.className='on';d.appendChild(b)}
el.parentNode.insertBefore(d,el.nextSibling);var t=0;el.addEventListener('scroll',function(){cancelAnimationFrame(t);t=requestAnimationFrame(function(){var c=el.children,best=0,bd=1e9,mid=el.getBoundingClientRect().left+el.clientWidth/2;
for(var i=0;i<c.length;i++){var r=c[i].getBoundingClientRect(),dd=Math.abs(r.left+r.width/2-mid);if(dd<bd){bd=dd;best=i}}[].forEach.call(d.children,function(x,j){x.className=j==best?'on':''})})},{passive:true})})})}
if(document.readyState!='loading')build();else document.addEventListener('DOMContentLoaded',build)})();
;
(function(){var h=document.querySelector('header.lpn');if(!h)return;function f(){h.classList.toggle('lp-nav-on',(window.scrollY||document.documentElement.scrollTop)>4)}f();addEventListener('scroll',f,{passive:true})})();
