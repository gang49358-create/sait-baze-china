const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rub=n=>n.toLocaleString('ru-RU')+' ₽';
const DB={get:(k,d)=>{try{return JSON.parse(localStorage.getItem('bz_'+k))??d}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem('bz_'+k,JSON.stringify(v))}catch(e){}}};

/* Демо-админ. Для настоящего магазина нужен сервер: на GitHub Pages данные хранятся только в браузере. */
let users=DB.get('users',[]);
if(!users.some(u=>u.role==='admin')){users.push({name:'Администратор',email:'admin@baze.cn',pass:'admin123',role:'admin'});DB.set('users',users)}
let orders=DB.get('orders',[]),cart=DB.get('cart',[]),me=DB.get('me',null);

const star=(x,y,s,d)=>`<path class="spk" style="animation-delay:${d}s;transform-origin:${x}px ${y}px;transform-box:fill-box" d="M${x} ${y-s}L${x+s/4} ${y-s/4}L${x+s} ${y}L${x+s/4} ${y+s/4}L${x} ${y+s}L${x-s/4} ${y+s/4}L${x-s} ${y}L${x-s/4} ${y-s/4}Z" fill="#fff"/>`;
const shoe=(a,b,sp)=>`<svg viewBox="0 0 300 160"><ellipse cx="150" cy="146" rx="120" ry="9" fill="rgba(0,0,0,.4)"/><path d="M18 108c0-22 6-40 18-46l34-14c10 22 28 26 50 20 22 18 62 26 100 38 24 7 40 12 40 30v14H18z" fill="${a}" stroke="#061033" stroke-width="3" stroke-linejoin="round"/><path d="M18 120h264v16c0 4-3 6-7 6H26c-5 0-8-3-8-7z" fill="#e8f0ff" stroke="#061033" stroke-width="3"/><path d="M118 70l14 22M140 78l14 22M162 86l14 22" stroke="${b}" stroke-width="6" stroke-linecap="round"/><path d="M36 62c14 4 30 2 46-6l-6-8c-14 8-26 10-38 6z" fill="${b}" stroke="#061033" stroke-width="3"/><path d="M52 100c40-6 90 0 150 22" stroke="${b}" stroke-width="7" fill="none" stroke-linecap="round"/>${sp?star(120,62,10,0)+star(185,98,12,.4)+star(232,114,9,.8)+star(72,98,8,1.2)+star(150,102,7,.2)+star(98,84,6,1.5):''}</svg>`;
const K={
 hoodie:'<path d="M90 40L60 70 30 130l25 10 25-40v80h140v-80l25 40 25-10-30-60-30-30Q150 70 90 40z" /><path d="M120 30Q150 0 180 30Q150 55 120 30z" /><path d="M110 140h80l10 30H100z" />',
 tee:'<path d="M95 30L50 55l18 40 24-10v90h116V85l24 10 18-40-45-25Q150 60 95 30z" />',
 pants:'<path d="M95 20h110l10 165h-50l-15-100-15 100H85z" /><rect x="100" y="110" width="26" height="30" rx="4" /><rect x="174" y="110" width="26" height="30" rx="4" />',
 puffer:'<path d="M90 35L55 65 35 150l30 8 20-50v80h130v-80l20 50 30-8-20-85-35-30Q150 60 90 35z" /><path d="M85 108h130M85 138h130M85 168h130" stroke-width="4" fill="none" />',
 bomber:'<path d="M90 35L55 65 35 145l30 8 20-45v75h130v-75l20 45 30-8-20-80-35-30Q150 60 90 35z" /><rect x="85" y="168" width="130" height="14" rx="5" /><path d="M150 52v116" stroke-width="4" fill="none" />',
 cap:'<path d="M60 120Q60 45 150 45Q240 45 240 120z" /><path d="M200 112Q275 108 285 132Q225 128 195 122z" />'
};
const cl=(k,a,b)=>`<svg viewBox="0 0 300 200"><g fill="${a}" stroke="#061033" stroke-width="3" stroke-linejoin="round">${K[k]}</g><text x="150" y="${k==='cap'?100:k==='pants'?70:125}" text-anchor="middle" font-family="Unbounded" font-weight="900" font-size="${k==='cap'?30:36}" fill="${b}">B</text></svg>`;
const SZ=[38,39,40,41,42,43,44],CS=['S','M','L','XL'];
const P=[
 {id:1,t:'s',name:'Adidas Jeremy Scott Wings 1.0',tag:'Классика с крыльями',price:14900,v:()=>shoe('#2f7bff','#fff')},
 {id:2,t:'s',name:'Adidas Jeremy Scott 2.0',tag:'Новая версия, белый с синим',price:15900,badge:'Новинка',v:()=>shoe('#fff','#2f7bff')},
 {id:3,t:'s',name:'Nike Air Force 1 Swarovski',tag:'Белые, кристаллы Swarovski',price:21900,badge:'Кристаллы',v:()=>shoe('#f4f8ff','#8fb8ff',1)},
 {id:4,t:'s',name:'Nike Air Force 1 Swarovski Blue',tag:'Синие, кристаллы Swarovski',price:23500,badge:'Кристаллы',v:()=>shoe('#1a4fd6','#cfe0ff',1)},
 {id:5,t:'s',name:'Adidas Jeremy Scott 2.0 Night',tag:'Чёрно-синяя пара',price:16800,badge:'Новинка',v:()=>shoe('#0a1330','#2f7bff')},
 {id:6,t:'s',name:'Adidas Jeremy Scott Bear',tag:'Лимитированная пара',price:17500,v:()=>shoe('#12286a','#7fb0ff')},
 {id:7,t:'c',name:'Оверсайз-худи Baze',tag:'Плотный футер, свободный крой',price:7900,v:()=>cl('hoodie','#12286a','#fff')},
 {id:8,t:'c',name:'Карго-брюки Wide',tag:'Широкий силуэт, накладные карманы',price:8900,v:()=>cl('pants','#0a1330','#2f7bff')},
 {id:9,t:'c',name:'Пуховик-puffer',tag:'Объёмный, тёплый',price:18900,v:()=>cl('puffer','#1a4fd6','#fff')},
 {id:10,t:'c',name:'Футболка Boxy Fit',tag:'Короткий крой boxy',price:3900,v:()=>cl('tee','#e8f0ff','#1a4fd6')},
 {id:11,t:'c',name:'Бомбер Varsity',tag:'Тренд сезона',price:11900,v:()=>cl('bomber','#0a1330','#7fb0ff')},
 {id:12,t:'c',name:'Кепка Baze',tag:'Вышитая буква B',price:2900,sz:['Uni'],v:()=>cl('cap','#2f7bff','#fff')}
];
const picked={};
$('#s1').innerHTML=shoe('#2f7bff','#fff');$('#s2').innerHTML=shoe('#fff','#2f7bff',1);
function renderGrid(f){
  const g=$('#grid');
  g.innerHTML=P.filter(p=>f==='a'||p.t===f).map(p=>`<article class="card" data-id="${p.id}"><div class="pic">${p.v()}</div>${p.badge?`<span class="badge">${p.badge}</span>`:''}<h3>${p.name}</h3><small>${p.tag}</small><div class="price">${rub(p.price)}</div><div class="sizes">${(p.sz||(p.t==='s'?SZ:CS)).map(s=>`<button data-s="${s}">${s}</button>`).join('')}</div><button class="btn sm add">В корзину</button></article>`).join('');
  g.querySelectorAll('.card').forEach(c=>{
    c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateY(${x*18}deg) rotateX(${-y*18}deg) translateY(-6px)`};
    c.onmouseleave=()=>c.style.transform='';
  });
}
$('#grid').onclick=e=>{
  const c=e.target.closest('.card');if(!c)return;const id=+c.dataset.id;
  const sb=e.target.closest('.sizes button');
  if(sb){c.querySelectorAll('.sizes button').forEach(x=>x.classList.remove('on'));sb.classList.add('on');picked[id]=sb.dataset.s;return}
  if(e.target.closest('.add')){
    if(!picked[id]){toast('Выбери размер');return}
    const f=cart.find(i=>i.id===id&&i.size===picked[id]);f?f.qty++:cart.push({id,size:picked[id],qty:1});
    saveCart();toast('Добавлено в корзину');
  }
};
$('#tabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;document.querySelectorAll('#tabs button').forEach(x=>x.classList.toggle('on',x===b));renderGrid(b.dataset.t)};
renderGrid('s');
/* Заставка с логотипом */
$('#spn').innerHTML='BAZE CHINA'.split('').map((l,i)=>`<span style="animation-delay:${.4+i*.09}s">${l===' '?'&nbsp;':l}</span>`).join('');
setTimeout(()=>$('#splash').classList.add('out'),2600);setTimeout(()=>$('#splash').remove(),3400);
const st=$('#stage');
document.addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;st.style.transform=`rotateY(${x*30}deg) rotateX(${-y*24}deg)`});

/* Cart */
function saveCart(){DB.set('cart',cart);$('#cnt').textContent=cart.reduce((s,i)=>s+i.qty,0)}
const total=()=>cart.reduce((s,i)=>s+P.find(p=>p.id===i.id).price*i.qty,0);
function renderCart(){
  const d=$('#drawer');
  d.innerHTML=`<button class="x" onclick="closeAll()">✕</button><h2 style="margin-bottom:14px">Корзина</h2>`+
  (cart.length?cart.map((i,n)=>{const p=P.find(p=>p.id===i.id);return `<div class="row"><div><b>${p.name}</b><br><small>Размер ${i.size} · ${rub(p.price)}</small></div><div><button class="btn sm ghost" onclick="qty(${n},-1)">−</button> <b>${i.qty}</b> <button class="btn sm ghost" onclick="qty(${n},1)">+</button></div></div>`}).join('')+
  `<div class="row"><b>Итого</b><b class="price">${rub(total())}</b></div><label>Адрес доставки<input id="addr" placeholder="Город, улица, дом, квартира"></label><div class="err" id="cerr"></div><button class="btn" style="width:100%" onclick="checkout()">Оформить заказ</button>`
  :`<p style="margin-top:20px">В корзине пусто. Выбери кроссовки в каталоге и размер.</p>`);
}
function qty(n,d){cart[n].qty+=d;if(cart[n].qty<1)cart.splice(n,1);saveCart();renderCart()}
$('#openCart').onclick=()=>{renderCart();$('#drawer').classList.add('on');$('#shade').classList.add('on')};
function checkout(){
  const a=$('#addr').value.trim();
  if(!me){openAuth('login');return}
  if(a.length<5){$('#cerr').textContent='Укажи адрес доставки';return}
  orders.push({id:'BZ'+Date.now().toString().slice(-6),email:me.email,name:me.name,address:a,items:cart.map(i=>({...i,name:P.find(p=>p.id===i.id).name,price:P.find(p=>p.id===i.id).price})),sum:total(),date:new Date().toLocaleString('ru-RU'),status:'Новый'});
  DB.set('orders',orders);cart=[];saveCart();closeAll();toast('Заказ оформлен!');go('profile');
}

/* Auth */
function openAuth(mode){
  const reg=mode==='reg';
  $('#modal').innerHTML=`<button class="x" onclick="closeAll()">✕</button><h2 style="margin-bottom:12px">${reg?'Регистрация':'Вход'}</h2>${reg?'<input id="an" placeholder="Имя">':''}<input id="ae" type="email" placeholder="Почта"><input id="ap" type="password" placeholder="Пароль (от 6 символов)"><div class="err" id="aerr"></div><button class="btn" style="width:100%" onclick="${reg?'doReg()':'doLogin()'}">${reg?'Создать аккаунт':'Войти'}</button><p style="margin-top:14px;text-align:center"><a href="#" onclick="openAuth('${reg?'login':'reg'}');return false" style="color:var(--blue);font-weight:700">${reg?'Уже есть аккаунт? Войти':'Нет аккаунта? Зарегистрироваться'}</a></p>`;
  $('#drawer').classList.remove('on');$('#modal').classList.add('on');$('#shade').classList.add('on');
}
function setMe(u){me={name:u.name,email:u.email,role:u.role};DB.set('me',me);syncAdmin();closeAll();toast('Привет, '+u.name+'!');go('profile')}
function doReg(){
  const n=$('#an').value.trim(),e=$('#ae').value.trim().toLowerCase(),p=$('#ap').value;
  if(!n||!/^\S+@\S+\.\S+$/.test(e))return $('#aerr').textContent='Введи имя и корректную почту';
  if(p.length<6)return $('#aerr').textContent='Пароль должен быть не короче 6 символов';
  if(users.some(u=>u.email===e))return $('#aerr').textContent='Эта почта уже зарегистрирована';
  const u={name:n,email:e,pass:p,role:'user'};users.push(u);DB.set('users',users);setMe(u);
}
function doLogin(){
  const e=$('#ae').value.trim().toLowerCase(),p=$('#ap').value,u=users.find(u=>u.email===e&&u.pass===p);
  u?setMe(u):$('#aerr').textContent='Неверная почта или пароль';
}
function logout(){me=null;DB.set('me',null);syncAdmin();renderProfile();toast('Вы вышли')}
function syncAdmin(){$('#adminTab').hidden=!(me&&me.role==='admin')}

/* Profile */
function renderProfile(){
  const b=$('#profileBox');
  if(!me){b.innerHTML=`<h2>Личный профиль</h2><p style="margin:12px 0 20px">Войди, чтобы оформлять заказы и видеть их историю.</p><button class="btn" onclick="openAuth('login')">Войти</button> <button class="btn ghost" onclick="openAuth('reg')">Регистрация</button>`;return}
  const mine=orders.filter(o=>o.email===me.email).reverse();
  b.innerHTML=`<div class="row"><div><h2>${esc(me.name)}</h2><small>${esc(me.email)}${me.role==='admin'?' · администратор':''}</small></div><button class="btn sm ghost" onclick="logout()">Выйти</button></div><h3 style="margin:20px 0 6px">Мои заказы</h3>`+
  (mine.length?mine.map(o=>`<div class="row"><div><b>№${o.id}</b> · ${o.date}<br><small>${o.items.map(i=>esc(i.name)+' ('+i.size+') ×'+i.qty).join(', ')}</small></div><div style="text-align:right"><b>${rub(o.sum)}</b><br><span class="tag ${o.status==='Доставлен'?'done':''}">${o.status}</span></div></div>`).join(''):'<p>Заказов пока нет. Загляни в каталог.</p>');
}

/* Admin */
function renderAdmin(){
  const b=$('#adminBox');
  if(!(me&&me.role==='admin')){b.innerHTML='';return}
  const sum=orders.reduce((s,o)=>s+o.sum,0);
  b.innerHTML=`<div class="panel"><h2 class="sec-title" style="margin-top:0">Админ-панель</h2><div class="stats"><div class="stat"><b>${orders.length}</b>заказов</div><div class="stat"><b>${rub(sum)}</b>выручка</div><div class="stat"><b>${users.filter(u=>u.role!=='admin').length}</b>покупателей</div></div>
  <div class="tw"><table><tr><th>№</th><th>Дата</th><th>Клиент</th><th>Состав и адрес</th><th>Сумма</th><th>Статус</th><th></th></tr>`+
  (orders.length?orders.slice().reverse().map(o=>`<tr><td><b>${o.id}</b></td><td>${o.date}</td><td>${esc(o.name)}<br><small>${esc(o.email)}</small></td><td>${o.items.map(i=>esc(i.name)+' ('+i.size+') ×'+i.qty).join('<br>')}<br><small>${esc(o.address)}</small></td><td><b>${rub(o.sum)}</b></td><td><select onchange="setSt('${o.id}',this.value)">${['Новый','В пути','Доставлен','Отменён'].map(s=>`<option${s===o.status?' selected':''}>${s}</option>`).join('')}</select></td><td><button class="x" style="float:none" title="Удалить" onclick="delOrd('${o.id}')">✕</button></td></tr>`).join(''):'<tr><td colspan="7">Заказов пока нет.</td></tr>')+`</table></div></div>`;
}
function setSt(id,s){orders.find(o=>o.id===id).status=s;DB.set('orders',orders);toast('Статус обновлён');renderAdmin()}
function delOrd(id){if(confirm('Удалить заказ '+id+'?')){orders=orders.filter(o=>o.id!==id);DB.set('orders',orders);renderAdmin()}}

/* Cursor with B */
const cur=$('#cur');
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
  let x=0,y=0,cx=0,cy=0,last=0;
  addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;cur.classList.add('on');
    cur.classList.toggle('big',!!e.target.closest('button,a,input,select,.card'));
    if(Date.now()-last>45){last=Date.now();const t=document.createElement('div');t.className='trail';t.style.left=x-4+'px';t.style.top=y-4+'px';document.body.appendChild(t);setTimeout(()=>t.remove(),700)}});
  (function loop(){cx+=(x-cx)*.28;cy+=(y-cy)*.28;cur.style.left=cx+'px';cur.style.top=cy+'px';requestAnimationFrame(loop)})();
}
saveCart();syncAdmin();
