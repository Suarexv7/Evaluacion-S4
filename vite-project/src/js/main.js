// importamos las función navigate del router.js para manejar la navegación correspondiente

import { navigate } from './router.js'

window.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    navigate(path);


});
// Escuchamos el evento de cambio de hash para actualizar la navegación 
window.addEventListener("hashchange", navigate())
const path = window.location.pathname;
navigate(path);