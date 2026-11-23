/**
 * Starbucks Shopping Cart, Order History & Ticket Management System
 * Persistent storage, real-time total calculation, form validation,
 * digital ticket generation & live order status tracker.
 */

// LocalStorage persistence keys
const STORAGE_KEY = 'sb_cart_items';
const HISTORY_KEY = 'sb_ticket_history';

document.addEventListener('DOMContentLoaded', () => {
  initCart();
  initFormValidation();
  renderTicketHistory();
});

/* ==========================================================================
   Cart State Management
   ========================================================================== */
function getCartItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCartItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  const totalQuantity = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  if (typeof syncCartBadge === 'function') {
    syncCartBadge(totalQuantity);
  }
}

function initCart() {
  renderCart();

  // Attach listeners to shop buttons in compra.html
  const addButtons = document.querySelectorAll('.shop-item-button');
  addButtons.forEach(btn => {
    btn.addEventListener('click', handleAddToCartClick);
  });
}

function handleAddToCartClick(e) {
  const btn = e.target;
  const shopItem = btn.closest('.shop-item');
  if (!shopItem) return;

  const title = shopItem.querySelector('.shop-item-title').innerText.trim();
  const priceStr = shopItem.querySelector('.shop-item-price').innerText.trim();
  const price = parseFloat(priceStr.replace('$', '')) || 0;
  const imgElem = shopItem.querySelector('.shop-item-image');
  const imageSrc = imgElem ? imgElem.getAttribute('src') : 'Img/img1.png';

  addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc) {
  let items = getCartItems();
  const existing = items.find(item => item.title === title);

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
    if (typeof showToast === 'function') {
      showToast(`Se aumentó la cantidad de "${title}" (${existing.quantity})`, 'info');
    }
  } else {
    items.push({ title, price, imageSrc, quantity: 1 });
    if (typeof showToast === 'function') {
      showToast(`¡"${title}" agregado al carrito!`, 'success');
    }
  }

  saveCartItems(items);
  renderCart();
}

function removeCartItem(index) {
  let items = getCartItems();
  const removed = items[index];
  items.splice(index, 1);
  saveCartItems(items);
  renderCart();

  if (removed && typeof showToast === 'function') {
    showToast(`"${removed.title}" eliminado del carrito`, 'info');
  }
}

function updateItemQuantity(index, newQty) {
  let items = getCartItems();
  if (items[index]) {
    const qty = parseInt(newQty, 10);
    items[index].quantity = isNaN(qty) || qty < 1 ? 1 : qty;
    saveCartItems(items);
    renderCart();
  }
}

function stepQuantity(index, step) {
  let items = getCartItems();
  if (items[index]) {
    const current = items[index].quantity || 1;
    const next = current + step;
    if (next <= 0) {
      removeCartItem(index);
    } else {
      updateItemQuantity(index, next);
    }
  }
}

function renderCart() {
  const container = document.querySelector('.cart-items');
  const emptyNotice = document.querySelector('.cart-empty-message');
  const totalElem = document.querySelector('.cart-total-price');
  if (!container) return;

  const items = getCartItems();
  container.innerHTML = '';

  if (items.length === 0) {
    if (emptyNotice) emptyNotice.style.display = 'block';
    if (totalElem) totalElem.innerText = '$0.00';
    return;
  }

  if (emptyNotice) emptyNotice.style.display = 'none';

  let total = 0;

  items.forEach((item, index) => {
    const itemSubtotal = item.price * (item.quantity || 1);
    total += itemSubtotal;

    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${item.imageSrc}" alt="${item.title}" width="60" height="60">
        <span class="cart-item-title">${item.title}</span>
      </div>
      <span class="cart-price cart-column">$${item.price.toFixed(2)}</span>
      <div class="cart-quantity cart-column">
        <div class="qty-control">
          <button type="button" class="qty-btn minus" onclick="stepQuantity(${index}, -1)" aria-label="Disminuir"><i class="fas fa-minus"></i></button>
          <input class="cart-quantity-input" type="number" min="1" max="99" value="${item.quantity || 1}" onchange="updateItemQuantity(${index}, this.value)">
          <button type="button" class="qty-btn plus" onclick="stepQuantity(${index}, 1)" aria-label="Aumentar"><i class="fas fa-plus"></i></button>
        </div>
        <button class="btn btn-danger btn-remove-item" type="button" onclick="removeCartItem(${index})" title="Eliminar producto">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;
    container.appendChild(row);
  });

  if (totalElem) {
    totalElem.innerText = '$' + total.toFixed(2);
  }
}

/* ==========================================================================
   Checkout Form & Ticket Generator
   ========================================================================== */
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/,
  edad: /^(?:[1-9][0-9]?)$/,
  direccion: /^[a-zA-ZÀ-ÿ0-9\s#.,\-]{5,60}$/
};

const camposValidos = {
  nombre: false,
  correo: false,
  telefono: false,
  edad: false,
  direccion: false
};

function initFormValidation() {
  const form = document.getElementById('formulario');
  if (!form) return;

  const inputs = form.querySelectorAll('.formulario__input');
  inputs.forEach(input => {
    input.addEventListener('keyup', (e) => validarCampoRealtime(e.target));
    input.addEventListener('blur', (e) => validarCampoRealtime(e.target));
  });

  // Botón Limpiar
  const btnLimpiar = document.getElementById('boton2');
  if (btnLimpiar) {
    btnLimpiar.addEventListener('click', () => {
      form.reset();
      Object.keys(camposValidos).forEach(k => camposValidos[k] = false);
      document.querySelectorAll('.formulario__grupo').forEach(grp => {
        grp.classList.remove('formulario__grupo-correcto', 'formulario__grupo-incorrecto');
      });
      const errorMsg = document.getElementById('formulario__mensaje');
      if (errorMsg) errorMsg.classList.remove('formulario__mensaje-activo');
      if (typeof showToast === 'function') {
        showToast('Formulario limpiado', 'info');
      }
    });
  }

  // Botón Generar Registro / Ticket
  const btnGenerar = document.getElementById('boton');
  if (btnGenerar) {
    btnGenerar.addEventListener('click', (e) => {
      e.preventDefault();
      generarTicketCompra();
    });
  }

  // Prevenir envío por Enter por defecto
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    generarTicketCompra();
  });
}

function validarCampoRealtime(input) {
  const campo = input.name;
  const regex = expresiones[campo];
  if (!regex) return;

  const grupo = document.getElementById(`grupo__${campo}`);
  if (!grupo) return;

  const icono = grupo.querySelector('.formulario__validacion-estado');
  const errorText = grupo.querySelector('.formulario__input-error');

  if (regex.test(input.value.trim())) {
    grupo.classList.remove('formulario__grupo-incorrecto');
    grupo.classList.add('formulario__grupo-correcto');
    if (icono) {
      icono.classList.remove('fa-times-circle');
      icono.classList.add('fa-check-circle');
    }
    if (errorText) errorText.classList.remove('formulario__input-error-activo');
    camposValidos[campo] = true;
  } else {
    grupo.classList.remove('formulario__grupo-correcto');
    grupo.classList.add('formulario__grupo-incorrecto');
    if (icono) {
      icono.classList.remove('fa-check-circle');
      icono.classList.add('fa-times-circle');
    }
    if (errorText) errorText.classList.add('formulario__input-error-activo');
    camposValidos[campo] = false;
  }
}

function generarTicketCompra() {
  const form = document.getElementById('formulario');
  if (!form) return;

  const inputs = form.querySelectorAll('.formulario__input');
  inputs.forEach(input => validarCampoRealtime(input));

  const todosValidos = Object.values(camposValidos).every(Boolean);
  const cartItems = getCartItems();

  if (cartItems.length === 0) {
    if (typeof showToast === 'function') {
      showToast('Tu carrito está vacío. Añade productos antes de generar el ticket.', 'error');
    }
    return;
  }

  const tarjetaRadio = document.getElementById('tarjeta');
  const efectivoRadio = document.getElementById('efectivo');

  if (!tarjetaRadio.checked && !efectivoRadio.checked) {
    if (typeof showToast === 'function') {
      showToast('Por favor selecciona un método de pago.', 'error');
    }
    return;
  }

  if (!todosValidos) {
    const errorMsg = document.getElementById('formulario__mensaje');
    if (errorMsg) errorMsg.classList.add('formulario__mensaje-activo');
    if (typeof showToast === 'function') {
      showToast('Por favor completa todos los campos del registro correctamente.', 'error');
    }
    return;
  }

  // Calculate pricing
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const esTarjeta = tarjetaRadio.checked;
  const descuento = esTarjeta ? subtotal * 0.15 : 0;
  const totalPagar = subtotal - descuento;

  const nom = document.getElementById('nombre').value.trim();
  const email = document.getElementById('correo').value.trim();
  const tel = document.getElementById('telefono').value.trim();
  const edad = document.getElementById('edad').value.trim();
  const dir = document.getElementById('direccion').value.trim();
  const metodo = esTarjeta ? 'Tarjeta de Crédito (15% Descuento)' : 'Efectivo al Recoger';

  const pedidoNum = 'SB-' + Math.floor(1000 + Math.random() * 9000);
  const fechaActual = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Create Order Object
  const newOrder = {
    id: pedidoNum,
    nom: nom,
    email: email,
    tel: tel,
    edad: edad,
    dir: dir,
    metodo: metodo,
    subtotal: subtotal,
    descuento: descuento,
    totalPagar: totalPagar,
    fecha: fechaActual,
    items: cartItems.map(i => ({ title: i.title, price: i.price, quantity: i.quantity || 1 })),
    status: 'En Espera' // Status can be: 'En Espera', 'En Preparación', 'Listo para Recoger'
  };

  // Save order to history
  saveOrderToHistory(newOrder);

  // Clear current cart because the ticket is now formally generated
  localStorage.removeItem(STORAGE_KEY);
  if (typeof syncCartBadge === 'function') syncCartBadge(0);
  renderCart();

  // Reset form
  form.reset();
  Object.keys(camposValidos).forEach(k => camposValidos[k] = false);
  document.querySelectorAll('.formulario__grupo').forEach(grp => {
    grp.classList.remove('formulario__grupo-correcto', 'formulario__grupo-incorrecto');
  });

  // Render newly generated ticket
  renderTicketDetails(newOrder);

  // Refresh history UI
  renderTicketHistory();

  // Scroll smoothly to ticket
  const ticketElem = document.getElementById('mostrar');
  if (ticketElem) {
    ticketElem.style.display = 'block';
    ticketElem.scrollIntoView({ behavior: 'smooth' });
  }

  if (typeof showToast === 'function') {
    showToast(`¡Ticket #${pedidoNum} generado con éxito! Estado: En Espera ⏳`, 'success');
  }
}

/* ==========================================================================
   Render Single Ticket into UI
   ========================================================================== */
function renderTicketDetails(order) {
  const ticketElem = document.getElementById('mostrar');
  const parrafo = document.getElementById('parrafo');
  if (!ticketElem || !parrafo) return;

  const isEn = typeof getCurrentLanguage === 'function' && getCurrentLanguage() === 'en';

  const ticketContent = `
    <div class="ticket-header-details">
      <div class="ticket-meta-box">
        <p><strong>${isEn ? 'Order:' : 'Pedido:'}</strong> #${order.id}</p>
        <p><strong>${isEn ? 'Date:' : 'Fecha:'}</strong> ${order.fecha}</p>
      </div>
      <div class="ticket-customer-box">
        <p><strong>${isEn ? 'Customer:' : 'Cliente:'}</strong> ${order.nom} (${order.edad} ${isEn ? 'years old' : 'años'})</p>
        <p><strong>Email:</strong> ${order.email}</p>
        <p><strong>${isEn ? 'Phone:' : 'Teléfono:'}</strong> ${order.tel}</p>
        <p><strong>${isEn ? 'Pickup Location:' : 'Dirección:'}</strong> ${order.dir}</p>
        <p><strong>${isEn ? 'Payment Method:' : 'Método de Pago:'}</strong> <span class="badge-payment">${order.metodo}</span></p>
        <p><strong>${isEn ? 'Order Status:' : 'Estado del Pedido:'}</strong> ${getStatusBadgeHtml(order.status)}</p>
      </div>
    </div>

    <div class="ticket-items-table">
      <table>
        <thead>
          <tr>
            <th>${isEn ? 'Qty' : 'Cant.'}</th>
            <th>${isEn ? 'Product' : 'Producto'}</th>
            <th>${isEn ? 'Unit Price' : 'P. Unit'}</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map(item => `
            <tr>
              <td>${item.quantity || 1}x</td>
              <td>${item.title}</td>
              <td>$${item.price.toFixed(2)}</td>
              <td>$${((item.quantity || 1) * item.price).toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="ticket-totals-box">
      <div class="total-row"><span>Subtotal:</span> <strong>$${order.subtotal.toFixed(2)}</strong></div>
      ${order.descuento > 0 ? `<div class="total-row discount"><span>${isEn ? 'Special Discount (15%):' : 'Descuento Especial (15%):'}</span> <strong>-$${order.descuento.toFixed(2)}</strong></div>` : ''}
      <div class="total-row final-total"><span>${isEn ? 'Total to Pay:' : 'Total a Pagar:'}</span> <strong>$${order.totalPagar.toFixed(2)} USD</strong></div>
    </div>
  `;

  parrafo.innerHTML = ticketContent;
  ticketElem.style.display = 'block';
}

/* ==========================================================================
   Ticket History & Order Status Management
   ========================================================================== */
function getOrderHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveOrderToHistory(order) {
  let history = getOrderHistory();
  // Prepend new order
  history.unshift(order);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function updateOrderInHistory(orderId, updateFn) {
  let history = getOrderHistory();
  const order = history.find(o => o.id === orderId);
  if (order) {
    updateFn(order);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    renderTicketHistory();
  }
}

function getStatusBadgeHtml(status) {
  const isEn = typeof getCurrentLanguage === 'function' && getCurrentLanguage() === 'en';
  if (status === 'Listo para Recoger' || status === 'Ready for Pickup') {
    return `<span class="status-badge status-listo"><i class="fas fa-check-circle"></i> ${isEn ? 'Ready for Pickup' : 'Listo para Recoger'}</span>`;
  } else if (status === 'En Preparación' || status === 'In Preparation') {
    return `<span class="status-badge status-preparacion"><i class="fas fa-mug-hot"></i> ${isEn ? 'In Preparation' : 'En Preparación'}</span>`;
  } else {
    return `<span class="status-badge status-espera"><i class="fas fa-clock"></i> ${isEn ? 'Pending / In Queue' : 'En Espera'}</span>`;
  }
}

function renderTicketHistory() {
  const container = document.getElementById('historial-contenedor');
  if (!container) return;

  const isEn = typeof getCurrentLanguage === 'function' && getCurrentLanguage() === 'en';
  const history = getOrderHistory();
  const countBadge = document.getElementById('historial-count');
  if (countBadge) {
    if (isEn) {
      countBadge.textContent = `${history.length} order${history.length === 1 ? '' : 's'}`;
    } else {
      countBadge.textContent = `${history.length} pedido${history.length === 1 ? '' : 's'}`;
    }
  }

  if (history.length === 0) {
    container.innerHTML = `
      <div class="history-empty">
        <i class="fas fa-receipt"></i>
        <p>${isEn ? 'No orders generated in history yet.' : 'Aún no hay tickets generados en el historial.'}</p>
        <span>${isEn ? 'Once you complete checkout and generate a ticket, your order will appear here with live tracking.' : 'Cuando completes el registro y generes un ticket, aparecerá aquí con su estado en vivo.'}</span>
      </div>
    `;
    return;
  }

  container.innerHTML = history.map((order, idx) => {
    const itemsSummary = order.items.map(i => `${i.quantity}x ${i.title}`).join(', ');
    return `
      <div class="history-card-item">
        <div class="history-card-top">
          <div class="history-card-id">
            <span class="order-num">#${order.id}</span>
            <span class="order-date"><i class="far fa-calendar-alt"></i> ${order.fecha}</span>
          </div>
          <div class="history-card-status">
            ${getStatusBadgeHtml(order.status)}
          </div>
        </div>

        <div class="history-card-body">
          <div class="history-customer-info">
            <strong><i class="fas fa-user"></i> ${order.nom}</strong>
            <span><i class="fas fa-shopping-bag"></i> ${itemsSummary}</span>
          </div>
          <div class="history-price-info">
            <span class="history-total-label">${isEn ? 'Total' : 'Total'}</span>
            <span class="history-total-val">$${order.totalPagar.toFixed(2)}</span>
          </div>
        </div>

        <div class="history-card-actions">
          <button type="button" class="btn-history-action btn-view" onclick="viewHistoryTicket('${order.id}')" title="${isEn ? 'View Complete Ticket' : 'Ver Ticket Completo'}">
            <i class="fas fa-eye"></i> ${isEn ? 'View Ticket' : 'Ver Ticket'}
          </button>
          <button type="button" class="btn-history-action btn-step" onclick="cycleOrderStatus('${order.id}')" title="${isEn ? 'Change order status' : 'Cambiar estado del pedido'}">
            <i class="fas fa-sync-alt"></i> ${isEn ? 'Change Status' : 'Cambiar Estado'}
          </button>
          <button type="button" class="btn-history-action btn-delete" onclick="deleteHistoryTicket('${order.id}')" title="${isEn ? 'Delete from history' : 'Eliminar del historial'}">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function viewHistoryTicket(orderId) {
  const history = getOrderHistory();
  const order = history.find(o => o.id === orderId);
  if (!order) return;

  renderTicketDetails(order);
  const ticketElem = document.getElementById('mostrar');
  if (ticketElem) {
    ticketElem.style.display = 'block';
    ticketElem.scrollIntoView({ behavior: 'smooth' });
  }

  if (typeof showToast === 'function') {
    showToast(`Visualizando ticket #${order.id}`, 'info');
  }
}

function cycleOrderStatus(orderId) {
  updateOrderInHistory(orderId, (order) => {
    if (order.status === 'En Espera') {
      order.status = 'En Preparación';
    } else if (order.status === 'En Preparación') {
      order.status = 'Listo para Recoger';
    } else {
      order.status = 'En Espera';
    }

    if (typeof showToast === 'function') {
      showToast(`Pedido #${order.id}: ${order.status}`, 'info');
    }

    // If currently showing this ticket, re-render its details
    const parrafo = document.getElementById('parrafo');
    if (parrafo && parrafo.innerHTML.includes(order.id)) {
      renderTicketDetails(order);
    }
  });
}

function deleteHistoryTicket(orderId) {
  let history = getOrderHistory();
  history = history.filter(o => o.id !== orderId);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  renderTicketHistory();

  if (typeof showToast === 'function') {
    showToast(`Ticket #${orderId} eliminado del historial`, 'info');
  }
}

function printTicket() {
  window.print();
}
