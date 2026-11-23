# ☕ Starbucks® Web Experience 2.0

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-006241?style=for-the-badge&logo=googlechrome&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-222222?style=for-the-badge&logo=github&logoColor=white)

**Una propuesta interactiva y moderna de comercio electrónico y experiencia de marca inspirada en Starbucks®.**

[🌐 Ver Demo en Vivo en GitHub Pages](https://miito456.github.io/Starbucks/)

</div>

---

## 📖 Descripción del Proyecto

Este proyecto es una aplicación web interactiva que simula la experiencia digital de **Starbucks®**, combinando diseño visual de alta fidelidad, animaciones fluidas, rendimiento optimizado, tienda en línea funcional con carrito persistente, generación de ticket digital e historial de pedidos con seguimiento de estados en vivo.

---

## ✨ Características Principales

### 🏠 1. Inicio Interactivo (Hero Section)
* **Selector Dinámico de Bebidas**: Cambio fluido de vaso (Frappuccino Verde, Fresa Cream, Frambuesa Coffee) con transición de color sincronizada en el fondo.
* **Animación de Levitación**: Efecto flotante suave continuo en el vaso principal (`@keyframes floatAnimation`).
* **Navegación Sticky**: Cabecera con efecto *glassmorphism* al hacer scroll, botón volver arriba suave y menú responsive tipo cajón lateral en dispositivos móviles.
* **Contador de Carrito en Vivo**: Indicador numérico animado (`badge`) que se sincroniza automáticamente entre todas las páginas.

### 🍵 2. Menú de Productos
* **Filtros por Categoría**: Pestañas interactivas para explorar *Todos*, *Bebidas*, *Alimentos* y *Extras*.
* **Tarjetas con Expansión Circular 3D**: Efecto de `clip-path` circular que se expande dinámicamente al pasar el cursor, revelando detalles, precios y botón de compra directa.
* **Diseño Simétrico y Centrado**: Layout optimizado para 3 productos por fila en pantallas de escritorio y centrado inteligente en pantallas medianas para evitar espacios vacíos.

### 🛒 3. Tienda, Carrito & Ticket Digital
* **Carrito Persistente con LocalStorage**: Los artículos añadidos se guardan localmente en el navegador y persisten aunque se recargue o cierre la página.
* **Controladores de Cantidad**: Ajusta o elimina productos fácilmente desde el carrito con cálculo de subtotales y total en tiempo real.
* **Formulario de Registro Validado**: Validación en tiempo real (regex) para nombre, email, teléfono, edad y dirección con indicadores visuales instantáneos.
* **15% de Descuento con Tarjeta**: Selector dinámico de método de pago (Tarjeta de Crédito o Efectivo al recoger).
* **Ticket Digital con Código de Barras**: Generación de recibo oficial con número de pedido, desglose por producto, descuentos y soporte nativo para impresión/guardado en PDF (`@media print`).

### ⏳ 4. Historial de Pedidos y Estados en Vivo
* **Historial Persistente**: Cada ticket generado se archiva automáticamente en el historial.
* **Seguimiento de Estados**:
  - ⏳ **En Espera**: Pedido generado y en cola.
  - ☕ **En Preparación**: Bebidas y alimentos siendo preparados.
  - ✅ **Listo para Recoger**: Orden lista en mostrador.
* **Acciones Rápidas**: Visualización del ticket completo, cambio interactivo de estado y eliminación de registros.

### 📬 5. Contacto & Soporte
* Tarjeta informativa del creador y enlaces directos a las páginas oficiales de ayuda y comunidad de Starbucks.
* Formulario de contacto con alertas animadas y notificaciones Toast.

### 🦶 6. Footer Premium
* Pie de página corporativo estructurado en 4 columnas.
* Acordeón desplegable para el aviso legal, derechos de autor y patentes.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5**: Estructura semántica, metaetiquetas de renderizado y atributos de accesibilidad.
* **CSS3 Moderno**: Variables CSS personalizadas, Flexbox, CSS Grid simétrico, transiciones cúbicas (`cubic-bezier`), *clip-path* y reglas para impresión (`@media print`).
* **JavaScript (Vanilla ES6+)**: Manipulación del DOM, sistema de notificaciones Toast, persistencia en `localStorage`, eventos dinámicos y validación de expresiones regulares.
* **Font Awesome 6**: Iconografía vectorial ligera cargada vía CDN.
* **Google Fonts**: Tipografía moderna *Poppins*.

---

## 📂 Estructura del Proyecto

```text
Starbucks/
├── CSS/
│   ├── theme.css           # Sistema de diseño global, variables y animaciones
│   ├── estilo.css          # Estilos específicos de Inicio (Hero y características)
│   ├── estilomenu.css      # Estilos del menú y tarjetas interactivas
│   ├── styles.css          # Estilos de la tienda, carrito y formulario de checkout
│   ├── estiloticket.css    # Estilos del ticket digital e historial de pedidos
│   └── estilocontacto.css  # Estilos de la página de contacto y soporte
├── Img/                    # Recursos gráficos (logos, bebidas, alimentos, iconos)
├── JS/
│   ├── myscript.js         # Lógica de navegación, scroll, slider y toasts
│   └── store.js            # Lógica del carrito, checkout, tickets e historial
├── index.html              # Página Principal (Inicio)
├── menu.html               # Página de Menú y Productos
├── compra.html             # Tienda en Línea, Carrito y Tickets
├── contacto.html           # Página de Contacto y Desarrollador
└── README.md               # Documentación del proyecto
```

---

## 🚀 Despliegue en GitHub Pages

Para publicar o actualizar los cambios en **GitHub Pages**:

1. Ve a tu repositorio en GitHub: [https://github.com/Miito456/Starbucks](https://github.com/Miito456/Starbucks)
2. Haz clic en la pestaña **Settings** (Configuración).
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En **Build and deployment > Source**, selecciona `Deploy from a branch`.
5. En **Branch**, selecciona `main` y la carpeta `/ (root)`. Haz clic en **Save**.
6. En un par de minutos, tu sitio estará activo en:
   👉 **`https://miito456.github.io/Starbucks/`**

> **Nota:** Cada vez que hagas `git push origin main`, GitHub Pages detecta los cambios automáticamente y vuelve a desplegar la versión más reciente en 1 a 2 minutos sin necesidad de volver a configurarlo.

---

## 👨‍💻 Autor

* **Miguel Ángel Ramos Soto**
* Correo: [Mito5524@gmail.com](mailto:Mito5524@gmail.com)
* Facebook: [Perfil de Facebook](https://www.facebook.com/profile.php?id=100006413612910)
* Proyecto desarrollado con fines educativos y de portafolio web.
