# Starbucks® Pickup — Web Ordering & Order Management Platform

[![Deploy to GitHub Pages](https://github.com/Miito456/Starbucks/actions/workflows/pages/pages-build-deployment/badge.svg)](https://miito456.github.io/Starbucks/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/ES6+-Vanilla%20JS-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Design%20System-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)

> Una plataforma web orientada al modelo **Starbucks Pickup**: permite explorar el catálogo, ordenar bebidas y alimentos personalizados, generar un ticket digital de retiro en tienda con código de barras y dar seguimiento en tiempo real al estado de preparación del pedido.

---

## ☕ Concepto: Starbucks Pickup

El modelo **Starbucks Pickup** está diseñado para agilizar la experiencia de compra mediante un flujo continuo:

```
[ Explorar Catálogo ] ➔ [ Carrito Persistente ] ➔ [ Registro & Pago ] ➔ [ Ticket con Código de Barras ] ➔ [ Monitor de Estado ]
```

1. **Selección**: El usuario explora bebidas artesanales, repostería y coleccionables con filtros interactivos por categoría.
2. **Personalización y Carrito**: Control de cantidades y persistencia en cliente mediante `localStorage`.
3. **Registro y Descuento**: Formulario con validación en tiempo real de campos (nombre, correo, teléfono, edad, dirección) y cálculo de descuento automático (15% con tarjeta).
4. **Emisión de Ticket Digital**: Generación instantánea de comprobante con folio único `#SB-XXXX`, desglose de artículos, fecha, sucursal y código de barras.
5. **Historial y Seguimiento en Vivo**: Panel de pedidos para monitorear el ciclo de vida de la orden:
   - `⏳ En Espera`: Pedido emitido y en cola de recepción.
   - `☕ En Preparación`: En proceso de elaboración por el barista.
   - `✅ Listo para Recoger`: Orden terminada, disponible en mostrador.

---

## 🛠️ Arquitectura y Tecnologías

El proyecto está construido bajo una arquitectura modular sin dependencias pesadas de frameworks, maximizando la velocidad de carga y la fidelidad visual:

* **HTML5 Semántico**: Estructuración accesible, metadatos responsivos y marcado semántico.
* **CSS3 Custom Design System (`theme.css`)**:
  - Paleta de tokens de diseño (`--sb-green`, `--sb-green-dark`, `--sb-accent-cream`, etc.).
  - Layouts simétricos con **CSS Grid** de 3 columnas y alineación responsiva inteligente.
  - Microinteracciones con curvas cúbicas (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - Reglas de impresión exclusivas (`@media print`) para tickets limpios en formato recibo.
* **JavaScript ES6+ Reactivo (`store.js` & `myscript.js`)**:
  - **State Management**: Gestión reactiva del carrito y del historial de tickets en `localStorage`.
  - **Live Validation**: Comprobación continua de expresiones regulares (RegEx) para inputs de formulario.
  - **Toast Notification Engine**: Sistema propio de alertas no bloqueantes (reemplazando `alert()`).
  - **Badge Syncing**: Sincronización del contador de artículos entre páginas del sitio.

---

## 📂 Estructura del Repositorio

```text
├── index.html              # Landing page principal con selector interactivo de bebidas
├── menu.html               # Catálogo de productos con tarjetas de expansión 3D y filtros
├── compra.html             # Tienda Pickup, carrito, checkout, ticket digital e historial
├── contacto.html           # Página de soporte, ayuda oficial y datos del desarrollador
├── CSS/
│   ├── theme.css           # Tokens de diseño, tipografía, navbar, footer y toasts
│   ├── estilo.css          # Animaciones del Hero y morphing background
│   ├── estilomenu.css      # Grid simétrico y tarjetas con efecto clip-path
│   ├── styles.css          # Carrito de compra y formulario de registro
│   ├── estiloticket.css    # Recibo de compra digital e historial de estados
│   └── estilocontacto.css  # Layout de atención al cliente y formulario de mensaje
├── JS/
│   ├── store.js            # Lógica de carrito, checkout, generación de ticket e historial
│   └── myscript.js         # Transición de vaso, menú móvil, sticky header y toasts
└── Img/                    # Recursos visuales y activos gráficos optimizados
```

---

## 🚀 Despliegue en Vivo

El proyecto se encuentra desplegado de forma continua a través de **GitHub Pages**:

🔗 **[https://miito456.github.io/Starbucks/](https://miito456.github.io/Starbucks/)**

---

## 👨‍💻 Desarrollador

* **Miguel Ángel Ramos Soto**
* **GitHub**: [@Miito456](https://github.com/Miito456)
* **Correo**: [Mito5524@gmail.com](mailto:Mito5524@gmail.com)

---

*Aviso: Este proyecto fue desarrollado con propósitos académicos y de demostración técnica de interfaces web. Starbucks® y sus logotipos son marcas registradas de Starbucks Corporation.*
