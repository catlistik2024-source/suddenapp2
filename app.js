const menuEl = document.getElementById('menu');
const cartEl = document.getElementById('cart');
const sendOrderBtn = document.getElementById('sendOrderBtn');

let menu = [];
let cart = [];

// Загрузить меню с backend
async function loadMenu() {
  const res = await fetch('http://localhost:3000/api/menu');
  menu = await res.json();
  renderMenu();
}

function renderMenu() {
  menuEl.innerHTML = '';
  menu.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.textContent = `${item.name} — ${item.price} ₽`;
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Добавить';
    addBtn.onclick = () => {
      cart.push(item);
      renderCart();
    };
    itemEl.appendChild(addBtn);
    menuEl.appendChild(itemEl);
  });
}

function renderCart() {
  cartEl.innerHTML = '';
  cart.forEach((item, i) => {
    const itemEl = document.createElement('div');
    itemEl.textContent = `${item.name} — ${item.price} ₽`;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Удалить';
    delBtn.onclick = () => {
      cart.splice(i, 1);
      renderCart();
    };
    itemEl.appendChild(delBtn);
    cartEl.appendChild(itemEl);
  });
}

sendOrderBtn.onclick = async () => {
  if (cart.length === 0) {
    alert('Корзина пустая');
    return;
  }
  const order = cart.map(i => i.id);
  const res = await fetch('http://localhost:3000/api/order', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({order})
  });
  const json = await res.json();
  if (json.status === 'ok') {
    alert('Заказ отправлен');
    cart = [];
    renderCart();
  } else {
    alert('Ошибка отправки заказа');
  }
}

loadMenu();
