# Calendar App

## Descripción

Calendar App es una aplicación desarrollada con React.js que permite gestionar eventos en un calendario interactivo. Utiliza Redux Toolkit para el manejo del estado global y se complementa con una API en Node.js para la persistencia de datos. Se emplea React Big Calendar para la visualización de eventos.

## Características

Creación, edición y eliminación de eventos.

Manejo del estado global con Redux Toolkit.

Interfaz intuitiva basada en Bootstrap.

Persistencia de datos mediante una API en Node.js.

Notificaciones y alertas con SweetAlert2.

## Tecnologías utilizadas

React.js - Framework de desarrollo frontend.

Redux Toolkit - Manejo de estado global.

Bootstrap - Estilos y diseño responsivo.

React Big Calendar - Calendario interactivo.

Axios - Manejo de peticiones HTTP.

Date-fns - Manejo y formato de fechas.

React Datepicker - Selector de fechas.

React Modal - Ventanas modales para la gestión de eventos.

SweetAlert2 - Alertas y notificaciones.

## Instalación y configuración
1. Clonar el repositorio
git clone https://github.com/carlosfranco97/calendar-app.git

2. Acceder al directorio del proyecto
   cd calendar-app

3. Instalar dependencias
npm install

4. Configurar variables de entorno
Renombrar el archivo .env.template a .env y configurar la URL de la API:
VITE_API_URL=http://localhost:4000/api

5. Ejecutar la aplicación en modo desarrollo
npm run dev

## Autor
Carlos Franco - GitHub
