import { saludar, estadoSistema } from "../src/app.js";

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Rider");
    if (r1.includes("Rider")) {
        console.log("Test 1 Pasado: función saludar en CodeRider es correcta");
        pasadas++;
    } else {
        console.log("Test 1 Fallido:", r1);
        fallidas++;
    }

    const estado = estadoSistema();
    if (estado === "Activo") {
        console.log("Test 2 Pasado: estadoSistema() funciona en CodeRider");
        pasadas++;
    } else {
        console.log("Test 2 Fallido:", estado);
        fallidas++;
    }

    console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas.");
}

ejecutarPruebas();








