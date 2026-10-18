/* BAZE CHINA storefront
   Before publishing, set the Telegram username and WhatsApp number below.
   WhatsApp number must include country code, digits only (no +, spaces or dashes). */
const STORE = {
  telegramUsername: "@dealbin",
  whatsappNumber: "+79148153081"
};

const products = [
  {id:"w01",category:"women",name:{ru:"Структурный блейзер",en:"Structured Blazer"},type:{ru:"Женское",en:"Women"},price:89,image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",tag:{ru:"Бестселлер",en:"Bestseller"}},
  {id:"m01",category:"men",name:{ru:"Футболка Essential",en:"Essential T-Shirt"},type:{ru:"Мужское",en:"Men"},price:35,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",tag:{ru:"Новинка",en:"New in"}},
  {id:"w02",category:"women",name:{ru:"Топ Soft Form",en:"Soft Form Top"},type:{ru:"Женское",en:"Women"},price:42,image:"https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=900&q=85"},
  {id:"m02",category:"men",name:{ru:"Рубашка свободного кроя",en:"Relaxed Shirt"},type:{ru:"Мужское",en:"Men"},price:64,image:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85"},
  {id:"w03",category:"women",name:{ru:"Минималистичное платье",en:"Minimal Dress"},type:{ru:"Женское",en:"Women"},price:78,image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85"},
  {id:"m03",category:"men",name:{ru:"Городские брюки",en:"City Trousers"},type:{ru:"Мужское",en:"Men"},price:72,image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=85"},
  {id:"w04",category:"women",name:{ru:"Сумка Form",en:"Form Bag"},type:{ru:"Аксессуары",en:"Accessories"},price:59,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85"},
  {id:"m04",category:"men",name:{ru:"Худи Everyday",en:"Everyday Hoodie"},type:{ru:"Мужское",en:"Men"},price:69,image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",tag:{ru:"Новинка",en:"New in"}}
];

const translations = {
  ru: {
    announcement:"Новая коллекция уже здесь · Доставка по всему миру",navShop:"Коллекция",navStory:"О бренде",navContact:"Контакты",bag:"Корзина",
    heroEyebrow:"THE NEW COLLECTION · 2026",heroTitle:"Стиль вне<br>времени.",heroCopy:"Продуманные силуэты. Чистые линии. Твой характер.",heroButton:"Открыть коллекцию",
    introEyebrow:"BAZE CHINA — OUR POINT OF VIEW",introTitle:"Меньше шума.<br><em>Больше смысла.</em>",introCopy:"Современная одежда для тех, кто выбирает уверенность вместо громких слов. Исследуй универсальные вещи, созданные для своего ритма.",
    shopEyebrow:"CURATED FOR YOU",shopTitle:"Выбери свой образ",filterAll:"Все",filterWomen:"Женское",filterMen:"Мужское",add:"Добавить в корзину",campaignEyebrow:"MADE TO MOVE WITH YOU",campaignTitle:"Твой день.<br>Твои правила.",campaignButton:"Найти свой образ ↗",
    value1Title:"Осознанный выбор",value1Copy:"Меньше случайных вещей — больше любимых.",value2Title:"Сила простоты",value2Copy:"Чистые формы, выразительные детали.",value3Title:"Твой стиль",value3Copy:"Одежда, которая работает на тебя.",
    footerTagline:"Одежда с характером.",footerOrder:"Заказы и вопросы",footerRights:"Все права защищены",backTop:"Наверх ↑",bagEyebrow:"YOUR SELECTION",bagTitle:"Твоя корзина",emptyCart:"Пока здесь пусто.",continueShopping:"Продолжить покупки ↗",total:"Итого",nameLabel:"Твоё имя",noteLabel:"Размер или пожелания (необязательно)",checkoutHint:"Выбери, куда отправить состав заказа. Оплата и доставка согласуются отдельно.",
    added:"Добавлено в корзину",removed:"Товар удалён",emptyOrder:"Добавь хотя бы один товар в корзину.",enterName:"Укажи имя, чтобы оформить заказ.",configure:"Сначала укажи контакты магазина в файле script.js.",telegramButton:"Заказать в Telegram ↗",whatsappButton:"Заказать в WhatsApp ↗",quantity:"Количество",orderTitle:"ЗАКАЗ BAZE CHINA",customer:"Имя",notes:"Пожелания",subtotal:"Сумма",thankYou:"Спасибо за заказ!"
  },
  en: {
    announcement:"The new collection is here · Worldwide delivery",navShop:"Collection",navStory:"Our story",navContact:"Contact",bag:"Bag",
    heroEyebrow:"THE NEW COLLECTION · 2026",heroTitle:"Style beyond<br>time.",heroCopy:"Considered silhouettes. Clean lines. Your character.",heroButton:"Explore collection",
    introEyebrow:"BAZE CHINA — OUR POINT OF VIEW",introTitle:"Less noise.<br><em>More meaning.</em>",introCopy:"Contemporary clothing for those who choose confidence over loud statements. Discover versatile pieces made for your rhythm.",
    shopEyebrow:"CURATED FOR YOU",shopTitle:"Find your look",filterAll:"All",filterWomen:"Women",filterMen:"Men",add:"Add to bag",campaignEyebrow:"MADE TO MOVE WITH YOU",campaignTitle:"Your day.<br>Your rules.",campaignButton:"Find your look ↗",
    value1Title:"Mindful choices",value1Copy:"Fewer impulse buys — more forever favourites.",value2Title:"Power in simplicity",value2Copy:"Clean shapes, expressive details.",value3Title:"Your style",value3Copy:"Clothing that works for you.",
    footerTagline:"Clothing with character.",footerOrder:"Orders & enquiries",footerRights:"All rights reserved",backTop:"Back to top ↑",bagEyebrow:"YOUR SELECTION",bagTitle:"Your bag",emptyCart:"Your bag is empty for now.",continueShopping:"Continue shopping ↗",total:"Total",nameLabel:"Your name",noteLabel:"Size or notes (optional)",checkoutHint:"Choose where to send your order. Payment and delivery will be confirmed separately.",
    added:"Added to bag",removed:"Item removed",emptyOrder:"Add at least one item to your bag.",enterName:"Enter your name to place an order.",configure:"Set the store contact details in script.js first.",telegramButton:"Order via Telegram ↗",whatsappButton:"Order via WhatsApp ↗",quantity:"Qty",orderTitle:"BAZE CHINA ORDER",customer:"Name",notes:"Notes",subtotal:"Subtotal",thankYou:"Thank you for your order!"
  }
};

let language = "ru";
let activeFilter = "all";
let cart = [];
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const t = (key) => translations[language][key] || key;
const money = (amount) => new Intl.NumberFormat(language === "ru" ? "ru-RU" : "en-IE",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(amount);

function renderTranslations(){
  document.documentElement.lang = language;
  $$("[data-i18n]").forEach(el => { const key=el.dataset.i18n; if(translations[language][key]) el.innerHTML=translations[language][key]; });
  $("#languageToggle").textContent = language === "ru" ? "EN" : "RU";
  $("#orderTelegram").textContent = t("telegramButton");
  $("#orderWhatsApp").textContent = t("whatsappButton");
  renderProducts(); renderCart();
}
function renderProducts(){
  const shown = products.filter(p => activeFilter === "all" || p.category === activeFilter);
  $("#productGrid").innerHTML = shown.map(p => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${p.image}" alt="${escapeHtml(p.name[language])}" loading="lazy">
        ${p.tag ? `<span class="product-tag">${escapeHtml(p.tag[language])}</span>` : ""}
        <button class="add-button" data-add="${p.id}">＋ ${t("add")}</button>
      </div>
      <div class="product-info"><div><p class="product-name">${escapeHtml(p.name[language])}</p><span class="product-category">${escapeHtml(p.type[language])}</span></div><span class="product-price">${money(p.price)}</span></div>
    </article>`).join("");
  $$("[data-add]").forEach(button => button.addEventListener("click", () => addToCart(button.dataset.add)));
}
function renderCart(){
  $("#cartCount").textContent = cart.reduce((sum,item)=>sum+item.quantity,0);
  $("#cartItems").innerHTML = cart.map(item => {
    const p=products.find(product=>product.id===item.id);
    return `<div class="cart-line"><img src="${p.image}" alt=""><div><p class="cart-line-name">${escapeHtml(p.name[language])}</p><span class="cart-line-price">${money(p.price)}</span><div class="quantity"><button data-qty="${p.id}" data-delta="-1" aria-label="Decrease">−</button><span>${item.quantity}</span><button data-qty="${p.id}" data-delta="1" aria-label="Increase">+</button></div></div><button class="remove-item" data-remove="${p.id}" aria-label="Remove">×</button></div>`;
  }).join("");
  const empty = cart.length === 0;
  $("#cartEmpty").style.display = empty ? "block" : "none";
  $("#cartBottom").style.display = empty ? "none" : "block";
  $("#cartTotal").textContent = money(cart.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.quantity,0));
  $$("[data-qty]").forEach(button=>button.addEventListener("click",()=>changeQuantity(button.dataset.qty,Number(button.dataset.delta))));
  $$("[data-remove]").forEach(button=>button.addEventListener("click",()=>{cart=cart.filter(i=>i.id!==button.dataset.remove);renderCart();showToast(t("removed"));}));
}
function addToCart(id){const item=cart.find(i=>i.id===id);if(item)item.quantity++;else cart.push({id,quantity:1});renderCart();showToast(t("added"));}
function changeQuantity(id,delta){const item=cart.find(i=>i.id===id);if(!item)return;item.quantity+=delta;if(item.quantity<1)cart=cart.filter(i=>i.id!==id);renderCart();}
function openCart(){document.body.classList.add("cart-opened");$("#cartDrawer").setAttribute("aria-hidden","false");$("#cartClose").focus();}
function closeCart(){document.body.classList.remove("cart-opened");$("#cartDrawer").setAttribute("aria-hidden","true");}
let toastTimer;
function showToast(message){const toast=$("#toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2200);}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
function buildOrderMessage(){
  const name=$("#customerName").value.trim(), note=$("#customerNote").value.trim();
  if(!cart.length){showToast(t("emptyOrder"));return null;}
  if(!name){showToast(t("enterName"));$("#customerName").focus();return null;}
  const lines=cart.map(item=>{const p=products.find(product=>product.id===item.id);return `• ${p.name[language]} × ${item.quantity} — ${money(p.price*item.quantity)}`;});
  const total=cart.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.quantity,0);
  return `${t("orderTitle")}\n\n${lines.join("\n")}\n\n${t("subtotal")}: ${money(total)}\n${t("customer")}: ${name}${note?`\n${t("notes")}: ${note}`:""}\n\n${t("thankYou")}`;
}
function sendOrder(channel){
  const message=buildOrderMessage();if(!message)return;
  if(channel==="telegram"){
    const username=STORE.telegramUsername.trim().replace(/^@/,"");
    if(!username||username==="YOUR_TELEGRAM_USERNAME"){showToast(t("configure"));return;}
    // Telegram deep links open a chat; prefilled message support varies by client.
    const url=`https://t.me/${encodeURIComponent(username)}?text=${encodeURIComponent(message)}`;
    window.open(url,"_blank","noopener");
  }else{
    const number=STORE.whatsappNumber.replace(/\D/g,"");
    if(!number||number==="YOURWHATSAPPNUMBER"){showToast(t("configure"));return;}
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`,"_blank","noopener");
  }
}
$("#languageToggle").addEventListener("click",()=>{language=language==="ru"?"en":"ru";renderTranslations();});
$$(".filter").forEach(button=>button.addEventListener("click",()=>{activeFilter=button.dataset.filter;$$(".filter").forEach(b=>b.classList.toggle("active",b===button));renderProducts();}));
$("#cartOpen").addEventListener("click",openCart);$("#cartClose").addEventListener("click",closeCart);$("#cartBackdrop").addEventListener("click",closeCart);$("#continueShopping").addEventListener("click",closeCart);
$("#orderTelegram").addEventListener("click",()=>sendOrder("telegram"));$("#orderWhatsApp").addEventListener("click",()=>sendOrder("whatsapp"));
$("#menuToggle").addEventListener("click",()=>$(".main-nav").classList.toggle("open"));
$$(".main-nav a").forEach(link=>link.addEventListener("click",()=>$(".main-nav").classList.remove("open")));
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeCart();});
$("#year").textContent=new Date().getFullYear();
$("#footerTelegram").href="https://t.me/"+(STORE.telegramUsername==="YOUR_TELEGRAM_USERNAME"?"":STORE.telegramUsername.replace(/^@/,""));
$("#footerWhatsApp").href="https://wa.me/"+STORE.whatsappNumber.replace(/\D/g,"");
renderTranslations();
