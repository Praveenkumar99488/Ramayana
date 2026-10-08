const K = {
  Baala:{n:"Bala Kanda",t:"The Beginning",i:"🪷",c:["#e9a23b","#b5541c"],d:"The Bala Kanda narrates the birth of Lord Rama, his childhood, education and marriage to Sita. It also describes the arrival of sage Vishwamitra and Rama's journey to protect the sages and defeat the demons."},
  Ayodhya:{n:"Ayodhya Kanda",t:"The Exile",i:"🛕",c:["#d98a3d","#8a2b1a"],d:"Preparations for Rama's coronation are undone by Kaikeyi's boons. Rama accepts fourteen years of exile with Sita and Lakshmana, and Bharata refuses the throne."},
  Aranya:{n:"Aranya Kanda",t:"The Forest",i:"🌿",c:["#6fa35a","#2f5d3a"],d:"Rama, Sita and Lakshmana live in the forests of Dandaka. Surpanakha's insult leads to conflict with Ravana, who abducts Sita."},
  Kishkindha:{n:"Kishkindha Kanda",t:"The Alliance",i:"🐒",c:["#c98a3a","#6b4a1b"],d:"Rama meets Hanuman and befriends Sugriva, king of the Vanaras. Vali is defeated and the search for Sita begins in every direction."},
  Sundara:{n:"Sundara Kanda",t:"Hanuman's Journey",i:"🌅",c:["#f0a04b","#c2410c"],d:"Hanuman leaps across the ocean, finds Sita in Ashoka grove in Lanka, delivers Rama's ring and sets Lanka ablaze before returning."},
  Yuddha:{n:"Yuddha Kanda",t:"The Great War",i:"🏹",c:["#c44536","#6d1a1a"],d:"The Vanara army builds a bridge to Lanka. The great war follows, ending with Ravana's fall, Sita's reunion with Rama and the return to Ayodhya."}
};
const C = [
  {n:"Rama",q:"Rama",r:"The righteous prince",i:"🏹",c:["#3b82c4","#e9a23b"],aka:"Shri Ramachandra",fam:"Son of Dasharatha & Kausalya",sp:"Sita",bro:"Lakshmana, Bharata, Shatrughna",ev:["Birth in Ayodhya","Marriage with Sita","Exile to the forest","Meeting Hanuman","War with Ravana"],b:"Rama is the hero of the epic, the ideal son, husband, brother and king."},
  {n:"Sita",q:"Seetha",r:"The devoted wife",i:"🌸",c:["#d9534f","#f0b04b"],aka:"Janaki, Vaidehi",fam:"Daughter of King Janaka of Mithila",sp:"Rama",bro:"Urmila (sister)",ev:["Swayamvara at Mithila","Follows Rama into exile","Abducted by Ravana","Captivity in Ashoka grove","Reunion with Rama"],b:"Sita is the embodiment of devotion, courage and purity."},
  {n:"Lakshmana",q:"Lakshmana",r:"The loyal brother",i:"🗡️",c:["#4a8f6a","#e0b84f"],aka:"Saumitri",fam:"Son of Dasharatha & Sumitra",sp:"Urmila",bro:"Rama, Bharata, Shatrughna",ev:["Accompanies Rama to the forest","Guards Sita's hut","Wounded by Indrajit","Revived by Sanjivani"],b:"Lakshmana serves Rama with unwavering loyalty through the exile."},
  {n:"Hanuman",q:"Hanuma",r:"The symbol of devotion",i:"🐒",c:["#e5792b","#a8321a"],aka:"Maruti, Anjaneya",fam:"Son of Anjana and Vayu",sp:"—",bro:"—",ev:["Meets Rama at Kishkindha","Leaps across the ocean","Finds Sita in Lanka","Burns Lanka","Brings the Sanjivani mountain"],b:"Hanuman is the mighty Vanara whose devotion to Rama is legendary."},
  {n:"Ravana",q:"Ravana",r:"The mighty king",i:"👑",c:["#7a2e8a","#2b1a40"],aka:"Dashagriva",fam:"Son of Vishrava & Kaikasi",sp:"Mandodari",bro:"Kumbhakarna, Vibhishana",ev:["Boon from Brahma","Abducts Sita","Battle with Rama","Falls in the great war"],b:"Ravana is the learned yet arrogant ten-headed king of Lanka."},
  {n:"Bharata",q:"Bharata",r:"The dutiful brother",i:"🪔",c:["#c9892b","#7a4a1a"],aka:"—",fam:"Son of Dasharatha & Kaikeyi",sp:"Mandavi",bro:"Rama, Lakshmana, Shatrughna",ev:["Refuses the throne","Meets Rama at Chitrakoot","Rules with Rama's sandals","Welcomes Rama home"],b:"Bharata rules Ayodhya as Rama's humble regent."},
  {n:"Sugriva",im:"sugreeva",q:"Sugreeva",r:"The Vanara king",i:"🦁",c:["#b5793a","#5c3a1b"],aka:"—",fam:"Son of Surya (the Sun)",sp:"Ruma",bro:"Vali",ev:["Befriends Rama","Defeats Vali with Rama's help","Sends search parties","Leads the Vanara army"],b:"Sugriva is the king of Kishkindha and Rama's ally."},
  {n:"Vibhishana",q:"Vibhishana",r:"The righteous one",i:"🛡️",c:["#3a8a8a","#1f4a5a"],aka:"—",fam:"Younger brother of Ravana",sp:"Sarama",bro:"Ravana, Kumbhakarna",ev:["Advises Ravana to return Sita","Joins Rama","Reveals Ravana's secrets","Crowned king of Lanka"],b:"Vibhishana chooses dharma over family and is crowned king of Lanka."},
  {n:"Shatrughna",q:"Shatrughna",r:"The steadfast brother",i:"🪔",c:["#8a5ab5","#e0b84f"],aka:"—",fam:"Son of Dasharatha & Sumitra",sp:"Shrutakirti",bro:"Rama, Lakshmana, Bharata",ev:["Serves Bharata in Ayodhya","Welcomes Rama home","Defeats the demon Lavana"],b:"Shatrughna is the youngest brother, known for his quiet devotion and courage."},
  {n:"Dasharatha",q:"Dasharatha",r:"The king of Ayodhya",i:"👑",c:["#b5381f","#e0b84f"],aka:"—",fam:"King of the Ikshvaku dynasty",sp:"Kausalya, Sumitra, Kaikeyi",bro:"—",ev:["Performs the sacrifice for sons","Birth of Rama and his brothers","Promises two boons to Kaikeyi","Passes away grieving Rama's exile"],b:"Dasharatha is the noble king of Ayodhya, bound by his word, whose promise sets the epic in motion."},
  {n:"Kaikeyi",q:"Kaikeyi",r:"Queen of Ayodhya",i:"💠",c:["#c2185b","#e0b84f"],aka:"—",fam:"Princess of Kekaya, mother of Bharata",sp:"Dasharatha",bro:"Yudhajit (brother)",ev:["Saves Dasharatha in battle","Claims her two boons","Rama is sent to the forest","Bharata rejects her demand"],b:"Kaikeyi's two boons lead to Rama's exile and Bharata's coronation demand."},
  {n:"Kaushalya",q:"Kausalya",r:"Mother of Rama",i:"🌺",c:["#c0392b","#e9a23b"],aka:"—",fam:"Chief queen of Ayodhya",sp:"Dasharatha",bro:"—",ev:["Gives birth to Rama","Blesses Rama before exile","Mourns the king and her son","Welcomes Rama home"],b:"Kaushalya is the gentle, patient mother of Rama and the chief queen of Ayodhya."},
  {n:"Sumitra",q:"Sumitra",r:"Mother of Lakshmana",i:"🌼",c:["#3b6fb5","#e0b84f"],aka:"—",fam:"Queen of Ayodhya",sp:"Dasharatha",bro:"—",ev:["Mother of Lakshmana and Shatrughna","Urges Lakshmana to serve Rama","Comforts Kausalya"],b:"Sumitra is the wise queen who sends Lakshmana with Rama, telling him to serve with devotion."},
  {n:"Jambavan",q:"Jambavan",r:"The wise bear king",i:"🐻",c:["#6b4a3a","#c9892b"],aka:"Jambavat",fam:"King of the bears",sp:"—",bro:"—",ev:["Reminds Hanuman of his strength","Joins the search for Sita","Fights in the war on Lanka"],b:"Jambavan is the aged and wise bear king, a trusted counselor of Rama's army."},
  {n:"Angada",q:"Angada",r:"The brave Vanara prince",i:"💪",c:["#b5793a","#3b6fb5"],aka:"—",fam:"Son of Vali",sp:"—",bro:"—",ev:["Leads the southern search party","Named crown prince by Sugriva","Goes as Rama's envoy to Ravana","Fights in the great war"],b:"Angada, son of Vali, is a brave and loyal Vanara prince who serves Rama."},
  {n:"Valmiki",q:"Valmiki",r:"The sage-poet",i:"📜",c:["#e5792b","#5a8f4a"],aka:"Adikavi, the first poet",fam:"Sage living by the river Tamasa",sp:"—",bro:"—",ev:["Meets Narada and hears Rama's story","Composes the Ramayana","Shelters Sita in his ashram","Teaches Lava and Kusha"],b:"Valmiki is the sage who composed the Ramayana, honoured as the first poet."}
];
let D=[]; const app=document.getElementById("app");
const esc=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const num=n=>n.toLocaleString();
const art=(o,img)=>`<div class="art" style="--c1:${o.c[0]};--c2:${o.c[1]}"><span>${o.i}</span><img src="images/${img}.jpg" data-n="${img}" alt="${o.n}" onerror="imgx(this)"></div>`;
function imgx(i){const e=[".png",".webp",".jpeg"],n=+(i.dataset.t||0);if(n<e.length){i.dataset.t=n+1;i.src="images/"+i.dataset.n+e[n]}else i.remove()}
const sargas=k=>[...new Set(D.filter(d=>d.k===k).map(d=>+d.s))].sort((a,b)=>a-b);
const head=(t,s)=>`<h1>${t}</h1><p class="sub">${s||""}</p><div class="orn">✦</div>`;
const crumb=(...a)=>`<div class="crumb">${a.map(([l,h])=>h?`<a href="${h}">${l}</a>`:l).join(" › ")}</div>`;
const kcards=()=>`<div class="grid kc">${Object.entries(K).map(([k,o])=>`<a class="card" href="#/kanda/${k}">${art(o,k.toLowerCase())}<div class="body"><h3>${o.n}</h3><p>${o.t}</p></div></a>`).join("")}</div>`;
const chc=t=>{const c=C.find(x=>[x.n,x.q].some(y=>y.toLowerCase()===t));return c?`<a class="res chcard" href="#/character/${c.n}"><div class="av">${art(c,c.im||c.n.toLowerCase())}</div><div><b>${c.n}</b><br>${c.r} — view profile ›</div></a>`:""};
const chips=()=>`<div class="chips">${["Rama","Seetha","Hanuma","Ravana","Ayodhya","Forest"].map(w=>`<a class="chip" href="#/search/${w}">${w}</a>`).join("")}</div>`;

const hero=`<svg viewBox="0 0 1000 380" preserveAspectRatio="xMidYMid slice"><circle cx="760" cy="150" r="70" fill="#fff3c4" opacity=".9"/><circle cx="760" cy="150" r="110" fill="#ffe08a" opacity=".3"/><path d="M0 240 L140 130 L240 210 L380 100 L520 230 L640 150 L800 240 L1000 140 V380 H0Z" fill="#c98f6a" opacity=".6"/><path d="M0 280 L120 210 L260 270 L420 190 L600 280 L780 200 L1000 280 V380H0Z" fill="#7c6a5a" opacity=".75"/><g fill="#5a3a2a"><path d="M690 262h90v-18l-45-30-45 30z"/><rect x="728" y="196" width="14" height="18"/></g><path d="M0 300 Q250 280 500 305 T1000 295 V380H0Z" fill="#6ea9a6"/><path d="M0 335 Q250 318 500 338 T1000 330 V380H0Z" fill="#4f8f8f"/><g fill="#7a1a1a" opacity=".85"><path d="M840 380V300q10-30 30 0V380z"/><circle cx="855" cy="282" r="14"/></g></svg>`;

function home(){app.innerHTML=`<section class="hero">${hero}<img class="hbg" src="images/hero.jpg" alt="" onerror="this.remove()"><div class="txt"><p class="sa">रामायण</p><h1>The Eternal Epic</h1><p>Explore the timeless story of Lord Rama, his journey, his values and his eternal legacy.</p><form class="herosearch" id="hs"><input placeholder="Search verses, characters or keywords…"><button class="btn">Search</button></form></div></section>
${cta()}${vod()}<h2 style="margin-top:34px">The 6 Kandas</h2><div class="orn">✦</div>${kcards()}
<h2 style="margin-top:36px">Rama's Journey</h2><div class="orn">✦</div><div class="tl">${Object.entries(K).map(([k,o])=>`<a href="#/kanda/${k}" class="tli"><i style="background:linear-gradient(135deg,${o.c[0]},${o.c[1]})">${o.i}</i><b>${o.n}</b><span>${o.t}</span></a>`).join("")}</div>
<div class="mini"><a href="#/kandas"><span>📜</span>${Object.keys(K).length} Kandas</a><a href="#/search"><span>🔍</span>${num(D.length)} Verses</a><a href="#/characters"><span>👤</span>Characters</a><a href="#/about"><span>📖</span>About</a></div>`;
  document.getElementById("hs").onsubmit=e=>{e.preventDefault();location.hash="#/search/"+encodeURIComponent(e.target[0].value)}}

function kandas(){app.innerHTML=head("The Six Kandas","Explore each part of the Ramayana")+kcards()}

function kanda(k){const o=K[k];if(!o)return home();const ss=sargas(k),n=D.filter(d=>d.k===k).length;
  app.innerHTML=crumb(["← Back to Kandas","#/kandas"])+`<div class="intro kin">${art(o,k.toLowerCase())}<div class="t"><h1>${o.n}</h1><p class="sub" style="text-align:left"><i>${o.t}</i></p><p>${o.d}</p><div class="stats"><span><b>${ss.length}</b>Sargas</span><span><b>${num(n)}</b>Verses</span></div></div></div>
<h2 style="text-align:left;margin-top:30px">Sargas</h2><div class="list">${ss.map(s=>{const f=D.find(x=>x.k===k&&+x.s===s).t;return `<a class="row" href="#/sarga/${k}/${s}"><span class="num">${s}</span><span class="t"><b>Sarga ${s}</b><small>${esc(f)}</small></span><span class="go">›</span></a>`}).join("")}</div>`}

function sarga(k,s){s=+s;const l=sargas(k),i=l.indexOf(s);if(i<0)return home();const vs=D.filter(d=>d.k===k&&+d.s===s);ls.setItem("last",k+"/"+s);
  const p=i>0?`<a class="btn alt" href="#/sarga/${k}/${l[i-1]}">← Previous Sarga</a>`:"<span></span>",nx=i<l.length-1?`<a class="btn" href="#/sarga/${k}/${l[i+1]}">Next Sarga →</a>`:"<span></span>";
  app.innerHTML=crumb(["Home","#/"],[K[k].n,"#/kanda/"+k],["Sarga "+s])+`<div class="sbanner">${art(K[k],k.toLowerCase())}</div>`+head(`${K[k].n} – Sarga ${s}`,`${vs.length} verses`)+`<div class="tb"><button data-act="fs" data-d="-2" aria-label="Smaller text">A−</button><button data-act="fs" data-d="2" aria-label="Larger text">A+</button></div>`+vs.map(vcard).join("")+`<div class="pager">${p}${nx}</div>`}

function search(q){q=decodeURIComponent(q||"");
  app.innerHTML=head("Search Ramayana","Find verses, characters or keywords")+`<div class="srow"><input class="big" id="q" placeholder="e.g. Rama, Seetha, Ayodhya, forest…" value="${esc(q)}"><select id="kf" aria-label="Filter by Kanda"><option value="">All Kandas</option>${Object.entries(K).map(([k,o])=>`<option value="${k}">${o.n}</option>`).join("")}</select></div><div style="margin-top:14px"><h3>Popular Searches</h3>${chips()}</div><p id="cnt" class="sub"></p><div id="out"></div>`;
  const kf=document.getElementById("kf"),inp=document.getElementById("q"),run=()=>{const t=inp.value.trim().toLowerCase(),o=document.getElementById("out"),c=document.getElementById("cnt");
    if(t.length<2){o.innerHTML="";c.textContent="";return}
    const h=D.filter(d=>(!kf.value||d.k===kf.value)&&d.t.toLowerCase().includes(t)),re=new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi");
    c.innerHTML=`Showing results for “${esc(t)}” — <b>${num(h.length)}</b> verses${h.length>100?" (first 100 shown)":""}`;
    o.innerHTML=chc(t)+h.slice(0,100).map(v=>`<a class="res" href="#/sarga/${v.k}/${v.s}"><b>${K[v.k].n} • Sarga ${v.s} • Verse ${v.v}</b><br>${esc(v.t).replace(re,m=>`<mark>${m}</mark>`)}</a>`).join("")};
  inp.oninput=run;kf.onchange=run;run()}

function characters(){app.innerHTML=head("Characters","Meet the key characters of the Ramayana")+`<div class="grid chars">${C.map(c=>`<a class="card" href="#/character/${c.n}">${art(c,c.im||c.n.toLowerCase())}<div class="body"><h3>${c.n}</h3><p>${c.r}</p></div></a>`).join("")}</div>`}

function character(n){const c=C.find(x=>x.n===n);if(!c)return characters();
  const re=new RegExp("\\b"+c.q,"i"),h=D.filter(d=>re.test(d.t)),ks=new Set(h.map(d=>d.k)).size;
  app.innerHTML=crumb(["Home","#/"],["Characters","#/characters"],[c.n])+`<div class="intro">${art(c,c.im||c.n.toLowerCase())}<div class="t"><h1>${c.n}</h1><p class="sub" style="text-align:left"><i>${c.r}</i></p><p>${c.b}</p><a class="btn" href="#/search/${c.q}">Read verses mentioning ${c.n}</a></div></div>
<div class="facts"><p><b>Also known as</b>${c.aka}</p><p><b>Family</b>${c.fam}</p><p><b>Spouse</b>${c.sp}</p><p><b>Brothers / Siblings</b>${c.bro}</p><p><b>Mentions</b>${num(h.length)} verses in ${ks} Kandas</p></div>
<h2 style="text-align:left">Important Events</h2><div class="facts"><ul>${c.ev.map(e=>`<li>${e}</li>`).join("")}</ul></div>`}

function about(){const cn=Object.keys(K).map(k=>D.filter(d=>d.k===k).length),mx=Math.max(...cn),sg=Object.keys(K).reduce((a,k)=>a+sargas(k).length,0);
  app.innerHTML=head("About Ramayana","A timeless tale of dharma, courage and devotion")+`<div class="intro"><div class="t"><p>The Ramayana is one of the greatest epics of Indian literature, written by Sage Valmiki. It tells the story of Lord Rama, his life and his journey of righteousness, love and sacrifice.</p><p>This website is a simple digital library to help everyone explore the verses, sargas and teachings of the Ramayana in English translation.</p></div></div>
<div class="mini"><a href="#/kandas"><span>📜</span>${Object.keys(K).length} Kandas</a><a href="#/kandas"><span>📖</span>${sg} Sargas</a><a href="#/search"><span>🔍</span>${num(D.length)} Verses</a><a href="#/characters"><span>👤</span>${C.length} Characters</a></div><h2 style="margin-top:30px">Verses in each Kanda</h2><div class="facts">${Object.keys(K).map((k,i)=>`<div class="bar"><span>${K[k].n}</span><div><i style="width:${cn[i]/mx*100}%;background:linear-gradient(90deg,${K[k].c[0]},${K[k].c[1]})"></i></div><b>${num(cn[i])}</b></div>`).join("")}</div>`}

function route(){const[,p,a,b]=location.hash.split("/");
  document.querySelectorAll("#nav a").forEach(x=>x.classList.toggle("on",x.dataset.p===(p||"")));
  const pages={kandas,kanda:()=>kanda(a),sarga:()=>sarga(a,b),search:()=>search(a),characters,character:()=>character(decodeURIComponent(a||"")),about,bookmarks};
  (pages[p]||home)();
  app.classList.remove("fade");void app.offsetWidth;app.classList.add("fade");if(p!=="search")scrollTo(0,0)}
document.getElementById("hq").onkeydown=e=>{if(e.key==="Enter"&&e.target.value.trim()){location.hash="#/search/"+encodeURIComponent(e.target.value.trim());e.target.value=""}};
const th=()=>{try{return localStorage}catch(e){return{getItem(){},setItem(){}}}};
if(th().getItem("dark"))document.body.classList.add("dark");
document.getElementById("theme").onclick=()=>{document.body.classList.toggle("dark");th().setItem("dark",document.body.classList.contains("dark")?"1":"")};
const ls=th(),vid=v=>v.k+"|"+v.s+"|"+v.v;
const bk=()=>"bm";
const bm=()=>{try{return JSON.parse(ls.getItem(bk()))||[]}catch(e){return[]}};
const toast=m=>{const t=document.getElementById("toast");t.textContent=m;t.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("show"),1800)};
const vcard=v=>{const id=vid(v),on=bm().includes(id);return `<div class="verse"><span class="tag">Verse ${v.v}</span>${esc(v.t)}<div class="acts"><button data-act="say" data-id="${id}" title="Listen" aria-label="Listen">🔊</button><button data-act="cp" data-id="${id}" title="Copy" aria-label="Copy verse">📋</button><button data-act="bm" data-id="${id}" class="${on?"on":""}" title="Bookmark" aria-label="Bookmark">${on?"★":"☆"}</button></div></div>`};
const vod=()=>{const p=D.filter(d=>d.t.length>80&&d.t.length<260),v=p[(Math.floor(Date.now()/864e5)*7919)%p.length],id=vid(v);return `<section class="vod"><h3>🪷 Verse of the Day</h3><p>“${esc(v.t)}”</p><small>${K[v.k].n} • Sarga ${v.s} • Verse ${v.v}</small><div class="acts"><a class="btn alt" href="#/sarga/${v.k}/${v.s}">Read in context</a><button data-act="say" data-id="${id}" aria-label="Listen">🔊</button><button data-act="cp" data-id="${id}" aria-label="Copy verse">📋</button></div></section>`};
const cta=()=>{const l=(ls.getItem("last")||"").split("/");return `<div class="cta">${K[l[0]]?`<a class="btn" href="#/sarga/${l[0]}/${l[1]}">Continue: ${K[l[0]].n}, Sarga ${l[1]}</a>`:""}<button class="btn alt" data-act="rnd">🎲 Surprise me</button><a class="btn alt" href="#/bookmarks">★ Saved (${bm().length})</a></div>`};
function bookmarks(){const vs=bm().map(id=>D.find(d=>vid(d)===id)).filter(Boolean);app.innerHTML=head("Saved Verses","Your personal collection")+(vs.length?vs.map(v=>`<a class="crumb" href="#/sarga/${v.k}/${v.s}" style="display:block;text-align:right">${K[v.k].n} • Sarga ${v.s} ›</a>`+vcard(v)).join(""):`<p class="sub">Nothing saved yet. Tap ☆ on any verse to keep it here.</p>`)}
app.addEventListener("click",e=>{const b=e.target.closest("[data-act]");if(!b)return;const a=b.dataset.act,id=b.dataset.id,v=id&&D.find(d=>vid(d)===id);
  if(a==="rnd"){const r=D[Math.floor(Math.random()*D.length)];location.hash=`#/sarga/${r.k}/${r.s}`}
  else if(a==="fs"){const c=Math.min(34,Math.max(16,(parseInt(ls.getItem("fs"))||22)+ +b.dataset.d));ls.setItem("fs",c);document.documentElement.style.setProperty("--fs",c+"px")}
  else if(a==="cp"&&v){navigator.clipboard?.writeText(v.t+"\n— Valmiki Ramayana, "+K[v.k].n+" "+v.s+"."+v.v);toast("Verse copied")}
  else if(a==="say"&&v){if(!window.speechSynthesis)return toast("Audio not supported");if(speechSynthesis.speaking){speechSynthesis.cancel();return}const u=new SpeechSynthesisUtterance(v.t);u.lang="en-IN";speechSynthesis.speak(u)}
  else if(a==="bm"&&v){let l=bm();const had=l.includes(id);l=had?l.filter(x=>x!==id):[...l,id];ls.setItem(bk(),JSON.stringify(l));toast(had?"Removed from saved":"Saved ★");if(location.hash==="#/bookmarks")route();else{b.textContent=had?"☆":"★";b.classList.toggle("on")}}
});
if(ls.getItem("fs"))document.documentElement.style.setProperty("--fs",ls.getItem("fs")+"px");
addEventListener("scroll",()=>{const h=document.documentElement;document.getElementById("bar").style.width=h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100+"%";document.getElementById("top").classList.toggle("show",h.scrollTop>400)});
document.getElementById("top").onclick=()=>scrollTo({top:0,behavior:"smooth"});
addEventListener("keydown",e=>{if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;if(e.key==="/"){e.preventDefault();document.getElementById("hq").focus()}if(e.key==="ArrowLeft")document.querySelector(".pager a.alt")?.click();if(e.key==="ArrowRight")document.querySelector(".pager a:not(.alt)")?.click()});
function parse(t){const r=[];let w=[],f="",q=0;for(let i=0;i<t.length;i++){const c=t[i];
  if(q){if(c=='"'){if(t[i+1]=='"'){f+='"';i++}else q=0}else f+=c}else if(c=='"')q=1;else if(c==","){w.push(f);f=""}else if(c=="\n"){w.push(f);r.push(w);w=[];f=""}else if(c!="\r")f+=c}
  if(f||w.length){w.push(f);r.push(w)}return r}
fetch("data/ramayana.csv").then(r=>r.text()).then(t=>{
  D=parse(t.replace(/^\uFEFF/,"")).slice(1).filter(r=>r.length>=4).map(r=>({k:r[0].trim(),s:r[1].trim(),v:r[2].trim(),t:r[3]}));
  addEventListener("hashchange",route);route()
}).catch(()=>app.innerHTML="<p>Could not load data. Open the site with Live Server instead of double-clicking the file.</p>");
