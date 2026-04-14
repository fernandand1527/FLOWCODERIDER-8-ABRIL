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