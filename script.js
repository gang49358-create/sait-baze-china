// ===== НАСТРОЙКИ: замени на свои =====
const CONFIG={tg:'bazechina',wa:'79000000000',admins:[{email:'admin@baze.china',pass:'admin123'}]};
// Фото кладите в папку img/ с именем из поля "img" (например img/jeremy-scott.jpg)
const P=[
{id:1,cat:'Кроссовки',n:'Adidas Jeremy Scott Wings',p:18900,img:'jeremy-scott.jpg',e:'👟',s:[38,39,40,41,42,43,44]},
{id:2,cat:'Кроссовки',n:'Adidas Jeremy Scott 2.0',p:21900,img:'jeremy-scott-2.jpg',e:'👟',s:[38,39,40,41,42,43,44]},
{id:3,cat:'Кроссовки',n:'Nike Air Force 1 Swarovski',p:24900,img:'af1-swarovski.jpg',e:'👟',s:[37,38,39,40,41,42,43]},
{id:4,cat:'Одежда',n:'Худи Baze Oversize',p:5900,img:'hoodie.jpg',e:'🧥',s:['S','M','L','XL']},
{id:5,cat:'Одежда',n:'Футболка Blue Wave',p:2900,img:'tshirt.jpg',e:'👕',s:['S','M','L','XL']},
{id:6,cat:'Одежда',n:'Карго-штаны Street',p:6500,img:'cargo.jpg',e:'👖',s:['S','M','L','XL']},
{id:7,cat:'Аксессуары',n:'Кепка Baze China',p:1900,img:'cap.jpg',e:'🧢',s:['Один размер']},
{id:8,cat:'Аксессуары',n:'Очки Y2K Blue',p:2400,img:'glasses.jpg',e:'🕶️',s:['Один размер']},
{id:9,cat:'Вещи',n:'Рюкзак Urban Black',p:4900,img:'bag.jpg',e:'🎒',s:['Один размер']},
{id:10,cat:'Вещи',n:'Шоппер Baze',p:1500,img:'shopper.jpg',e:'👜',s:['Один размер']}];
const $=s=>document.querySelector(s),L=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},S=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),reviews=()=>L('bc_rev',[]);
const fmt=n=>n.toLocaleString('ru-RU')+' ₽',h=btoa;
let cat='Все',cart=L('bc_cart',[]);
const me=()=>L('bc_me',null),users=()=>L('bc_users',[]),orders=()=>L('bc_orders',[]);
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');setTimeout(()=>e.classList.remove('on'),2200)}
function modal(html){$('#box').innerHTML=html;$('#mod').classList.add('on')}
function close(){$('#mod').classList.remove('on')}
$('#mod').onclick=e=>{if(e.target.id==='mod')close()};
// ===== Каталог =====
function tabs(){const c=['Все',...new Set(P.map(x=>x.cat))];$('#tabs').innerHTML=c.map(x=>`<button class="${x===cat?'on':''}" onclick="cat='${x}';tabs();grid()">${x}</button>`).join('')}
function grid(){$('#grid').innerHTML=P.filter(x=>cat==='Все'||x.cat===cat).map(x=>`<div class="card"><div class="im"><img src="img/${x.img}" alt="${x.n}" onerror="this.replaceWith(document.createTextNode('${x.e}'))"></div><div class="in2"><small>${x.cat}</small><h3>${x.n}</h3><select id="sz${x.id}">${x.s.map(s=>`<option>${s}</option>`).join('')}</select><div class="pr">${fmt(x.p)}</div><button class="btn" style="width:100%" onclick="add(${x.id})">В корзину</button></div></div>`).join('');
 const io=new IntersectionObserver(en=>en.forEach(e=>e.isIntersecting&&(e.target.classList.add('in'),io.unobserve(e.target))),{threshold:.1});
 document.querySelectorAll('.card').forEach(c=>{io.observe(c);c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg)`};c.onmouseleave=()=>c.style.transform=''})}
// ===== Корзина =====
function cnt(){S('bc_cart',cart);$('#cnt').textContent=cart.reduce((a,x)=>a+x.q,0)}
function add(id){const s=$('#sz'+id).value,i=cart.find(x=>x.id===id&&x.s==s);i?i.q++:cart.push({id,s,q:1});cnt();toast('Добавлено в корзину')}
function chg(i,d){cart[i].q+=d;if(cart[i].q<1)cart.splice(i,1);cnt();showCart()}
const total=()=>cart.reduce((a,x)=>a+P.find(p=>p.id===x.id).p*x.q,0);
function showCart(){if(!cart.length)return modal('<h2>Корзина</h2><p>Пока пусто 🛒</p><button class="btn g" onclick="close()">Закрыть</button>');
 modal(`<h2>Корзина</h2>${cart.map((x,i)=>{const p=P.find(p=>p.id===x.id);return`<div class="row"><span>${p.n}<br><small>Размер: ${x.s}</small></span><span class="q"><button onclick="chg(${i},-1)">−</button> ${x.q} <button onclick="chg(${i},1)">+</button></span><b>${fmt(p.p*x.q)}</b></div>`}).join('')}<div class="row"><b>Итого</b><b>${fmt(total())}</b></div><button class="btn" onclick="checkout()">Оформить заказ</button><button class="btn g" onclick="close()">Продолжить покупки</button>`)}
function checkout(){if(!me()){toast('Сначала войдите или зарегистрируйтесь');return auth('login')}
 modal(`<h2>Оплата и связь</h2><p style="margin-bottom:10px;opacity:.8">Адрес доставки:</p><input id="adr" placeholder="Город, улица, дом, кв."><button class="btn" onclick="send('tg')">Оформить через Telegram</button><button class="btn g" onclick="send('wa')">Оформить через WhatsApp</button>`)}
function send(w){const a=$('#adr').value.trim();if(!a)return toast('Укажите адрес');const u=me(),id=Date.now().toString().slice(-6);
 const lines=cart.map(x=>`• ${P.find(p=>p.id===x.id).n} (${x.s}) × ${x.q}`).join('\n');
 const txt=`Заказ №${id} — Baze China\nИмя: ${u.name}\nТел: ${u.phone}\nАдрес: ${a}\n${lines}\nИтого: ${fmt(total())}\nХочу оплатить заказ.`;
 const o=orders();o.unshift({id,email:u.email,name:u.name,phone:u.phone,adr:a,items:lines,sum:total(),st:'Новый',d:new Date().toLocaleString('ru-RU'),via:w});S('bc_orders',o);
 cart=[];cnt();navigator.clipboard?.writeText(txt).catch(()=>{});
 const url=(w==='tg'?`https://t.me/${CONFIG.tg}?text=${encodeURIComponent(txt)}`:`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(txt)}`);
 window.open(url,'_blank');
 modal(`<h2>Заказ №${id} создан ✅</h2><p>Откроется чат — отправьте сообщение с заказом (текст уже скопирован). Продавец пришлёт реквизиты для оплаты.</p><button class="btn" onclick="close()">Готово</button>`)}
// ===== Регистрация / вход / профиль =====
function auth(m){const r=m==='reg';modal(`<h2>${r?'Регистрация':'Вход'}</h2>${r?'<input id="n" placeholder="Имя"><input id="ph" placeholder="Телефон">':''}<input id="em" type="email" placeholder="Email"><input id="pw" type="password" placeholder="Пароль (мин. 6 символов)"><button class="btn" onclick="${r?'reg()':'login()'}">${r?'Создать аккаунт':'Войти'}</button><button class="lnk" onclick="auth('${r?'login':'reg'}')">${r?'Уже есть аккаунт? Войти':'Нет аккаунта? Регистрация'}</button>`)}
function reg(){const n=$('#n').value.trim(),ph=$('#ph').value.trim(),em=$('#em').value.trim().toLowerCase(),pw=$('#pw').value;
 if(!n||!ph||!/^\S+@\S+\.\S+$/.test(em)||pw.length<6)return toast('Проверьте поля');
 const u=users();if(u.some(x=>x.email===em))return toast('Такой email уже есть');
 const nu={name:n,phone:ph,email:em,pw:h(pw)};u.push(nu);S('bc_users',u);S('bc_me',nu);toast('Добро пожаловать!');close();prof()}
function login(){const em=$('#em').value.trim().toLowerCase(),pw=$('#pw').value;
 if(CONFIG.admins.some(a=>a.email===em&&a.pass===pw)){S('bc_me',{name:'Админ',phone:'-',email:em,admin:1});close();location.href='admin.html';return}
 const u=users().find(x=>x.email===em&&x.pw===h(pw));if(!u)return toast('Неверный email или пароль');S('bc_me',u);toast('Вы вошли');close();prof()}
function logout(){localStorage.removeItem('bc_me');close();toast('Вы вышли')}
function prof(){const u=me();if(!u)return auth('login');
 if(u.admin){location.href='admin.html';return}
 const my=orders().filter(o=>o.email===u.email);
 modal(`<h2>Мой профиль</h2><div class="row"><span>Имя</span><b>${esc(u.name)}</b></div><div class="row"><span>Email</span><b>${esc(u.email)}</b></div><div class="row"><span>Телефон</span><b>${esc(u.phone)}</b></div><h2 style="margin-top:18px">Мои заказы (${my.length})</h2>${my.map(o=>`<div class="row" style="display:block"><b>№${o.id}</b> · ${o.d}<br><small>${esc(o.items).replace(/\n/g,'<br>')}</small><br><b>${fmt(o.sum)}</b> · ${o.st}</div>`).join('')||'<p>Заказов пока нет</p>'}<button class="btn g" onclick="logout()">Выйти</button>`)}
function revForm(){if(!me())return toast('Войдите, чтобы оставить отзыв'),auth('login');
 window.rt=5;modal(`<h2>Ваш отзыв</h2><div class="stars">${[1,2,3,4,5].map(i=>`<button class="on" onclick="setR(${i})">★</button>`).join('')}</div><textarea id="rx" maxlength="400" placeholder="Что понравилось?"></textarea><button class="btn" onclick="revSave()">Отправить</button>`)}
function setR(n){rt=n;document.querySelectorAll('.stars button').forEach((b,i)=>b.classList.toggle('on',i<n))}
function revSave(){const t=$('#rx').value.trim();if(t.length<3)return toast('Напишите пару слов');const u=me(),r=reviews();r.unshift({id:Date.now(),name:u.name,rt,t,d:new Date().toLocaleDateString('ru-RU')});S('bc_rev',r);close();revList();toast('Спасибо за отзыв!')}
function revList(){const r=reviews();$('#rl').innerHTML=r.map(x=>`<div class="rv"><b>${esc(x.name)}</b><div class="st">${'★'.repeat(x.rt)}${'☆'.repeat(5-x.rt)}</div><p>${esc(x.t)}</p><small>${x.d}</small></div>`).join('')||'<p style="text-align:center;opacity:.6;grid-column:1/-1">Пока нет отзывов — будьте первым!</p>'}
// ===== Запуск =====
$('#bCart').onclick=showCart;$('#bProf').onclick=prof;
const cu=$('#cur');if(matchMedia('(hover:hover)').matches){cu.style.display='grid';onmousemove=e=>{cu.style.left=e.clientX+'px';cu.style.top=e.clientY+'px'}}
tabs();grid();cnt();revList();const sc=$('.scene');addEventListener('mousemove',e=>sc.style.transform=`rotateY(${(e.clientX/innerWidth-.5)*50}deg) rotateX(${-(e.clientY/innerHeight-.5)*40}deg)`);setTimeout(()=>$('#pre').classList.add('off'),1600);
