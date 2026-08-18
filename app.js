const WA='393317702747';
const pages=['home','menu','prenota','asporto'];
const menuData={
  'Antipasti':[
    ['La Primavera','Bruschette di pane casereccio con salse, creme e primizie di stagione del nostro orto ed eccellenze del territorio etrusco',7],
    ['Il Buttero','Girello di Manzetta Maremmana Mariotti di Montalto di Castro con salsa allo yogurt di capra, verdure in agrodolce e mostarda di aglio nero',14],
    ['Il Cacio Etrusco','Formaggi dell’Alta Tuscia nelle varie stagionature, frutta fresca e secca, confettura, gelatine e miele',18],
    ['Il Parco delle Querce','Carrellata di antipasti di terra con salumi locali, norcineria, formaggi, bruschette e frittelle di verdure',24],
    ['Il Tagliere del Norcino','Selezione dei migliori salumi artigianali del territorio, prodotti e stagionati secondo la tradizione sui Colli Viterbesi',14],
    ['Il Pescatore','Filetto di coregone del Lago di Bolsena con cipolla caramellata all’Aleatico di Gradoli, pepe rosa e menta piperita',14],
    ['Il Villano','Rivisitazione contemporanea della panzanella: semifreddo di pomodoro, olio al basilico e pane casereccio',12]
  ],
  'Primi':[
    ['All’ombra della Quercia','Spaghettoni al farro e farina di ghiande con tartufo nero, fiori di zucca e pancetta croccante',14],
    ['A spasso tra i borghi','Biche alla farina di grani antichi del Viterbese con sugo al pomodoro datterino, finocchietto selvatico e aglio rosso di Proceno',14],
    ['Ricordo di Nonna Flora','Raviolo di sfoglia all’uovo all’Acquacotta e salsiccia artigianale locale, con perle di tuorlo e jus vegetale',14],
    ['Gita in barca','Gnocchetti di patate dell’Alto Viterbese al ragù di pesce di Lago di Bolsena, secondo disponibilità',14]
  ],
  'Secondi':[
    ['Il Gallozzo','Tagliata di pollo ruspante, mosto cotto, misticanza di campo e mandorle tostate',20],
    ['La Scamorrita','Costine di suino brado con rub di spezie piccanti e salsa barbecue all’aglio nero',20],
    ['Gli Abbacchi','Arrosticini di pecora Lacaune al sale marino e spezie estive con olio Evo di Marta',20],
    ['Il Boccalone','Filetto di Persico del Lago di Bolsena fritto in panatura croccante con salsa verde',20],
    ['Il Leprino','Spezzatino di coniglio verde leprino viterbese a bujone, stracotto al buio del tegame con pomodoro, olive secche ed erbe',20]
  ],
  'Menù speciali':[
    ['Giro in Tuscia','Antipasto con eccellenze della Tuscia · pizza con ingredienti del Viterbese · dessert stagionale · bevande',30],
    ['Speciale Menù Bambino','Proposta dedicata ai bambini; valida esclusivamente se accettata da tutti i commensali presenti al tavolo',18]
  ]
};
const takeawayData={
  'Antipasti':menuData['Antipasti'].slice(0,4),
  'Primi':menuData['Primi'],
  'Secondi':menuData['Secondi']
};
let activeMenu='Antipasti', activeTake='Antipasti', cart={};
function show(page){pages.forEach(p=>document.getElementById(p).classList.toggle('active',p===page));document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.go===page));window.scrollTo({top:0,behavior:'smooth'});}
document.addEventListener('click',e=>{const go=e.target.closest('[data-go]');if(go){e.preventDefault();show(go.dataset.go)}});
function chips(container,items,current,setter){const el=document.getElementById(container);el.innerHTML=items.map(x=>`<button class="chip ${x===current?'active':''}" data-chip="${x}">${x}</button>`).join('');el.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{setter(b.dataset.chip);chips(container,items,b.dataset.chip,setter);render()})}
function renderMenu(){const list=document.getElementById('menuList');list.innerHTML=menuData[activeMenu].map(i=>`<article class="menu-item"><div><h3>${i[0]}</h3><p>${i[1]}</p></div><span class="price">€${i[2].toFixed(2).replace('.',',')}</span></article>`).join('')}
function renderTake(){const list=document.getElementById('takeawayList');list.innerHTML=takeawayData[activeTake].map(i=>{const q=cart[i[0]]||0;return `<article class="take-item"><div><h3>${i[0]}</h3><p>${i[1]}</p><span class="price">€${i[2].toFixed(2).replace('.',',')}</span></div><div class="qty"><button data-q="${i[0]}" data-dir="-1">−</button><span>${q}</span><button data-q="${i[0]}" data-dir="1">+</button></div></article>`}).join('');list.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{const n=b.dataset.q;cart[n]=Math.max(0,(cart[n]||0)+Number(b.dataset.dir));renderTake();updateTotal()})}
function updateTotal(){let total=0;for(const [name,q] of Object.entries(cart)){for(const cat of Object.values(takeawayData)){const i=cat.find(x=>x[0]===name);if(i){total+=i[2]*q;break}}}document.getElementById('orderTotal').textContent='€'+total.toFixed(2).replace('.',',')}
function render(){chips('menuChips',Object.keys(menuData),activeMenu,v=>activeMenu=v);chips('takeawayChips',Object.keys(takeawayData),activeTake,v=>activeTake=v);renderMenu();renderTake();updateTotal()}
render();
const date=document.getElementById('bookingDate');date.min=new Date().toISOString().slice(0,10);document.getElementById('bookingPeople').oninput=e=>document.getElementById('bookingSummary').textContent=`${e.target.value} ${e.target.value==='1'?'persona':'persone'}`;
document.getElementById('bookingForm').onsubmit=e=>{e.preventDefault();const d=date.value;const p=document.getElementById('bookingPeople').value;const t=document.getElementById('bookingTime').value;const n=document.getElementById('bookingName').value;const phone=document.getElementById('bookingPhone').value;const notes=document.getElementById('bookingNotes').value;const msg=`🍽️ RICHIESTA PRENOTAZIONE — PARCO DELLE QUERCE\n\n👤 Nome: ${n}\n📱 Telefono: ${phone}\n📅 Data: ${d}\n🕐 Orario: ${t}\n👥 Persone: ${p}\n📝 Note/allergie: ${notes||'Nessuna'}\n\nRichiesta inviata dal sito.`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank');toast('Richiesta pronta su WhatsApp.')};
document.getElementById('sendOrder').onclick=()=>{const items=[];let total=0;for(const [name,q] of Object.entries(cart)){if(q){let item;for(const cat of Object.values(takeawayData)){item=cat.find(x=>x[0]===name);if(item)break}if(item){items.push(`${q}× ${name} — €${(item[2]*q).toFixed(2)}`);total+=item[2]*q}}}if(!items.length){toast('Aggiungi almeno un prodotto.');return}const msg=`🥡 ORDINE DA ASPORTO — PARCO DELLE QUERCE\n\n${items.join('\n')}\n\n💶 Totale indicativo: €${total.toFixed(2)}\n\nDa confermare su WhatsApp.`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank')};
function toast(text){const t=document.getElementById('toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
