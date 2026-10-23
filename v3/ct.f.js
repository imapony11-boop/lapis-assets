window.__lpIC={};window.__lpST=["ct_chip", "is-cur", "is-done", "is-hidden", "is-off", "is-on", "is-sel"];window.__lpHID=[];
(function(){var d=document;var IM=window.__lpIC||{};d.querySelectorAll('img[class]').forEach(function(e){if(e.hasAttribute('data-c'))return;var a=[].slice.call(e.classList);a.forEach(function(c){var v=IM[c];if(v)e.setAttribute('data-c',v)})});d.querySelectorAll('[data-c]').forEach(function(e){e.getAttribute('data-c').split(/\s+/).forEach(function(c){c&&e.classList.add(c)})});(function(){var ST=window.__lpST||[];if(!ST.length)return;var isS=function(c){return ST.indexOf(c)>=0};var hasS=function(e){return (e.getAttribute('data-c')||'').split(/\s+/).some(isS)};var lpOf=function(e){return [].filter.call(e.classList,function(c){return c.indexOf('lp-')===0&&c!=='lp-d'&&c!=='lp-m'})[0]};var key=function(e){return (e.getAttribute('data-c')||'').split(/\s+/).filter(function(c){return c&&!isS(c)}).sort().join(' ')};var L=[].filter.call(d.querySelectorAll('[data-c]'),hasS),sw=[];L.forEach(function(e){var me=lpOf(e);if(!me)return;var k=key(e),tw=null,par=e.parentElement;if(par)[].some.call(par.children,function(s){if(s!==e&&s.tagName===e.tagName&&key(s)===k&&!hasS(s)&&lpOf(s)){tw=s;return true}});if(tw){var o=lpOf(tw);if(o&&o!==me)sw.push([e,me,o])}});sw.forEach(function(x){x[0].classList.remove(x[1]);x[0].classList.add(x[2])});L.forEach(function(e){e.setAttribute('data-c',key(e))})})();(function(){var H=window.__lpHID||[],by={};d.querySelectorAll('[data-c]').forEach(function(e){var k=e.getAttribute('data-c');(by[k]=by[k]||[]).push(e)});var lpo=function(e){return [].filter.call(e.classList,function(c){return c.indexOf('lp-')===0&&c!=='lp-d'&&c!=='lp-m'})[0]};H.forEach(function(h){var e=(by[h[0]]||[])[h[1]];if(!e)return;var tw=(by[h[0]]||[]).filter(function(x){return x!==e&&x.parentElement===e.parentElement&&x.tagName===e.tagName&&!H.some(function(k){return k[0]===h[0]&&by[h[0]][k[1]]===x})})[0];if(tw){var a=lpo(e),b=lpo(tw);if(a&&b&&a!==b){e.classList.remove(a);e.classList.add(b)}var dd=getComputedStyle(tw).display;if(dd&&dd!=='none')h[2]=dd}e.hidden=true;e.setAttribute('data-lp-h','');e.style.setProperty('--lp-h',h[2])});var st=d.createElement('style');st.textContent='[data-lp-h]:not([hidden]){display:var(--lp-h)!important}[data-lp-h][hidden]{display:none!important}';d.head.appendChild(st);d.querySelectorAll('.w-form').forEach(function(w){var f=w.querySelector('form');if(!f)return;[].slice.call(w.classList).forEach(function(c){if(c.indexOf('lp-')===0){w.classList.remove(c);f.classList.add(c)}});w.classList.remove('w-form');[].forEach.call(w.querySelectorAll('.w-form-done,.w-form-fail'),function(x){x.parentNode.removeChild(x)});f.removeAttribute('data-wf-page-id');f.removeAttribute('data-wf-element-id');f.setAttribute('novalidate','');[].forEach.call(f.querySelectorAll('.w-input,.w-select,.w-button,.w-checkbox-input,.w-radio-input'),function(x){x.classList.remove('w-input','w-select','w-button','w-checkbox-input','w-radio-input')});[].forEach.call(f.querySelectorAll('[placeholder]'),function(x){if(/^example text$/i.test(x.getAttribute('placeholder')))x.removeAttribute('placeholder')})})})();d.querySelectorAll('[data-style]').forEach(function(e){e.style.cssText+=';'+e.getAttribute('data-style')});d.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[data-btn]');if(!a)return;e.preventDefault();if(a.getAttribute('data-btn')==='submit'){var f=a.closest('form');if(f){if(f.requestSubmit)f.requestSubmit();else f.dispatchEvent(new Event('submit',{cancelable:true}))}}},true);d.addEventListener('keydown',function(e){var a=e.target.closest&&e.target.closest('a[data-btn]');if(a&&e.key===' '){e.preventDefault();a.click()}});var p=location.pathname.replace(/\/$/,'')||'/';if(p!=='/'){d.querySelectorAll('header a[href]').forEach(function(a){if(a.getAttribute('href')===p)a.setAttribute('aria-current','page')});if(p==='/demo')d.querySelectorAll('header a[href="/demo"]').forEach(function(a){a.setAttribute('href','#form')});if(/^\/(soluzioni|sviluppatori|agenzie)$/.test(p))d.querySelectorAll('header [data-c~="lpn_t"]').forEach(function(t){t.style.color='#151515'})}})();
;
(function(){function fix(){[].forEach.call(document.querySelectorAll('[data-logo] svg'),function(s){if(s.childElementCount)return;var w=s.closest('[data-logo]'),id={meta:'ic-meta',chatgpt:'ic-oai'}[w&&w.getAttribute('data-logo')];if(!id||!document.getElementById(id))return;s.setAttribute('viewBox','0 0 24 24');var u=document.createElementNS('http://www.w3.org/2000/svg','use');u.setAttribute('href','#'+id);u.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','#'+id);s.appendChild(u)})}if(document.readyState!='loading')fix();else document.addEventListener('DOMContentLoaded',fix)})();

;
(function(){var R=document.querySelector('[data-lp-root="ct"]');if(!R)return;[].forEach.call(R.querySelectorAll('label[for=""]'),function(l){l.removeAttribute('for')});[].forEach.call(R.querySelectorAll('.w-form-label'),function(e){e.parentNode.removeChild(e)});[].forEach.call(R.querySelectorAll('input[id]'),function(e){e.removeAttribute('id')})})();

(function(){
var form=document.querySelector('[data-ct="form"]');if(!form)return;
(function(){var box=document.querySelector('.ct_quotes'),card=document.querySelector('.ct_card');if(!box||!card||box.getAttribute('data-ct-s'))return;box.setAttribute('data-ct-s','1');
 var IMG='https://cdn.jsdelivr.net/gh/imapony11-boop/lapis-assets@c20bdc818ccab09e6e63ac142ea8d43acb571386/v3/ct-s';
 var Q=[].slice.call(box.querySelectorAll('.ct_q'));if(Q.length<3)return;
 var F=[['Il nostro obiettivo','Ottimizziamo per le visite prenotate, non per i contatti.','Le campagne imparano da chi entra in ufficio vendite, non da chi compila un modulo.'],
 ['Aria Living, Parma','Dal 18% al 52% dei contatti in visita.','In sei settimane, con campagne collegate al CRM. Caso singolo, non una garanzia.'],
 ['Test di incrementalità','Misuriamo le visite in più, non quelle che sarebbero arrivate comunque.','Confrontiamo zone e periodi con e senza campagna per isolare l’effetto reale.'],
 ['Test A/B continui','Ogni annuncio è un’ipotesi da verificare.','Una variabile alla volta: creatività, testo, landing. Resta solo ciò che porta visite.'],
 ['Dati collegati al CRM','Ogni contatto ha una fonte. Ogni visita ha un costo.','Il report mostra quanto ti costa una visita, canale per canale.'],
 ['Strategia in 14 giorni','Budget per canale e piano consigliato, in 14 giorni.','Gratis e senza contratto.']];
 function fact(f){var n=Q[0].cloneNode(true);n.classList.remove('is-on');n.classList.add('ct_fact');var m=n.querySelector('.ct_q_mark'),t=n.querySelector('.ct_q_t'),w=n.querySelector('.ct_q_who');
  if(m){m.textContent=f[0];m.classList.add('ct_q_lbl')}if(t)t.textContent=f[1];if(w){w.innerHTML='';var c=document.createElement('span');c.className='ct_q_cap';c.textContent=f[2];w.appendChild(c)}return n}
 var order=[Q[0],fact(F[0]),fact(F[1]),Q[1],fact(F[2]),fact(F[3]),Q[2],fact(F[4]),fact(F[5])];
 order.forEach(function(n){box.appendChild(n)});
 var L=document.createElement('div');L.className='ct_bgs';L.setAttribute('aria-hidden','true');
 for(var i=1;i<=9;i++){var d=document.createElement('div');d.className='ct_bg'+(i===1?' is-on':'');d.style.backgroundImage='linear-gradient(180deg,rgba(12,11,10,.05) 0%,rgba(12,11,10,.18) 42%,rgba(12,11,10,.76) 100%),url('+IMG+i+'.webp)';L.appendChild(d)}
 card.insertBefore(L,card.firstChild);
 var bgs=[].slice.call(L.children);window.__ctBg=function(k){bgs.forEach(function(b,j){b.classList.toggle('is-on',j===k)})};
})();
var API='https://carlomarescarealestate.app.n8n.cloud/webhook/';
(function(){var m=form.querySelector('input[name="canali"][value="Meta"]');if(!m)return;var o=m.closest('.ct_opt');if(!o)return;
 var ig=o.cloneNode(true);m.value='Facebook';var t=o.querySelector('span');if(t)t.textContent='Facebook';
 var mi=ig.querySelector('input');mi.value='Instagram';mi.checked=false;ig.classList.remove('is-sel');var t2=ig.querySelector('span');if(t2)t2.textContent='Instagram';
 o.parentNode.insertBefore(ig,o.nextSibling)})();
(function(){var st=form.querySelectorAll('.ct_step')[3];if(!st)return;var opts=st.querySelector('.ct_opts'),src=form.querySelector('[name="societa"]'),lab=src&&src.closest('.ct_f');if(!opts||!lab)return;
 var n=lab.cloneNode(true),i=n.querySelector('input');i.name='zona';i.value='';i.placeholder='Es. Milano, Parma, Roma';i.setAttribute('autocomplete','address-level2');i.setAttribute('data-req','1');
 var l=n.querySelector('.ct_lbl');if(l)l.textContent='Città o zona del progetto';opts.parentNode.replaceChild(n,opts)})();
(function(){var st=[].slice.call(form.querySelectorAll('.ct_step'));var fase=st[5],can=st[7];if(!fase||!can||form.querySelector('[name="partenza"]'))return;
 function mk(tpl,h,sub,name,items){var n=tpl.cloneNode(true);n.classList.remove('is-on');n.removeAttribute('data-step');var hh=n.querySelector('.ct_h');if(hh.tagName==='H1'){var h2=document.createElement('h2');h2.className=hh.className;hh.parentNode.replaceChild(h2,hh);hh=h2}hh.textContent=h;
  var sb=n.querySelector('.ct_sub');if(!sb){sb=document.createElement('p');sb.className='ct_sub';hh.parentNode.insertBefore(sb,hh.nextSibling)}sb.textContent=sub;
  var box=n.querySelector('.ct_opts'),proto=box.querySelector('.ct_opt');box.innerHTML='';
  items.forEach(function(it){var o=proto.cloneNode(true);o.classList.remove('is-sel');var i=o.querySelector('input');i.name=name;i.value=it[0];i.checked=false;var sp=o.querySelector('span');sp.innerHTML='';sp.className='ct_oc';
   if(it[3]){var ic=document.createElement('span');ic.className='ct_ic';if(it[4])ic.style.background=it[4];if(it[3].charAt(0)==='<')ic.innerHTML=it[3];else{var im=document.createElement('img');im.src=it[3];im.alt='';ic.appendChild(im)}o.insertBefore(ic,sp)}
   var b=document.createElement('b');b.className='ct_ot';b.textContent=it[1];sp.appendChild(b);if(it[2]){var sm=document.createElement('small');sm.className='ct_os';sm.textContent=it[2];sp.appendChild(sm)}box.appendChild(o)});return n}
 var a=mk(fase,'Da dove partiamo?','Aiutaci a capire a che punto sei.','partenza',[
  ['Setup completo','Setup completo da zero','Impostiamo campagne, portali, tracciamento e landing page.'],
  ['Takeover','Takeover','Hai già account, portali o sito? Completiamo solo ciò che manca.'],
  ['Da verificare','Non lo so ancora','Lo verifichiamo insieme nell’analisi gratuita.']]);
 var CDN='https://cdn.jsdelivr.net/gh/imapony11-boop/lapis-assets@e3459ad3b0b678b6bc0e72bb64f9a6021a517b36/';
 var LP='<svg viewBox="0 0 24 24" fill="none" stroke="#151515" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 8.5h18"/><circle cx="6" cy="6.3" r=".6" fill="#151515"/><circle cx="8.2" cy="6.3" r=".6" fill="#151515"/><path d="M7 12.5h10M7 15.5h6" stroke-linecap="round"/></svg>';
 var ZERO='<svg viewBox="0 0 24 24" fill="none" stroke="#B0573A" stroke-width="1.7" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';
 var b=mk(can,'Su quali canali vuoi crescere?','Seleziona tutti quelli che ti interessano','canali',[
  ['Landing page','Landing page','Sito del progetto',LP],
  ['Immobiliare.it','Immobiliare.it','Portale',CDN+'img/site-portal-immobiliare.png'],
  ['idealista','idealista','Portale',CDN+'img/site-portal-idealista.png'],
  ['Casa.it','Casa.it','Portale',CDN+'img/site-portal-casa-it.png'],
  ['Facebook','Facebook','Meta Ads',CDN+'prezzi/svg_fbc.svg'],
  ['Instagram','Instagram','Meta Ads',CDN+'prezzi/svg_igw.svg','linear-gradient(45deg,#F9A13A 0%,#E1306C 55%,#833AB4 100%)'],
  ['Google','Google','Search e Performance Max',CDN+'img/icon-google-ads.webp'],
  ['ChatGPT','ChatGPT','Ricerca con l’IA',CDN+'prezzi/svg_oai_k.svg'],
  ['Niente','Ancora nessuno','',ZERO]]);
 var bx=b.querySelector('.ct_opts');if(bx)bx.classList.add('ct_tiles');b.setAttribute('data-ct','canali');
 fase.parentNode.insertBefore(a,fase.nextSibling);a.parentNode.insertBefore(b,a.nextSibling);
 can.parentNode.removeChild(can);
 var bw=document.querySelector('.ct_bars');if(bw){var bb=bw.querySelector('.ct_bar');var c=bb.cloneNode(true);c.classList.remove('is-cur');c.classList.remove('is-done');bw.appendChild(c);bw.style.gridTemplateColumns='repeat(10,1fr)'}
})();
function ctAdapt(){var t=form.querySelector('[data-ct="canali"]');if(!t)return;var p=(form.querySelector('[name="partenza"]:checked')||{}).value||'';var setup=p==='Setup completo';
 t.querySelector('.ct_h').textContent=setup?'Su quali canali vuoi partire?':'Quali canali usate già?';
 t.querySelector('.ct_sub').textContent=setup?'Seleziona tutti quelli che ti interessano':'Seleziona tutti quelli attivi oggi';
 var nz=t.querySelector('input[value="Niente"]');if(nz){var o=nz.closest('.ct_opt');o.style.display=setup?'none':'';if(setup&&nz.checked){nz.checked=false;o.classList.remove('is-sel')}}}
var steps=[].slice.call(form.querySelectorAll('.ct_step')),N=steps.length-1,cur=1;
steps.forEach(function(st,i){var n=st.querySelector('.ct_n');if(n&&i<N)n.textContent=(i+1)+' di '+N});
var next=form.querySelector('[data-ct="next"]'),back=document.querySelector('[data-ct="back"]'),err=form.querySelector('[data-ct="err"]');
var bars=[].slice.call(document.querySelectorAll('.ct_bar')),qs=[].slice.call(document.querySelectorAll('.ct_q'));
var book=form.querySelector('.ct_book'),bookTx=book?book.querySelector('span'):null,done=form.querySelector('[data-ct="done"]');
var hp=document.createElement('input');hp.type='text';hp.name='website';hp.tabIndex=-1;hp.autocomplete='off';hp.setAttribute('aria-hidden','true');hp.className='ct_hp';form.appendChild(hp);
function val(n){var els=form.querySelectorAll('[name="'+n+'"]'),out=[];[].forEach.call(els,function(e){if((e.type==='radio'||e.type==='checkbox')){if(e.checked)out.push(e.value)}else if(e.value.trim())out.push(e.value.trim())});return out}
function ok(s){var st=steps[s-1];if(!st||s>N)return true;var good=true;
 [].forEach.call(st.querySelectorAll('[data-req]'),function(e){var r=e.getAttribute('data-req');if(r==='check'){if(!e.checked)good=false}else if(r==='email'){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim()))good=false}else if(!e.value.trim())good=false});
 var g=st.querySelectorAll('input[type=radio],input[type=checkbox]:not([name="privacy"])');if(g.length){var any=false;[].forEach.call(g,function(e){if(e.checked)any=true});if(!any)good=false}
 return good}
function sync(){next.classList.toggle('is-off',!ok(cur));}
/* ---------- Lapis calendar (modal) ---------- */
var TZ='Europe/Rome',data=null,loading=null,failed=false,sending=false,selIso='',selDate='',mon=null,modal=null,ROOT=document.querySelector('[data-lp-root="ct"]')||document.body;
function el(t,c,tx){var e=document.createElement(t);if(c)e.className=c;if(tx!=null)e.textContent=tx;return e}
function fmt(iso,o){o.timeZone=TZ;return new Date(iso).toLocaleString('it-IT',o)}
function dIso(d){return d+'T12:00:00Z'}
function cap(x){return x.charAt(0).toUpperCase()+x.slice(1)}
function load(force){if(loading&&!force)return loading;failed=false;
 loading=fetch(API+'lapis-slots',{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(j){if(!j||!j.days)throw 0;data=j.days.filter(function(d){return d.slots&&d.slots.length});if(!data.length)throw 0;return data}).catch(function(){failed=true;data=null;loading=null});
 return loading}
var IC={clock:'<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="7.2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10 6.2V10l2.6 1.7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
 cam:'<svg viewBox="0 0 20 20"><rect x="2.5" y="5.5" width="10.5" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M13 9l4.5-2.5v7L13 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
 globe:'<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="7.2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M2.8 10h14.4M10 2.8c2.2 2.3 2.2 12.1 0 14.4M10 2.8c-2.2 2.3-2.2 12.1 0 14.4" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>',
 mark:'<svg viewBox="26 26 132 110"><rect x="30" y="101.3" width="58.8" height="29.4" rx="3.2" fill="#1B1A18"/><rect x="94.7" y="101.3" width="58.8" height="29.4" rx="3.2" fill="#1B1A18"/><rect x="62.4" y="66" width="58.8" height="29.4" rx="3.2" fill="#1B1A18"/><rect x="94.7" y="30.8" width="58.8" height="29.4" rx="3.2" fill="#B0573A"/></svg>'};
function ensureCb(){if(form.querySelector('[data-ct="cb"]'))return;var cb=el('button','ct_cb','Invia la richiesta, ti richiamiamo noi');cb.type='button';cb.setAttribute('data-ct','cb');
 book.parentNode.insertBefore(cb,book.nextSibling);cb.addEventListener('click',function(){send(true)})}
function closeModal(){if(!modal)return;modal.classList.remove('is-open');document.documentElement.style.overflow='';setTimeout(function(){if(modal&&!modal.classList.contains('is-open'))modal.style.display='none'},260)}
function buildModal(){modal=el('div','ctm');modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-label','Prenota la call');
 modal.innerHTML='<div class="ctm_bg" data-x></div><div class="ctm_p"><button type="button" class="ctm_x" aria-label="Chiudi" data-x>&times;</button><aside class="ctm_info"><div class="ctm_img"><span class="ctm_logo">'+IC.mark+'</span></div><h3 class="ctm_t">Analisi del tuo progetto</h3><p class="ctm_d">Analizziamo progetto, budget e canali.</p><ul class="ctm_meta"><li>'+IC.clock+'<span>30 minuti</span></li><li>'+IC.cam+'<span>Google Meet</span></li><li>'+IC.globe+'<span data-ctm="tz">Ora di Roma</span></li></ul><div class="ctm_chips"></div><button type="button" class="ctm_cb" data-cb>Nessun orario va bene? Invia la richiesta</button></aside><section class="ctm_cal"><h4 class="ctm_h">Scegli giorno e ora</h4><div class="ctm_body"></div></section><section class="ctm_times"></section><p class="ctm_err" role="alert"></p></div>';
 ROOT.appendChild(modal);
 modal.addEventListener('click',function(e){if(e.target.closest('[data-x]'))closeModal();else if(e.target.closest('[data-cb]'))send(true)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&modal.classList.contains('is-open'))closeModal()})}
function chipsInto(c){c.innerHTML='';[val('zona')[0],val('unita')[0],val('budget')[0]].forEach(function(t){if(t)c.appendChild(el('span','ctm_chip',t))})}
function tzl(iso){try{var p=new Intl.DateTimeFormat('it-IT',{timeZone:TZ,timeZoneName:'shortOffset'}).formatToParts(new Date(iso)).filter(function(x){return x.type==='timeZoneName'})[0];return p?p.value:'CET'}catch(e){return 'CET'}}
function avail(){var m={};(data||[]).forEach(function(d){m[d.date]=d});return m}
function renderModal(){var body=modal.querySelector('.ctm_body'),tm=modal.querySelector('.ctm_times');body.innerHTML='';tm.innerHTML='';
 if(failed){modal.classList.add('is-fail');body.appendChild(el('p','ctm_msg','Il calendario non è disponibile in questo momento. Invia la richiesta: ti contatteremo entro le prossime 48 ore per fissare la call.'));var b=el('button','ctm_go','Invia la richiesta');b.type='button';b.addEventListener('click',function(){send(true)});body.appendChild(b);return}
 modal.classList.remove('is-fail');
 if(!data){var sk=el('div','ctm_load');sk.appendChild(el('span','ct_cal_spin'));sk.appendChild(el('span','','Carico le disponibilità…'));body.appendChild(sk);return}
 var A=avail(),first=data[0].date,last=data[data.length-1].date;if(!mon)mon=first.slice(0,7);if(!selDate)selDate=first;
 var y=+mon.slice(0,4),m=+mon.slice(5,7);
 var hd=el('div','ctm_mh');hd.appendChild(el('span','ctm_m',cap(fmt(dIso(mon+'-15'),{month:'long',year:'numeric'}))));var nav=el('div','ctm_nav');
 [['‹',-1,'Mese precedente'],['›',1,'Mese successivo']].forEach(function(q){var bt=el('button','ctm_arr',q[0]);bt.type='button';bt.setAttribute('aria-label',q[2]);var nm=new Date(Date.UTC(y,m-1+q[1],1)).toISOString().slice(0,7);bt.disabled=nm<first.slice(0,7)||nm>last.slice(0,7);bt.addEventListener('click',function(){mon=nm;renderModal()});nav.appendChild(bt)});
 hd.appendChild(nav);body.appendChild(hd);
 var g=el('div','ctm_grid');['lun','mar','mer','gio','ven','sab','dom'].forEach(function(w){g.appendChild(el('span','ctm_wd',w))});
 var start=(new Date(Date.UTC(y,m-1,1)).getUTCDay()+6)%7,days=new Date(Date.UTC(y,m,0)).getUTCDate();
 for(var i=0;i<start;i++)g.appendChild(el('span','ctm_e'));
 for(var d=1;d<=days;d++){(function(d){var ds=mon+'-'+(d<10?'0':'')+d,ok=!!A[ds],bt=el('button','ctm_day'+(ok?' is-av':'')+(ds===selDate?' is-sel':''),String(d));bt.type='button';bt.disabled=!ok;
  if(ok){bt.setAttribute('aria-label',cap(fmt(dIso(ds),{weekday:'long',day:'numeric',month:'long'})));bt.addEventListener('click',function(){selDate=ds;selIso='';renderModal()})}g.appendChild(bt)})(d)}
 body.appendChild(g);
 var tz=modal.querySelector('[data-ctm="tz"]');if(tz)tz.textContent='Ora di Roma ('+tzl(dIso(selDate))+')';var day=A[selDate];tm.appendChild(el('h4','ctm_th',day?cap(fmt(dIso(selDate),{weekday:'long',day:'numeric',month:'long'})):'Scegli un giorno'));
 var list=el('div','ctm_list');
 if(day)day.slots.forEach(function(sl){var row=el('div','ctm_row'+(sl.iso===selIso?' is-sel':''));var t=el('button','ctm_slot',sl.t);t.type='button';t.addEventListener('click',function(){selIso=sl.iso;renderModal()});row.appendChild(t);
  if(sl.iso===selIso){var c=el('button','ctm_ok',sending?'Invio…':'Conferma');c.type='button';c.disabled=sending;c.addEventListener('click',function(){send(false)});row.appendChild(c)}list.appendChild(row)});
 tm.appendChild(list)}
function openModal(){if(!modal)buildModal();chipsInto(modal.querySelector('.ctm_chips'));modal.querySelector('.ctm_err').textContent='';modal.style.display='flex';document.documentElement.style.overflow='hidden';
 requestAnimationFrame(function(){modal.classList.add('is-open')});renderModal();
 if(!data&&!failed){var p=load();if(p)p.then(function(){renderModal()})}
 setTimeout(function(){var x=modal.querySelector('.ctm_x');if(x)x.focus({preventScroll:true})},60)}
function finish(mode,iso){closeModal();steps.forEach(function(st){st.classList.remove('is-on')});
 var h=done.querySelector('.ct_h'),p=done.querySelector('.ct_sub');
 if(mode==='call'){if(h)h.textContent='Call prenotata';if(p)p.textContent=cap(fmt(iso,{weekday:'long',day:'numeric',month:'long'}))+' alle '+fmt(iso,{hour:'2-digit',minute:'2-digit'})+'. Ti abbiamo inviato l’invito via email con il link alla videochiamata.'}
 else{if(h)h.textContent='Richiesta inviata';if(p)p.textContent='Grazie! Abbiamo ricevuto il tuo progetto.'}
 var x=done.querySelector('.ct_done_48');if(!x){x=el('p','ct_done_48');done.appendChild(x)}x.textContent='Ti contatteremo entro le prossime 48 ore.';
 done.classList.add('is-on');back.classList.add('is-hidden');err.textContent='';next.style.display='none';if(book)book.style.display='none';
 bars.forEach(function(b){b.classList.add('is-done');b.classList.remove('is-cur')});
 var t=document.getElementById('top');if(t&&t.scrollIntoView&&window.innerWidth<768)t.scrollIntoView({behavior:'smooth',block:'start'})}
function send(callback){if(sending)return;var start=(callback||failed)?'':selIso;if(!start&&!callback&&!failed)return;
 sending=true;var me=modal&&modal.classList.contains('is-open')?modal.querySelector('.ctm_err'):err;me.textContent='';if(modal&&!callback)renderModal();
 var body={nome:val('nome')[0]||'',societa:val('societa')[0]||'',ruolo:val('ruolo')[0]||'',zona:val('zona')[0]||'',unita:val('unita')[0]||'',fase:val('fase')[0]||'',budget:val('budget')[0]||'',canali:val('canali'),partenza:val('partenza')[0]||'',email:val('email')[0]||'',telefono:val('telefono')[0]||'',website:hp.value,start:start||null};
 fetch(API+'lapis-book',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(function(r){return r.json().catch(function(){return{}}).then(function(j){return{s:r.status,j:j}})}).then(function(x){sending=false;
  if(x.s===200&&x.j&&x.j.ok){(window.dataLayer=window.dataLayer||[]).push({event:'lp_contact',modalita:x.j.mode,ruolo:body.ruolo,zona:body.zona,unita:body.unita,fase:body.fase,budget:body.budget,canali:body.canali.join('|'),partenza:body.partenza});finish(x.j.mode,x.j.start||start);return}
  if(x.s===409){me.textContent='Questo orario è appena stato prenotato. Scegline un altro.';selIso='';data=null;loading=null;if(modal)renderModal();var p=load(true);if(p)p.then(function(){if(data&&!avail()[selDate])selDate='';if(modal)renderModal()});return}
  me.textContent='Invio non riuscito. Controlla i dati e riprova tra un attimo.';if(modal)renderModal()}).catch(function(){sending=false;me.textContent='Invio non riuscito. Controlla la connessione e riprova.';if(modal)renderModal()})}
/* ---------- steps ---------- */
function show(s){cur=s;ctAdapt();steps.forEach(function(st,i){st.classList.toggle('is-on',i===s-1)});
 back.classList.toggle('is-hidden',s===1);next.style.display=s>N?'none':'';err.textContent='';
 bars.forEach(function(b,i){b.classList.toggle('is-done',i<s-1||s>N);b.classList.toggle('is-cur',i===s-1)});
 var k=(s-1)%qs.length;qs.forEach(function(q,i){q.classList.toggle('is-on',i===k)});if(window.__ctBg)window.__ctBg(k%9);
 if(s>=N-1)load();
 if(s>N){var nm=(val('nome')[0]||'').split(' ')[0];form.querySelector('[data-ct="nm"]').textContent=nm?', '+nm:'';
  var c=form.querySelector('[data-ct="chips"]');c.innerHTML='';[val('zona')[0],val('unita')[0],val('budget')[0]].forEach(function(t){if(!t)return;var x=document.createElement('span');x.className='ct_chip';x.textContent=t;c.appendChild(x)});if(bookTx)bookTx.textContent='Prenota la call';ensureCb();setTimeout(openModal,180)}
 var f=steps[s-1]&&steps[s-1].querySelector('.ct_in');if(f&&window.innerWidth>767)setTimeout(function(){f.focus()},60);sync()}
form.addEventListener('change',function(e){if(e.target.name==='canali'&&e.target.checked){[].forEach.call(form.querySelectorAll('input[name="canali"]'),function(x){if(x!==e.target&&(e.target.value==='Niente'||x.value==='Niente')){x.checked=false;var oo=x.closest('.ct_opt');if(oo)oo.classList.remove('is-sel')}})}var o=e.target.closest('.ct_opt');if(o&&e.target.type==='radio'){[].forEach.call(o.parentNode.querySelectorAll('.ct_opt'),function(x){x.classList.remove('is-sel')})}if(o)o.classList.toggle('is-sel',e.target.checked);sync();
 if(e.target.type==='radio'&&ok(cur))setTimeout(function(){if(ok(cur))show(cur+1)},280)});
form.addEventListener('input',sync);
next.addEventListener('click',function(){if(!ok(cur)){err.textContent=cur===N?'Inserisci email, telefono e accetta l’informativa.':'Completa questo passaggio per continuare.';return}show(cur+1)});
back.addEventListener('click',function(){if(cur>1)show(cur-1)});
form.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target.tagName==='INPUT'&&cur<=N){e.preventDefault();next.click()}});
form.addEventListener('submit',function(e){e.preventDefault();if(cur>N)openModal()});
show(1);
})();

;

