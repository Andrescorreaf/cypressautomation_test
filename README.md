# 🧪 Proyecto de Automatización con Cypress

Este proyecto utiliza **Cypress** para realizar pruebas automáticas de extremo a extremo (E2E) sobre una aplicación web. Cypress es una herramienta moderna y rápida para escribir, ejecutar y depurar pruebas de manera sencilla.

## 🚀 Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Acceso a la aplicación web que se desea probar

## 📦 Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/Andrescorreaf/cypressautomation_test
cd cypressautomation_test
npm install
```

## 🧪  Ejecutar pruebas

Modo Interactivo (Cypress UI)

```bash
$npm run head
```
Modo Headless (línea de comandos)

```bash
$npm run not_head
```
## 📁 Estructura del Proyecto

```bash
/cypress
  |── /downloads       → Archivo de descargas
  |── /e2e             → Pruebas end-to-end
  |── /fixtures        → Datos de prueba
  |── /support         → Comandos personalizados y configuración global
/cypress.config.js     → Configuración general de Cypress
```
## ✅ Buenas prácticas

* Agrupa pruebas por funcionalidades.
* Usa ```data-testid para``` localizar elementos de manera robusta.
* Aprovecha ```beforeEach()``` para configuración común.
* Usa ```cy.intercept()``` para simular respuestas si es necesario.
  
## 🧑‍💻 Autor
Andres Correa

* 📧 felipefranco989@gmail.com
* 🌐 github.com/Andrescorreaf

## 📄 Licencia

***Este proyecto está bajo la licencia MIT.***

