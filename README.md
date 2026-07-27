# GZS WEAR - Aesthetic E-commerce Store

Esta es la nueva tienda online para **GZS WEAR**, diseñada con una estética minimalista y moderna, integrada (preparada) con Printify.

## Características
- 🎨 **Diseño Aesthetic**: Inspirado en la identidad de marca de GZS.
- 🛒 **Carrito de Compras**: Funcionalidad completa de carrito usando Zustand.
- 📱 **Responsive**: Optimizado para móviles y escritorio.
- 🔗 **Preparado para Printify API**: Incluye estructura para conectar tus productos reales.

## Configuración

Para conectar tus productos reales de Printify:

1. Renombra `.env.example` a `.env.local`.
2. Añade tu `PRINTIFY_API_KEY` y `PRINTIFY_SHOP_ID`.
3. El componente de la tienda puede ser actualizado para consumir `/api/products` en lugar de los datos estáticos.

## Cómo subir a GitHub y Desplegar

1. Crea un nuevo repositorio vacío en tu cuenta de GitHub llamado `gzs-wear`.
2. En tu terminal, ejecuta los siguientes comandos (dentro de la carpeta del proyecto):

```bash
git remote add origin https://github.com/TU_USUARIO/gzs-wear.git
git branch -M main
git push -u origin main
```

3. Ve a [Vercel](https://vercel.com) y conecta tu repositorio de GitHub para desplegarlo con un clic.

## Estructura del Proyecto
- `src/app`: Páginas y API routes.
- `src/components`: Componentes reutilizables (Navbar, etc).
- `src/store`: Gestión de estado (Carrito).
- `src/data`: Datos estáticos iniciales de productos.
