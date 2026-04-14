import { saludar, estadoSistema, Sumar, Restar } from "../src/app.js";

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    
    const r1 = saludar("Rider");
    if (r1.includes("Rider")) {
        console.log("Test 1 Pasado");
        pasadas++;
    } else {
        console.log("Test 1 Fallido:", r1);
        fallidas++;
    }

    const estado = estadoSistema(); 
    if (estado === "Activo") {
        console.log("Test 2 Pasado");
        pasadas++;
    } else {
        console.log("Test 2 Fallido:", estado);
        fallidas++;
    }

    
    const suma = Sumar(2, 3);
    if (suma === 5) {
        console.log("Test 3 Pasado");
        pasadas++;
    } else {
        console.log("Test 3 Fallido");
        fallidas++;
    }

    
    const resta = Restar(5, 3);
    if (resta === 2) {
        console.log("Test 4 Pasado");
        pasadas++;
    } else {
        console.log("Test 4 Fallido");
        fallidas++;
    }

    console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas.`);
}

ejecutarPruebas();








