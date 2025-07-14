# Evaluacion-S4

# SPA - Gestión de Eventos

Proyecto desarrollado como prueba de desempeño del Módulo 3 (JavaScript). Esta SPA permite gestionar eventos, registrar usuarios y realizar operaciones según el rol (administrador o visitante).

## 🚀 Funcionalidades

- Registro e inicio de sesión (con roles: admin y visitante)
- CRUD de eventos para administrador
- Registro a eventos para visitantes (con control de capacidad)
- Persistencia de sesión con LocalStorage
- Navegación dinámica con rutas protegidas
- json-server como base de datos simulada

## 🛠 Tecnologías

- JavaScript (ES Modules)
- HTML5 + CSS3
- json-server

## ▶ Cómo ejecutar

1. Instala dependencias:

```bash
npm install
npm run dev
npx json-server db.json

