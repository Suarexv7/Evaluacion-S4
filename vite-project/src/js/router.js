import { getCurrentUser} from "./Auth.js";


// Asignamos las rutas a su correspondiente vista para la navegación

const routes = {
  "/dashboard": "dashboard.html",
  "/login": "login.html",
  "/register": "register.html",
  "/dashboard/events/create": "create.html",
  "/dashboard/events/edit": "edit.html",
};

export async function navigate(path) {}
  const users = getCurrentUser();

  // Protección de rutas
  const publicRoutes = ["/login", "/register"];
  const protectedRoutes = Object.keys(routes).filter(r => !publicRoutes.includes(r));

  export function router() {
  const path = location.replace = '/login';
  const user = auth.getUser();

  if (!user && protectedRoutes.includes(path)) {
    loadPage("/views/404.html");
    return;
  }

  if (user && publicRoutes.includes(path)) {
    loadPage("/views/dashboard.html");
    return;
  }

  loadPage(routes[path] || "/views/404.html");
}

async function loadPage(url) {
  const res = await fetch(url);
  document.getElementById("app").innerHTML = await res.text();
  
}
