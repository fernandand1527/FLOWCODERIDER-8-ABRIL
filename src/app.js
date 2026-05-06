// 1. Funciones de lógica pura (Backend/Utilidades)
export function saludar(nombre) {
    return `Hola ${nombre}`;
}

export function estadoSistema() {
    return "Activo";
}

export function Sumar(a, b) {
    return a + b;
}

export function Restar(a, b) {
    return a - b;
}

export function healtcheck() {
    return {
        status: "ok",
        timestamp: new Date().toISOString(),
        servicio: "Streamflow API",
        version: "1.0.0"
    };
}

export function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 2. Lógica de Interfaz (Frontend) - DEBE ESTAR AFUERA DE FACTORIAL
// Asignamos a 'window' para que el HTML encuentre la función al hacer click
window.VerificarSistema = function() {
    const statusDiv = document.getElementById("status");
    
    if (statusDiv) {
        // Cambiamos el estilo y el texto para confirmar que funciona
        statusDiv.style.backgroundColor = "#e8f5e9";
        statusDiv.style.border = "1px solid #2ea44f";
        statusDiv.style.padding = "10px";
        statusDiv.style.borderRadius = "8px"; // Para que se vea más profesional
        statusDiv.style.marginTop = "10px";
        
        statusDiv.innerHTML = "✅ <strong>Sistema Verificado:</strong> El despliegue en Git es correcto.";
        
        console.log("Botón presionado: Sistema verificado con éxito.");
    } else {
        console.error("No se encontró el elemento con id 'status'");
    }
};