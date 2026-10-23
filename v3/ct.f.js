window.__lpIC={};window.__lpST=["ct_chip", "is-cur", "is-done", "is-hidden", "is-off", "is-on", "is-sel"];window.__lpHID=[];
(function(){var d=document;var IM=window.__lpIC||{};d.querySelectorAll('img[class]').forEach(function(e){if(e.hasAttribute('data-c'))return;var a=[].slice.call(e.classList);a.forEach(function(c){var v=IM[c];if(v)e.setAttribute('data-c',v)})});d.querySelectorAll('[data-c]').forEach(function(e){e.getAttribute('data-c').split(/\s+/).forEach(function(c){c&&e.classList.add(c)})});(function(){var ST=window.__lpST||[];if(!ST.length)return;var isS=function(c){return ST.indexOf(c)>=0};var hasS=function(e){return (e.getAttribute('data-c')||'').split(/\s+/).some(isS)};var lpOf=function(e){return [].filter.call(e.classList,function(c){return c.indexOf('lp-')===0&&c!=='lp-d'&&c!=='lp-m'})[0]};var key=function(e){return (e.getAttribute('data-c')||'').split(/\s+/).filter(function(c){return c&&!isS(c)}).sort().join(' ')};var L=[].filter.call(d.querySelectorAll('[data-c]'),hasS),sw=[];L.forEach(function(e){var me=lpOf(e);if(!me)return;var k=key(e),tw=null,par=e.parentElement;if(par)[].some.call(par.children,function(s){if(s!==e&&s.tagName===e.tagName&&key(s)===k&&!hasS(s)&&lpOf(s)){tw=s;return true}});if(tw){var o=lpOf(tw);if(o&&o!==me)sw.push([e,me,o])}});sw.forEach(function(x){x[0].classList.remove(x[1]);x[0].classList.add(x[2])});L.forEach(function(e){e.setAttribute('data-c',key(e))})})();(function(){var H=window.__lpHID||[],by={};d.querySelectorAll('[data-c]').forEach(function(e){var k=e.getAttribute('data-c');(by[k]=by[k]||[]).push(e)});var lpo=function(e){return [].filter.call(e.classList,function(c){return c.indexOf('lp-')===0&&c!=='lp-d'&&c!=='lp-m'})[0]};H.forEach(function(h){var e=(by[h[0]]||[])[h[1]];if(!e)return;var tw=(by[h[0]]||[]).filter(function(x){return x!==e&&x.parentElement===e.parentElement&&x.tagName===e.tagName&&!H.some(function(k){return k[0]===h[0]&&by[h[0]][k[1]]===x})})[0];if(tw){var a=lpo(e),b=lpo(tw);if(a&&b&&a!==b){e.classList.remove(a);e.classList.add(b)}var dd=getComputedStyle(tw).display;if(dd&&dd!=='none')h[2]=dd}e.hidden=true;e.setAttribute('data-lp-h','');e.style.setProperty('--lp-h',h[2])});var st=d.createElement('style');st.textContent='[data-lp-h]:not([hidden]){display:var(--lp-h)!important}[data-lp-h][hidden]{display:none!important}';d.head.appendChild(st);d.querySelectorAll('.w-form').forEach(function(w){var f=w.querySelector('form');if(!f)return;[].slice.call(w.classList).forEach(function(c){if(c.indexOf('lp-')===0){w.classList.remove(c);f.classList.add(c)}});w.classList.remove('w-form');[].forEach.call(w.querySelectorAll('.w-form-done,.w-form-fail'),function(x){x.parentNode.removeChild(x)});f.removeAttribute('data-wf-page-id');f.removeAttribute('data-wf-element-id');f.setAttribute('novalidate','');[].forEach.call(f.querySelectorAll('.w-input,.w-select,.w-button,.w-checkbox-input,.w-radio-input'),function(x){x.classList.remove('w-input','w-select','w-button','w-checkbox-input','w-radio-input')});[].forEach.call(f.querySelectorAll('[placeholder]'),function(x){if(/^example text$/i.test(x.getAttribute('placeholder')))x.removeAttribute('placeholder')})})})();d.querySelectorAll('[data-style]').forEach(function(e){e.style.cssText+=';'+e.getAttribute('data-style')});d.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[data-btn]');if(!a)return;e.preventDefault();if(a.getAttribute('data-btn')==='submit'){var f=a.closest('form');if(f){if(f.requestSubmit)f.requestSubmit();else f.dispatchEvent(new Event('submit',{cancelable:true}))}}},true);d.addEventListener('keydown',function(e){var a=e.target.closest&&e.target.closest('a[data-btn]');if(a&&e.key===' '){e.preventDefault();a.click()}});var p=location.pathname.replace(/\/$/,'')||'/';if(p!=='/'){d.querySelectorAll('header a[href]').forEach(function(a){if(a.getAttribute('href')===p)a.setAttribute('aria-current','page')});if(p==='/demo')d.querySelectorAll('header a[href="/demo"]').forEach(function(a){a.setAttribute('href','#form')});if(/^\/(soluzioni|sviluppatori|agenzie)$/.test(p))d.querySelectorAll('header [data-c~="lpn_t"]').forEach(function(t){t.style.color='#151515'})}})();
;
(function(){function fix(){[].forEach.call(document.querySelectorAll('[data-logo] svg'),function(s){if(s.childElementCount)return;var w=s.closest('[data-logo]'),id={meta:'ic-meta',chatgpt:'ic-oai'}[w&&w.getAttribute('data-logo')];if(!id||!document.getElementById(id))return;s.setAttribute('viewBox','0 0 24 24');var u=document.createElementNS('http://www.w3.org/2000/svg','use');u.setAttribute('href','#'+id);u.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','#'+id);s.appendChild(u)})}if(document.readyState!='loading')fix();else document.addEventListener('DOMContentLoaded',fix)})();

;
(function(){var R=document.querySelector('[data-lp-root="ct"]');if(!R)return;[].forEach.call(R.querySelectorAll('label[for=""]'),function(l){l.removeAttribute('for')});[].forEach.call(R.querySelectorAll('.w-form-label'),function(e){e.parentNode.removeChild(e)});[].forEach.call(R.querySelectorAll('input[id]'),function(e){e.removeAttribute('id')})})();

(function(){
var form=document.querySelector('[data-ct="form"]');if(!form)return;
var API='https://carlomarescarealestate.app.n8n.cloud/webhook/';
var steps=[].slice.call(form.querySelectorAll('.ct_step')),N=9,cur=1;
var next=form.querySelector('[data-ct="next"]'),back=document.querySelector('[data-ct="back"]'),err=form.querySelector('[data-ct="err"]');
var bars=[].slice.call(document.querySelectorAll('.ct_bar')),qs=[].slice.call(document.querySelectorAll('.ct_q'));
var book=form.querySelector('.ct_book'),bookTx=book?book.querySelector('span'):null,done=form.querySelector('[data-ct="done"]');
var hp=document.createElement('input');hp.type='text';hp.name='website';hp.tabIndex=-1;hp.autocomplete='off';hp.setAttribute('aria-hidden','true');hp.className='ct_hp';form.appendChild(hp);
function val(n){var els=form.querySelectorAll('[name="'+n+'"]'),out=[];[].forEach.call(els,function(e){if((e.type==='radio'||e.type==='checkbox')){if(e.checked)out.push(e.value)}else if(e.value.trim())out.push(e.value.trim())});return out}
function ok(s){var st=steps[s-1];if(!st||s>N)return true;var good=true;
 [].forEach.call(st.querySelectorAll('[data-req]'),function(e){var r=e.getAttribute('data-req');if(r==='check'){if(!e.checked)good=false}else if(r==='email'){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim()))good=false}else if(!e.value.trim())good=false});
 var g=st.querySelectorAll('input[type=radio],input[type=checkbox][name="canali"]');if(g.length){var any=false;[].forEach.call(g,function(e){if(e.checked)any=true});if(!any)good=false}
 return good}
function sync(){next.classList.toggle('is-off',!ok(cur));}
/* ---------- Lapis calendar ---------- */
var TZ='Europe/Rome',cal=null,data=null,loading=null,page=0,selDay=-1,selIso='',failed=false,sending=false;
function el(t,c,tx){var e=document.createElement(t);if(c)e.className=c;if(tx!=null)e.textContent=tx;return e}
function fmt(iso,o){o.timeZone=TZ;return new Date(iso).toLocaleString('it-IT',o)}
function dayIso(d){return d+'T12:00:00Z'}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1)}
function load(force){if(loading&&!force)return loading;failed=false;
 loading=fetch(API+'lapis-slots',{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(j){if(!j||!j.days)throw 0;data=j.days.filter(function(d){return d.slots&&d.slots.length});if(!data.length)throw 0;return data}).catch(function(){failed=true;data=null;loading=null});
 return loading}
function ensureCal(){if(cal)return cal;cal=el('div','ct_cal');cal.setAttribute('data-ct','cal');
 if(book)book.parentNode.insertBefore(cal,book);
 var cb=el('button','ct_cb','Nessun orario va bene? Invia la richiesta, ti richiamiamo noi');cb.type='button';cb.setAttribute('data-ct','cb');
 var alt=form.querySelector('.ct_alt');(alt||book).parentNode.insertBefore(cb,alt?alt.nextSibling:book.nextSibling);
 cb.addEventListener('click',function(){send(true)});return cal}
function setBook(){if(!book)return;var on=!!selIso||failed;book.classList.toggle('is-off',!on);
 if(bookTx)bookTx.textContent=failed?'Invia la richiesta':(selIso?'Prenota '+fmt(selIso,{weekday:'short',day:'numeric',month:'short'})+', '+fmt(selIso,{hour:'2-digit',minute:'2-digit'}):'Scegli un orario');
 var cb=form.querySelector('[data-ct="cb"]');if(cb)cb.style.display=failed?'none':''}
function render(){var c=ensureCal();c.innerHTML='';
 if(failed){c.appendChild(el('p','ct_cal_msg','Il calendario non è disponibile in questo momento. Invia la richiesta: ti contatteremo entro le prossime 48 ore per fissare la call.'));setBook();return}
 if(!data){var sk=el('div','ct_cal_load');sk.appendChild(el('span','ct_cal_spin'));sk.appendChild(el('span','','Carico le disponibilità…'));c.appendChild(sk);setBook();return}
 var per=5,pages=Math.ceil(data.length/per);if(page>pages-1)page=pages-1;
 var vis=data.slice(page*per,page*per+per);
 var hd=el('div','ct_cal_hd');hd.appendChild(el('span','ct_cal_m',cap(fmt(dayIso(vis[0].date),{month:'long',year:'numeric'}))));
 var nav=el('div','ct_cal_nav');
 [['‹',-1,'Giorni precedenti'],['›',1,'Giorni successivi']].forEach(function(a){var b=el('button','ct_cal_arr',a[0]);b.type='button';b.setAttribute('aria-label',a[2]);var np=page+a[1];b.disabled=np<0||np>pages-1;b.addEventListener('click',function(){page=np;render()});nav.appendChild(b)});
 hd.appendChild(nav);c.appendChild(hd);
 var row=el('div','ct_cal_days');
 vis.forEach(function(d,i){var idx=page*per+i,b=el('button','ct_cal_d'+(idx===selDay?' is-sel':''));b.type='button';
  b.appendChild(el('span','ct_cal_wd',fmt(dayIso(d.date),{weekday:'short'}).replace('.','')));b.appendChild(el('b','',fmt(dayIso(d.date),{day:'numeric'})));
  b.appendChild(el('em','',fmt(dayIso(d.date),{month:'short'}).replace('.','')));
  b.addEventListener('click',function(){selDay=idx;selIso='';render()});row.appendChild(b)});
 c.appendChild(row);
 if(selDay<0){c.appendChild(el('p','ct_cal_hint','Scegli un giorno per vedere gli orari liberi'))}
 else{var d=data[selDay],g=el('div','ct_cal_times');
  d.slots.forEach(function(s){var b=el('button','ct_cal_t'+(s.iso===selIso?' is-sel':''),s.t);b.type='button';b.addEventListener('click',function(){selIso=s.iso;render()});g.appendChild(b)});
  c.appendChild(g)}
 c.appendChild(el('p','ct_cal_note','Videochiamata di 30 minuti · ora italiana'));
 setBook()}
function openCal(){render();if(!data&&!failed){var p=load();if(p)p.then(function(){if(data&&selDay<0)selDay=0;render()})}}
function finish(mode,iso){steps.forEach(function(st){st.classList.remove('is-on')});
 var h=done.querySelector('.ct_h'),p=done.querySelector('.ct_sub');
 if(mode==='call'){if(h)h.textContent='Call prenotata';if(p)p.textContent=cap(fmt(iso,{weekday:'long',day:'numeric',month:'long'}))+' alle '+fmt(iso,{hour:'2-digit',minute:'2-digit'})+'. Ti abbiamo inviato l’invito via email con il link alla videochiamata.'}
 else{if(h)h.textContent='Richiesta inviata';if(p)p.textContent='Grazie! Abbiamo ricevuto il tuo progetto.'}
 var x=done.querySelector('.ct_done_48');if(!x){x=el('p','ct_done_48');done.appendChild(x)}x.textContent='Ti contatteremo entro le prossime 48 ore.';
 done.classList.add('is-on');back.classList.add('is-hidden');err.textContent='';bars.forEach(function(b){b.classList.add('is-done');b.classList.remove('is-cur')});
 var t=document.getElementById('top');if(t&&t.scrollIntoView&&window.innerWidth<768)t.scrollIntoView({behavior:'smooth',block:'start'})}
function send(callback){if(sending)return;var start=callback||failed?'':selIso;if(!start&&!callback&&!failed){err.textContent='Scegli un giorno e un orario, oppure chiedi di essere richiamato.';return}
 sending=true;err.textContent='';var lbl=bookTx?bookTx.textContent:'';if(bookTx&&!callback)bookTx.textContent='Invio in corso…';book.classList.add('is-off');
 var body={nome:val('nome')[0]||'',societa:val('societa')[0]||'',ruolo:val('ruolo')[0]||'',zona:val('zona')[0]||'',unita:val('unita')[0]||'',fase:val('fase')[0]||'',budget:val('budget')[0]||'',canali:val('canali'),email:val('email')[0]||'',telefono:val('telefono')[0]||'',website:hp.value,start:start||null};
 fetch(API+'lapis-book',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(function(r){return r.json().catch(function(){return{}}).then(function(j){return{s:r.status,j:j}})}).then(function(x){sending=false;
  if(x.s===200&&x.j&&x.j.ok){(window.dataLayer=window.dataLayer||[]).push({event:'lp_contact',modalita:x.j.mode,ruolo:body.ruolo,zona:body.zona,unita:body.unita,fase:body.fase,budget:body.budget,canali:body.canali.join('|')});finish(x.j.mode,x.j.start||start);return}
  if(x.s===409){err.textContent='Questo orario è appena stato prenotato. Scegline un altro.';selIso='';data=null;loading=null;render();var p=load(true);if(p)p.then(function(){if(data){if(selDay>data.length-1)selDay=0;}render()});return}
  err.textContent='Invio non riuscito. Controlla i dati e riprova tra un attimo.';if(bookTx)bookTx.textContent=lbl;setBook()}).catch(function(){sending=false;err.textContent='Invio non riuscito. Controlla la connessione e riprova.';if(bookTx)bookTx.textContent=lbl;setBook()})}
/* ---------- steps ---------- */
function show(s){cur=s;steps.forEach(function(st,i){st.classList.toggle('is-on',i===s-1)});
 back.classList.toggle('is-hidden',s===1);next.style.display=s>N?'none':'';err.textContent='';
 bars.forEach(function(b,i){b.classList.toggle('is-done',i<s-1||s>N);b.classList.toggle('is-cur',i===s-1)});
 qs.forEach(function(q,i){q.classList.toggle('is-on',i===((s-1)%qs.length))});
 if(s>=8)load();
 if(s>N){var nm=(val('nome')[0]||'').split(' ')[0];form.querySelector('[data-ct="nm"]').textContent=nm?', '+nm:'';
  var c=form.querySelector('[data-ct="chips"]');c.innerHTML='';[val('zona')[0],val('unita')[0],val('budget')[0]].forEach(function(t){if(!t)return;var x=document.createElement('span');x.className='ct_chip';x.textContent=t;c.appendChild(x)});openCal()}
 var f=steps[s-1]&&steps[s-1].querySelector('.ct_in');if(f&&window.innerWidth>767)setTimeout(function(){f.focus()},60);sync()}
form.addEventListener('change',function(e){var o=e.target.closest('.ct_opt');if(o&&e.target.type==='radio'){[].forEach.call(o.parentNode.querySelectorAll('.ct_opt'),function(x){x.classList.remove('is-sel')})}if(o)o.classList.toggle('is-sel',e.target.checked);sync();
 if(e.target.type==='radio'&&ok(cur))setTimeout(function(){if(ok(cur))show(cur+1)},280)});
form.addEventListener('input',sync);
next.addEventListener('click',function(){if(!ok(cur)){err.textContent=cur===9?'Inserisci email, telefono e accetta l’informativa.':'Completa questo passaggio per continuare.';return}show(cur+1)});
back.addEventListener('click',function(){if(cur>1)show(cur-1)});
form.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target.tagName==='INPUT'&&cur<=N){e.preventDefault();next.click()}});
form.addEventListener('submit',function(e){e.preventDefault();if(cur>N)send(false)});
show(1);
})();

;

