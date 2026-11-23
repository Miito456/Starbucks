/**
 * Starbucks Bilingual Translation Engine (ES / EN)
 * Handles full live DOM translation, locale persistence, and language switcher UI.
 */

const translations = {
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_menu: "Menú",
    nav_shop: "Compra",
    nav_contact: "Contacto",

    // Home Page (index.html)
    hero_title: "No es solo un café<br>Es <span>Starbucks</span>",
    hero_desc: "Descubre lo que hace que Starbucks® sea único: desde nuestro compromiso con la conexión humana y el café de grano ético, hasta nuestras acogedoras cafeterías y bebidas que transforman tu día.",
    hero_btn_menu: "Ver Menú Completo",
    hero_btn_order: "Ordenar en Línea",
    stat_ethical: "Café de Origen Ético",
    stat_items: "Bebidas & Postres",
    stat_rating: "Valoración de Clientes",
    feat_badge: "La Diferencia Starbucks",
    feat_title: "La taza perfecta, preparada especialmente para ti",
    feat_1_title: "Granos 100% Arábica",
    feat_1_desc: "Seleccionamos meticulosamente cada grano de las mejores regiones cafetaleras para garantizar una nota de cata inigualable.",
    feat_2_title: "Conexión & Comunidad",
    feat_2_desc: "Más que un café, creamos espacios cálidos donde el trabajo, la amistad y el confort se encuentran en cada visita.",
    feat_3_title: "Ordena y Recoge",
    feat_3_desc: "Haz tu pedido desde nuestra plataforma web, personaliza tus complementos y recoge rápidamente en tu sucursal más cercana.",

    // Menu Page (menu.html)
    menu_hero_title: "Nuestro Delicioso Menú",
    menu_hero_desc: "Explora nuestras bebidas artesanales preparadas al momento, exquisitos postres horneados y productos exclusivos para llevar la experiencia Starbucks contigo.",
    tab_all: "Todos los Productos",
    tab_drinks: "Bebidas",
    tab_food: "Alimentos",
    tab_extras: "Extras & Mercancía",
    sec_drinks_title: "Bebidas de Especialidad",
    sec_drinks_count: "3 Variedades",
    sec_food_title: "Alimentos y Repostería",
    sec_food_count: "3 Especialidades",
    sec_extras_title: "Extras & Mercancía Oficial",
    sec_extras_count: "3 Artículos",
    btn_buy: "Comprar",

    // Product details (Menu & Shop)
    prod_green_coffee_desc: "Deliciosa combinación de infusión de té matcha con nuestro clásico Frappuccino artesanal.",
    prod_fresa_cream_desc: "Suave crema batida combinada con fresas naturales cosechadas y jarabe dulce artesanal.",
    prod_frambuesa_desc: "La intensidad de nuestro espresso tostado oscuro equilibrado con toques frescos de frambuesa silvestre.",
    prod_cake_desc: "Esponjoso pastel horneado con vainilla de Madagascar y glaseado suave de crema de mantequilla.",
    prod_donut_desc: "Dona tradicional glaseada con una textura suave, dorada a la perfección para acompañar tu café.",
    prod_muffin_desc: "Muffin artesanal de zanahoria con nueces tostadas, pasas selectas y especias aromáticas de canela.",
    prod_natural_desc: "Bolsa de café de grano entero premium de tueste medio, listo para moler y preparar en casa.",
    prod_thermos_desc: "Termo térmico de acero inoxidable doble capa, mantiene tus bebidas calientes por 12 horas y frías por 24.",
    prod_mug_desc: "Taza clásica de cerámica vidriada de alta durabilidad con el icónico emblema de la Sirena Starbucks.",

    // Shop Page (compra.html)
    shop_hero_title: "Tienda & Pedido en Línea",
    shop_hero_desc: "Selecciona tus productos favoritos, agrégalos al carrito y completa tu registro para generar tu ticket digital con 15% de descuento al pagar con tarjeta.",
    cart_header_title: "Tu Carrito de Compra",
    cart_col_item: "Artículo",
    cart_col_price: "Precio",
    cart_col_qty: "Cantidad",
    cart_empty_title: "Tu carrito está actualmente vacío.",
    cart_empty_sub: "Selecciona productos de arriba o visita nuestro menú para añadir tus bebidas favoritas.",
    cart_total_label: "Total Estimado",
    btn_add_cart: "Añadir",

    // Checkout Form (compra.html)
    reg_title: "Registro de Cliente",
    reg_desc: "Por favor completa tus datos para procesar el pedido y generar tu ticket digital de entrega.",
    lbl_name: "Nombre Completo",
    lbl_email: "Correo Electrónico",
    lbl_phone: "Número Telefónico",
    lbl_age: "Edad",
    lbl_address: "Dirección de Entrega o Sucursal",
    payment_sec_title: "Selecciona tu Método de Pago",
    payment_card_title: "Tarjeta de Crédito / Débito",
    payment_card_sub: "Pago electrónico seguro",
    payment_card_badge: "15% Descuento Especial",
    payment_cash_title: "Efectivo al Recoger",
    payment_cash_sub: "Paga directo en mostrador al recoger tu orden",
    form_error_alert: "Por favor revisa que todos los campos del formulario estén correctamente llenados.",
    btn_clear: "Limpiar Campos",
    btn_generate_ticket: "Generar Ticket y Registrar Pedido",
    ticket_badge: "Ticket Digital",
    ticket_ready_note: "Presenta este código al recoger tu pedido en mostrador.<br>¡Starbucks® agradece tu preferencia!",
    btn_print_ticket: "Imprimir / Guardar Ticket",

    // Error hints
    err_name: "Solo se aceptan letras y espacios (2 a 40 caracteres).",
    err_email: "Ingrese un correo electrónico válido (ej. usuario@gmail.com).",
    err_phone: "Solo números (entre 7 y 14 dígitos).",
    err_age: "Ingrese una edad válida (1 a 99 años).",
    err_address: "La dirección debe tener entre 5 y 60 caracteres.",

    // History (compra.html)
    history_title: "Historial de Tickets y Pedidos",
    history_desc: "Monitorea el estado en vivo de tus órdenes generadas y consulta pedidos anteriores.",
    history_empty_title: "Aún no hay tickets generados en el historial.",
    history_empty_desc: "Cuando completes el registro y generes un ticket, aparecerá aquí con su estado en vivo.",
    btn_view_ticket: "Ver Ticket",
    btn_cycle_status: "Cambiar Estado",

    // Contact Page (contacto.html)
    contact_hero_tag: "Atención & Soporte",
    contact_hero_title: "Ponte en Contacto",
    contact_hero_desc: "Estamos aquí para escucharte. Ya sea que tengas preguntas sobre nuestros productos, sugerencias para mejorar tu experiencia o desees contactar al desarrollador.",
    dev_title: "Creador del Proyecto",
    dev_bio: "Desarrollador web enfocado en interfaces interactivas, rendimiento y experiencia de usuario. Este sitio fue diseñado como una propuesta digital moderna para Starbucks® Pickup.",
    dev_location: "Ubicación: México",
    official_support_title: "Soporte Oficial Starbucks",
    official_support_desc: "Inspirar y nutrir el espíritu humano: Una persona, una taza y una comunidad a la vez. Encuentra ayuda rápida sobre compras, recompensas y facturación.",
    help_center_title: "Centro de Ayuda & FAQ",
    help_center_desc: "Respuestas a preguntas frecuentes sobre pedidos y facturas.",
    community_title: "Comunidad Starbucks",
    community_desc: "Únete a miles de amantes del café compartiendo ideas y opiniones.",
    support_portal_title: "Portal de Atención al Cliente",
    support_portal_desc: "Envía consultas directas al equipo de Starbucks Corporation.",
    form_send_title: "Envíanos un Mensaje",
    form_send_desc: "Rellena el siguiente formulario y te responderemos lo más pronto posible.",
    form_opt_1: "Duda sobre un pedido o producto",
    form_opt_2: "Sugerencia de mejora para la web",
    form_opt_3: "Contacto profesional con el desarrollador",
    form_opt_4: "Otro asunto",
    lbl_subject: "Motivo de Contacto",
    lbl_message: "Tu Mensaje *",
    btn_submit_msg: "Enviar Mensaje",
    contact_textarea_ph: "Escribe aquí tu consulta o comentario detallado...",
    contact_success_text: "¡Gracias por tu mensaje! Ha sido enviado exitosamente. Nos pondremos en contacto contigo a la brevedad.",

    // Footer (Shared Across All Pages)
    footer_rewards_title: "Únete a Starbucks Rewards",
    footer_rewards_desc: "Gana estrellas con cada compra, disfruta de bebidas de cortesía en tu cumpleaños y acceso exclusivo a promociones.",
    footer_rewards_btn: "Comenzar Ahora",
    footer_cta_menu_page_title: "¿Listo para saborear lo mejor?",
    footer_cta_menu_page_desc: "Agrega tus productos favoritos al carrito y personaliza tu pedido en línea de forma fácil y segura.",
    footer_cta_menu_page_btn: "Ir al Carrito",
    footer_cta_shop_page_title: "¿Prefieres ver nuestro menú primero?",
    footer_cta_shop_page_desc: "Conoce las notas de cata de nuestros granos y las bebidas frías de temporada disponibles hoy.",
    footer_cta_shop_page_btn: "Ver Menú",
    footer_cta_contact_page_title: "¿Se te antoja un café?",
    footer_cta_contact_page_desc: "Conoce las notas de cata de nuestros granos y las bebidas de temporada disponibles hoy.",
    footer_cta_contact_page_btn: "Ver Menú",
    footer_mission: "Inspirar y nutrir el espíritu humano: una persona, una taza y una comunidad a la vez. Comprometidos con la sustentabilidad y el mejor café del mundo.",
    footer_menu_header: "Explorar Menú",
    footer_menu_cold: "Bebidas Frías & Frappuccinos",
    footer_menu_espresso: "Espresso & Café Clásico",
    footer_menu_bakery: "Panadería y Repostería",
    footer_menu_merch: "Termos y Tazas Exclusivas",
    footer_menu_cart: "Carrito de Compras",
    footer_support_header: "Soporte & Ayuda",
    footer_help_center: "Centro de Ayuda",
    footer_contact_form: "Formulario de Contacto",
    footer_community: "Comunidad Starbucks",
    footer_wipo: "Propiedad Intelectual WIPO",
    footer_author_header: "Desarrollador del Proyecto",
    footer_dev_sub: "Proyecto Académico & Portafolio",
    footer_dev_desc: "Diseño y desarrollo web interactivo para experiencia de marca Starbucks.",
    footer_contact_btn: "Contactar",
    footer_legal_btn: "Aviso Legal, Derechos de Autor y Marcas Registradas",
    footer_legal_ip_title: "Aviso de Propiedad Intelectual:",
    footer_legal_ip_text: "Los productos, logotipos, nombres comerciales, gráficos e imágenes mostrados en este sitio web son propiedad exclusiva de sus respectivos representantes y de Starbucks Coffee Company. Este proyecto fue realizado con fines demostrativos, académicos e informativos.",
    footer_legal_tm_title: "Marcas Registradas & Patentes:",
    footer_legal_tm_text: "Starbucks® y el logotipo de la Sirena son marcas comerciales registradas de Starbucks Corporation. Para mayor información sobre las políticas oficiales, visite los",
    footer_terms_link: "Términos de Uso de Starbucks",
    footer_wipo_intro: "o la",
    footer_wipo_link: "Organización Mundial de la Propiedad Intelectual (WIPO)",
    footer_rights: "© 2026 Starbucks Corporation & Miguel Ángel Ramos Soto. Todos los derechos reservados.",
    footer_created_date: "Creado: 30 de abril de 2021",
    footer_version_tag: "Versión 2.0 Mejorada"
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_menu: "Menu",
    nav_shop: "Shop / Pickup",
    nav_contact: "Contact",

    // Home Page (index.html)
    hero_title: "It's not just coffee<br>It's <span>Starbucks</span>",
    hero_desc: "Discover what makes Starbucks® unique: from our commitment to human connection and ethical coffee sourcing, to welcoming cafes and drinks that transform your day.",
    hero_btn_menu: "Explore Full Menu",
    hero_btn_order: "Order Online",
    stat_ethical: "Ethically Sourced Coffee",
    stat_items: "Drinks & Pastries",
    stat_rating: "Customer Rating",
    feat_badge: "The Starbucks Difference",
    feat_title: "The perfect cup, handcrafted just for you",
    feat_1_title: "100% Arabica Beans",
    feat_1_desc: "Meticulously selected coffee beans from prime coffee-growing regions around the world for an unmatched flavor profile.",
    feat_2_title: "Connection & Community",
    feat_2_desc: "More than coffee, we build welcoming spaces where friendship, work, and comfort seamlessly meet in every visit.",
    feat_3_title: "Order & Pickup",
    feat_3_desc: "Place your order via our web platform, customize your drinks and quickly pick them up at your nearest store.",

    // Menu Page (menu.html)
    menu_hero_title: "Our Delicious Menu",
    menu_hero_desc: "Explore our freshly handcrafted beverages, artisan baked pastries, and exclusive merchandise to take the Starbucks experience anywhere.",
    tab_all: "All Products",
    tab_drinks: "Beverages",
    tab_food: "Food & Bakery",
    tab_extras: "Extras & Merch",
    sec_drinks_title: "Specialty Beverages",
    sec_drinks_count: "3 Varieties",
    sec_food_title: "Bakery & Food",
    sec_food_count: "3 Specialties",
    sec_extras_title: "Official Extras & Merch",
    sec_extras_count: "3 Items",
    btn_buy: "Buy Now",

    // Product details (Menu & Shop)
    prod_green_coffee_desc: "Delicious fusion of Japanese matcha tea with our artisan blended Frappuccino base.",
    prod_fresa_cream_desc: "Velvety whipped cream combined with real harvested strawberries and artisan sweet syrup.",
    prod_frambuesa_desc: "The boldness of dark roasted espresso balanced with fresh wild raspberry undertones.",
    prod_cake_desc: "Moist sponge cake infused with natural Madagascar vanilla and silky buttercream frosting.",
    prod_donut_desc: "Classic glazed donut with a fluffy, golden texture, baked to perfection to accompany your coffee.",
    prod_muffin_desc: "Artisan carrot muffin packed with toasted walnuts, plump raisins, and warm cinnamon spice.",
    prod_natural_desc: "Premium bag of medium-roast whole bean coffee, ready to grind and brew at home.",
    prod_thermos_desc: "Double-walled vacuum insulated stainless steel thermos: keeps hot 12 hrs, cold 24 hrs.",
    prod_mug_desc: "Classic durable glazed ceramic mug featuring the iconic Starbucks Siren trademark insignia.",

    // Shop Page (compra.html)
    shop_hero_title: "Pickup Store & Online Ordering",
    shop_hero_desc: "Select your favorite items, add them to your cart, and complete registration to generate your digital pickup ticket with 15% discount when paying by card.",
    cart_header_title: "Your Shopping Cart",
    cart_col_item: "Item",
    cart_col_price: "Price",
    cart_col_qty: "Quantity",
    cart_empty_title: "Your cart is currently empty.",
    cart_empty_sub: "Select products from above or visit our menu to add your favorite drinks.",
    cart_total_label: "Estimated Total",
    btn_add_cart: "Add to Cart",

    // Checkout Form (compra.html)
    reg_title: "Customer Registration",
    reg_desc: "Please complete your details to process the order and generate your digital pickup ticket.",
    lbl_name: "Full Name",
    lbl_email: "Email Address",
    lbl_phone: "Phone Number",
    lbl_age: "Age",
    lbl_address: "Pickup Address or Branch",
    payment_sec_title: "Select Payment Method",
    payment_card_title: "Credit / Debit Card",
    payment_card_sub: "Secure digital checkout",
    payment_card_badge: "15% Special Discount",
    payment_cash_title: "Cash on Pickup",
    payment_cash_sub: "Pay directly at the counter upon order pickup",
    form_error_alert: "Please make sure all form fields are filled out correctly.",
    btn_clear: "Clear Fields",
    btn_generate_ticket: "Generate Ticket & Place Order",
    ticket_badge: "Digital Ticket",
    ticket_ready_note: "Present this barcode at the counter when picking up your order.<br>Starbucks® thanks you for your preference!",
    btn_print_ticket: "Print / Save Ticket",

    // Error hints
    err_name: "Only letters and spaces are accepted (2 to 40 characters).",
    err_email: "Please enter a valid email address (e.g. user@gmail.com).",
    err_phone: "Numbers only (between 7 and 14 digits).",
    err_age: "Please enter a valid age (1 to 99 years).",
    err_address: "Address must be between 5 and 60 characters.",

    // History (compra.html)
    history_title: "Ticket & Order History",
    history_desc: "Monitor live progress for your generated orders and review past purchases.",
    history_empty_title: "No orders generated in history yet.",
    history_empty_desc: "Once you complete checkout and generate a ticket, your order will appear here with live tracking.",
    btn_view_ticket: "View Ticket",
    btn_cycle_status: "Change Status",

    // Contact Page (contacto.html)
    contact_hero_tag: "Care & Support",
    contact_hero_title: "Get in Touch",
    contact_hero_desc: "We are here to listen. Whether you have questions about products, feedback, or wish to connect with the developer.",
    dev_title: "Project Creator",
    dev_bio: "Web developer focused on interactive interfaces, speed, and user experience. Built as a modern digital showcase for Starbucks® Pickup.",
    dev_location: "Location: Mexico",
    official_support_title: "Official Starbucks Support",
    official_support_desc: "To inspire and nurture the human spirit: one person, one cup, and one neighborhood at a time. Quick answers for orders, rewards, and billing.",
    help_center_title: "Help Center & FAQ",
    help_center_desc: "Answers to common questions regarding pickup orders and invoices.",
    community_title: "Starbucks Community",
    community_desc: "Join thousands of coffee enthusiasts sharing ideas and feedback.",
    support_portal_title: "Customer Care Portal",
    support_portal_desc: "Submit direct inquiries to Starbucks Corporation support teams.",
    form_send_title: "Send Us a Message",
    form_send_desc: "Fill in the form below and we will get back to you shortly.",
    form_opt_1: "Question regarding an order or product",
    form_opt_2: "Suggestion to improve the website",
    form_opt_3: "Professional inquiry with developer",
    form_opt_4: "Other inquiry",
    lbl_subject: "Reason for Contact",
    lbl_message: "Your Message *",
    btn_submit_msg: "Send Message",
    contact_textarea_ph: "Write your detailed message or feedback here...",
    contact_success_text: "Thank you for your message! It has been successfully sent. We will get back to you shortly.",

    // Footer (Shared Across All Pages)
    footer_rewards_title: "Join Starbucks Rewards",
    footer_rewards_desc: "Earn stars on every purchase, enjoy birthday complimentary treats, and gain exclusive early access to promotions.",
    footer_rewards_btn: "Get Started Now",
    footer_cta_menu_page_title: "Ready to savor the best?",
    footer_cta_menu_page_desc: "Add your favorite items to cart and easily customize your order online.",
    footer_cta_menu_page_btn: "Go to Cart",
    footer_cta_shop_page_title: "Prefer to browse our menu first?",
    footer_cta_shop_page_desc: "Explore tasting notes of our coffee beans and seasonal cold drinks available today.",
    footer_cta_shop_page_btn: "View Menu",
    footer_cta_contact_page_title: "Craving a fresh coffee?",
    footer_cta_contact_page_desc: "Explore our coffee bean tasting notes and signature seasonal drinks available today.",
    footer_cta_contact_page_btn: "View Menu",
    footer_mission: "To inspire and nurture the human spirit: one person, one cup, and one neighborhood at a time. Committed to sustainability and the world's finest coffee.",
    footer_menu_header: "Explore Menu",
    footer_menu_cold: "Cold Drinks & Frappuccinos",
    footer_menu_espresso: "Espresso & Classic Coffee",
    footer_menu_bakery: "Bakery & Pastries",
    footer_menu_merch: "Thermoses & Exclusive Mugs",
    footer_menu_cart: "Shopping Cart",
    footer_support_header: "Help & Support",
    footer_help_center: "Help Center",
    footer_contact_form: "Contact Form",
    footer_community: "Starbucks Community",
    footer_wipo: "WIPO Intellectual Property",
    footer_author_header: "Project Developer",
    footer_dev_sub: "Academic Project & Portfolio",
    footer_dev_desc: "Interactive web design and engineering for Starbucks brand experience.",
    footer_contact_btn: "Contact",
    footer_legal_btn: "Legal Notice, Copyright & Registered Trademarks",
    footer_legal_ip_title: "Intellectual Property Notice:",
    footer_legal_ip_text: "The products, logos, trade names, graphics, and images displayed on this website are the exclusive property of their respective owners and Starbucks Coffee Company. This project was built for academic and demonstration purposes.",
    footer_legal_tm_title: "Registered Trademarks & Patents:",
    footer_legal_tm_text: "Starbucks® and the Siren logo are registered trademarks of Starbucks Corporation. For official policy details, please visit the",
    footer_terms_link: "Starbucks Terms of Use",
    footer_wipo_intro: "or the",
    footer_wipo_link: "World Intellectual Property Organization (WIPO)",
    footer_rights: "© 2026 Starbucks Corporation & Miguel Ángel Ramos Soto. All rights reserved.",
    footer_created_date: "Created: April 30, 2021",
    footer_version_tag: "Version 2.0 Enhanced"
  }
};

/**
 * Get current active language ('es' or 'en')
 */
function getCurrentLanguage() {
  return localStorage.getItem('sb_lang') || 'es';
}

/**
 * Switch language and apply to DOM
 */
function switchLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem('sb_lang', lang);
  applyTranslations(lang);
  updateSwitcherButtons(lang);
  if (typeof renderCart === 'function') renderCart();
  if (typeof renderTicketHistory === 'function') renderTicketHistory();
}

/**
 * Apply translation keys to all elements with data-i18n attributes
 */
function applyTranslations(lang) {
  const dict = translations[lang] || translations.es;
  
  // Set html lang attribute
  document.documentElement.lang = lang;

  // Translate text & HTML contents
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
}

/**
 * Update active state on language switcher buttons
 */
function updateSwitcherButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Auto-run on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLanguage();
  applyTranslations(currentLang);
  updateSwitcherButtons(currentLang);
});
