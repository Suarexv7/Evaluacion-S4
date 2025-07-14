const API_URL = "http://localhost:3000/users";

// Funciones para manejar la autenticación de usuarios y sesiones implementando un sistema de registro y login
export async function register(user) {
    const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    return res.json();
}
// Función para iniciar sesión y obtener el usuario actual
// Almacena el usuario en localStorage para mantener la sesión activa
export async function login(username, password) {
    const res = await fetch(`${API_URL}/users?username=${username}&password=${password}`);
    const data = await res.json();
    if (data.length > 0) {
        localStorage.setItem("user", JSON.stringify(data[0]));
        return data[0];
    } else {
        throw new Error("Usuario o contraseña incorrectos");
    }
}
// Función para obtener el usuario actual desde localStorage
export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
}

export function logout() {
    localStorage.removeItem("user");
}