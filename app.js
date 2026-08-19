const WA='393317702747';
const BOOKING_WA='393317702747';
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
  'Pizze stagionali':[
    ['Cavajano','Fiordilatte, fiori di zucca, alici del Mediterraneo, tartufo nero scorzone estivo, olio Evo monocultivar Canino',15],
    ['Kornoss','Pomodoro, girello di manzo locale in bassa cottura, mandorle della Costa dei Tirreni, mostarda di aglio nero, erbe spontanee',15],
    ['Spereta','Fiordilatte, cipolla caramellata, prezzemolo, aglio rosso di Proceno, filetti di coregone marinato del Lago di Bolsena',15],
    ['Grancarro','Fiordilatte, bottarga di coregone del Lago di Bolsena, zest di limone, pinoli',15]
  ],
  'Pizze bianche':[
    ['Biancaneve','Fior di latte',7],['Cenerentola','Fior di latte, prosciutto crudo Salumificio Gam di Montefiascone',9],['Focaccia','Olio Evo della Tuscia, rosmarino',5],
    ['Verace','Fiordilatte, patate dell’Alto Viterbese al forno, finocchietto selvatico, salsiccia artigianale MGE di Valentano',14],
    ['Caciara','Fior di latte, crema artigianale di nostra produzione con formaggi del Viterbese',13],['Contadina','Fiordilatte, zucchine romanesche a julienne, prosciutto cotto di pollo ruspante',14],
    ['Vegetariana','Fior di latte, verdure fresche di stagione',11],['Rustica','Fior di latte, chips di patate viola dell’Alto Viterbese, wurstel artigianale',13],
    ['Campestre','Fiordilatte, pomodori ciliegino, rucola, grana locale',13],['Francescana','Fior di latte, tonno sott’olio, cipolla, olive nere',13],
    ['Maremmana','Fior di latte, champignons, salsiccia artigianale GME di Valentano, prosciutto cotto Valleperlata di Montefiascone',15],
    ['Montagnola','Fior di latte, prosciutto crudo affumicato, erborinato Piradoro',14],['Tricolore','Fior di latte, carpaccio di Manzetta Maremmana, rucola, grana locale',15],
    ['Carbonara','Fior di latte, pancetta stagionata, uovo da galline libere del Viterbese, pecorino stagionato',13],['Burina','Fior di latte, pancetta stagionata, scamorza affumicata, patate dell’Alto Viterbese',13],
    ['Ortolana','Fiordilatte, macedonia di verdure stagionali, salsiccia artigianale GME di Valentano',14],['Deliziosa','Fior di latte, mortadella di cinghiale, salsa tartufata, grana locale',14],
    ['Birichina','Fior di latte, zucchine, scamorza affumicata, salsiccia artigianale GME di Valentano',13]
  ],
  'Pizze rosse':[
    ['Ionica','Fiordilatte, pomodoro, Non è la Nduja, scamorza affumicata, melanzane',15],['Cacciatora','Fior di latte, pomodoro, prosciutto di cinghiale, olive nere',15],
    ['Vulcanica','Fior di latte, pomodoro, salame piccante, salsiccia artigianale GME di Valentano, uovo, salsa tartufata',15],
    ['Bisentina','Fior di latte, pomodoro, crema artigianale con formaggi del Viterbese, salsiccia artigianale, salsa tartufata',14],
    ['Etrusca','Fior di latte, pomodoro, capocollo stagionato, pecorino Rocca',14],['Amatriciana','Fior di latte, pomodoro, guanciale stagionato, pecorino, pepe nero',13],
    ['Audace','Fior di latte, pomodoro, salame piccante, erborinato Piradoro, cipolle',15],['Vitorchianese','Fior di latte, pomodoro, peperoncino di Cayenna, aglio rosso di Proceno, finocchietto selvatico',12],
    ['Margherita','Fior di latte, pomodoro',9],['Napoletana','Fior di latte, pomodoro, alici sott’olio del Tirreno',12],['Marinara','Pomodoro, origano, aglio rosso di Proceno',9],
    ['Diavola','Fior di latte, pomodoro, salame piccante, olive nere, peperoncino di Cayenna',13],['Capricciosa','Fior di latte, pomodoro, prosciutto cotto, carciofi, champignon, olive nere',14],
    ['Peperina','Fiordilatte, pomodoro, peperoni, salsiccia artigianale MGE di Valentano',13],['Quattro Stagioni','Fior di latte, pomodoro, prosciutto cotto, carciofi, olive nere, champignon',14],
    ['Macchiarola','Fiordilatte, pomodoro, funghi champignons, salsiccia artigianale MGE di Valentano',14],['Norcina','Fior di latte, pomodoro, salsiccia artigianale GME di Valentano, prosciutto cotto, pancetta stagionata',14]
  ],
  'Calzoni':[
    ['Tradizionale','Fiordilatte, prosciutto cotto Valleperlata di Montefiascone',12],['Fantasioso','Fior di latte, salsiccia artigianale MGE di Valentano, prosciutto cotto Valleperlata di Montefiascone, funghi porcini',14],
    ['Paesano','Fior di latte, verdure fresche di stagione ripassate, pecorino di Rocca, guanciale stagionato',14],['Infuocato','Fior di latte, salame piccante, Non è la Nduja, peperoncino di Cayenna',14]
  ],
  'Fritti':[
    ['Il Fupplì','Supplì al telefono con farro del Pungolo, ragù di Cinta Senese e cuore filante di fiordilatte',3],['Il Nostrano','Tutte le nostre produzioni in un goloso assaggio di ognuna: un mix di sfizi prodotti in casa',10],
    ['Le Grottane','Frittelle di patate dell’Alto Viterbese al pepe nero e rosmarino con maionese artigianale al limone fermentato',8],['Il Raggio di Sole','Fiori di zucca del nostro orto in pastella di grani antichi, fiordilatte e alici del Mediterraneo',3],
    ['L’Ortolano','Verdurine dell’orto in pastella di farina di grani antichi e birra artigianale Blonde Ale',8],['Il Casereccio','Pizzette e frittelline in abbinamento ai salami della Tuscia e crema di bufala',10]
  ],
  'Menù speciali':[
    ['Giro in Tuscia','Antipasto con eccellenze della Tuscia · pizza con ingredienti del Viterbese · dessert stagionale · bevande',30],
    ['Speciale Menù Bambino','Proposta dedicata ai bambini; valida esclusivamente se accettata da tutti i commensali presenti al tavolo',18]
  ]
};
const takeawayData={
  'Pizze stagionali':[
    ['Cavajano','Fiordilatte, fiori di zucca, alici del Mediterraneo, tartufo nero scorzone estivo, olio Evo monocultivar Canino',15],
    ['Kornoss','Pomodoro, girello di manzo locale in bassa cottura, mandorle della Costa dei Tirreni, mostarda di aglio nero, erbe spontanee',15],
    ['Spereta','Fiordilatte, cipolla caramellata, prezzemolo, aglio rosso di Proceno, filetti di coregone marinato del Lago di Bolsena',15],
    ['Grancarro','Fiordilatte, bottarga di coregone del Lago di Bolsena, zest di limone, pinoli',15]
  ],
  'Pizze bianche':[
    ['Biancaneve','Fior di latte',7],['Cenerentola','Fior di latte, prosciutto crudo Salumificio Gam di Montefiascone',9],['Focaccia','Olio Evo della Tuscia, rosmarino',5],
    ['Verace','Fiordilatte, patate dell’Alto Viterbese al forno, finocchietto selvatico, salsiccia artigianale MGE di Valentano',14],
    ['Caciara','Fior di latte, crema artigianale di nostra produzione con formaggi del Viterbese',13],['Contadina','Fiordilatte, zucchine romanesche a julienne, prosciutto cotto di pollo ruspante',14],
    ['Vegetariana','Fior di latte, verdure fresche di stagione',11],['Rustica','Fior di latte, chips di patate viola dell’Alto Viterbese, wurstel artigianale',13],
    ['Campestre','Fiordilatte, pomodori ciliegino, rucola, grana locale',13],['Francescana','Fior di latte, tonno sott’olio, cipolla, olive nere',13],
    ['Maremmana','Fior di latte, champignons, salsiccia artigianale GME di Valentano, prosciutto cotto Valleperlata di Montefiascone',15],
    ['Montagnola','Fior di latte, prosciutto crudo affumicato, erborinato Piradoro',14],['Tricolore','Fior di latte, carpaccio di Manzetta Maremmana, rucola, grana locale',15],
    ['Carbonara','Fior di latte, pancetta stagionata, uovo da galline libere del Viterbese, pecorino stagionato',13],['Burina','Fior di latte, pancetta stagionata, scamorza affumicata, patate dell’Alto Viterbese',13],
    ['Ortolana','Fiordilatte, macedonia di verdure stagionali, salsiccia artigianale GME di Valentano',14],['Deliziosa','Fior di latte, mortadella di cinghiale, salsa tartufata, grana locale',14],
    ['Birichina','Fior di latte, zucchine, scamorza affumicata, salsiccia artigianale GME di Valentano',13]
  ],
  'Pizze rosse':[
    ['Ionica','Fiordilatte, pomodoro, Non è la Nduja, scamorza affumicata, melanzane',15],['Cacciatora','Fior di latte, pomodoro, prosciutto di cinghiale, olive nere',15],
    ['Vulcanica','Fior di latte, pomodoro, salame piccante, salsiccia artigianale GME di Valentano, uovo, salsa tartufata',15],
    ['Bisentina','Fior di latte, pomodoro, crema artigianale con formaggi del Viterbese, salsiccia artigianale, salsa tartufata',14],
    ['Etrusca','Fior di latte, pomodoro, capocollo stagionato, pecorino Rocca',14],['Amatriciana','Fior di latte, pomodoro, guanciale stagionato, pecorino, pepe nero',13],
    ['Audace','Fior di latte, pomodoro, salame piccante, erborinato Piradoro, cipolle',15],['Vitorchianese','Fior di latte, pomodoro, peperoncino di Cayenna, aglio rosso di Proceno, finocchietto selvatico',12],
    ['Margherita','Fior di latte, pomodoro',9],['Napoletana','Fior di latte, pomodoro, alici sott’olio del Tirreno',12],['Marinara','Pomodoro, origano, aglio rosso di Proceno',9],
    ['Diavola','Fior di latte, pomodoro, salame piccante, olive nere, peperoncino di Cayenna',13],['Capricciosa','Fior di latte, pomodoro, prosciutto cotto, carciofi, champignon, olive nere',14],
    ['Peperina','Fiordilatte, pomodoro, peperoni, salsiccia artigianale MGE di Valentano',13],['Quattro Stagioni','Fior di latte, pomodoro, prosciutto cotto, carciofi, olive nere, champignon',14],
    ['Macchiarola','Fiordilatte, pomodoro, funghi champignons, salsiccia artigianale MGE di Valentano',14],['Norcina','Fior di latte, pomodoro, salsiccia artigianale GME di Valentano, prosciutto cotto, pancetta stagionata',14]
  ],
  'Calzoni':[
    ['Tradizionale','Fiordilatte, prosciutto cotto Valleperlata di Montefiascone',12],['Fantasioso','Fior di latte, salsiccia artigianale MGE di Valentano, prosciutto cotto Valleperlata di Montefiascone, funghi porcini',14],
    ['Paesano','Fior di latte, verdure fresche di stagione ripassate, pecorino di Rocca, guanciale stagionato',14],['Infuocato','Fior di latte, salame piccante, Non è la Nduja, peperoncino di Cayenna',14]
  ],
  'Fritti':[
    ['Il Fupplì','Supplì al telefono con farro del Pungolo, ragù di Cinta Senese e cuore filante di fiordilatte',3],['Il Nostrano','Tutte le nostre produzioni in un goloso assaggio di ognuna: un mix di sfizi prodotti in casa',10],
    ['Le Grottane','Frittelle di patate dell’Alto Viterbese al pepe nero e rosmarino con maionese artigianale al limone fermentato',8],['Il Raggio di Sole','Fiori di zucca del nostro orto in pastella di grani antichi, fiordilatte e alici del Mediterraneo',3],
    ['L’Ortolano','Verdurine dell’orto in pastella di farina di grani antichi e birra artigianale Blonde Ale',8],['Il Casereccio','Pizzette e frittelline in abbinamento ai salami della Tuscia e crema di bufala',10]
  ]
};
let activeMenu='Antipasti', activeTake='Pizze stagionali', cart={};
function show(page){pages.forEach(p=>document.getElementById(p).classList.toggle('active',p===page));document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.go===page));window.scrollTo({top:0,behavior:'smooth'});}
document.addEventListener('click',e=>{const go=e.target.closest('[data-go]');if(go){e.preventDefault();show(go.dataset.go)}});
function chips(container,items,current,setter){const el=document.getElementById(container);el.innerHTML=items.map(x=>`<button class="chip ${x===current?'active':''}" data-chip="${x}">${x}</button>`).join('');el.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{setter(b.dataset.chip);chips(container,items,b.dataset.chip,setter);render()})}
function renderMenu(){const list=document.getElementById('menuList');list.innerHTML=menuData[activeMenu].map(i=>`<article class="menu-item"><div><h3>${i[0]}</h3><p>${i[1]}</p></div><span class="price">€${i[2].toFixed(2).replace('.',',')}</span></article>`).join('')}
function renderTake(){const list=document.getElementById('takeawayList');list.innerHTML=takeawayData[activeTake].map(i=>{const q=cart[i[0]]||0;return `<article class="take-item"><div><h3>${i[0]}</h3><p>${i[1]}</p><span class="price">€${i[2].toFixed(2).replace('.',',')}</span></div><div class="qty"><button data-q="${i[0]}" data-dir="-1">−</button><span>${q}</span><button data-q="${i[0]}" data-dir="1">+</button></div></article>`}).join('');list.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{const n=b.dataset.q;cart[n]=Math.max(0,(cart[n]||0)+Number(b.dataset.dir));renderTake();updateTotal()})}
function updateTotal(){let total=0;for(const [name,q] of Object.entries(cart)){for(const cat of Object.values(takeawayData)){const i=cat.find(x=>x[0]===name);if(i){total+=i[2]*q;break}}}document.getElementById('orderTotal').textContent='€'+total.toFixed(2).replace('.',',')}
function render(){chips('menuChips',Object.keys(menuData),activeMenu,v=>activeMenu=v);chips('takeawayChips',Object.keys(takeawayData),activeTake,v=>activeTake=v);renderMenu();renderTake();updateTotal()}
render();
const date=document.getElementById('bookingDate');date.min=new Date().toISOString().slice(0,10);document.getElementById('bookingPeople').oninput=e=>document.getElementById('bookingSummary').textContent=`${e.target.value} ${e.target.value==='1'?'persona':'persone'}`;
function openWhatsApp(number,message){
  const url=`https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  const a=document.createElement('a');
  a.href=url; a.target='_blank'; a.rel='noopener';
  document.body.appendChild(a); a.click(); a.remove();
}
document.getElementById('bookingForm').onsubmit=e=>{
  e.preventDefault();
  const d=date.value,p=document.getElementById('bookingPeople').value,t=document.getElementById('bookingTime').value;
  const n=document.getElementById('bookingName').value.trim(),phone=document.getElementById('bookingPhone').value.trim(),notes=document.getElementById('bookingNotes').value.trim();
  if(!d||!t||!n||!phone){toast('Compila tutti i campi obbligatori.');return}
  const msg=`🍽️ RICHIESTA PRENOTAZIONE — PARCO DELLE QUERCE\n\n👤 Nome: ${n}\n📱 Telefono: ${phone}\n📅 Data: ${d}\n🕐 Orario: ${t}\n👥 Persone: ${p}\n📝 Note/allergie: ${notes||'Nessuna'}\n\nRichiesta inviata dal sito.`;
  openWhatsApp(BOOKING_WA,msg);
};
document.getElementById('sendOrder').onclick=()=>{
  const items=[];let total=0;
  for(const [name,q] of Object.entries(cart)) if(q){let item;for(const cat of Object.values(takeawayData)){item=cat.find(x=>x[0]===name);if(item)break}if(item){items.push(`${q}× ${name} — €${(item[2]*q).toFixed(2).replace('.',',')}`);total+=item[2]*q}}
  if(!items.length){toast('Aggiungi almeno un prodotto.');return}
  const msg=`🥡 ORDINE DA ASPORTO — PARCO DELLE QUERCE\n\n${items.join('\n')}\n\n💶 Totale indicativo: €${total.toFixed(2).replace('.',',')}\n\nDa confermare su WhatsApp.`;
  openWhatsApp(WA,msg);
};
function toast(text){const t=document.getElementById('toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
