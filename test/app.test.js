import { saludar, despedir, estadoSistema, Sumar } from "../src/app.js"

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    // Test 1
    const r1 = saludar("Rider")
    if (r1.includes("Rider")) {
        console.log("Test 1 Pasado: funcion saludar en CodeRider es correcto")
        pasadas++;
    } else {
        console.log("Test 1 Fallido: ", r1);
        fallidas++;
    }

    // Test 2 (Corregido con IF para que no imprima ambos)
    const estado = estadoSistema(); 
    if (estado === "Activo") {
        console.log("Test 2 Pasado: ", estado);
        pasadas++;
    } else {
        console.log("Test 2 Fallido: ", estado);
        fallidas++;
    }

    // Test 3 (Corregido: usamos números reales 2 y 3)
    const Suma = Sumar(2, 3);
    if (Suma === 5) {
        console.log("Test 3 Pasado: Sumar(2,3) es correcto");
        pasadas++;
    } else {
        console.log("Test 3 Fallido: Sumar(2,3) no es correcto");
        fallidas++;
    }

    console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas.");
}

ejecutarPruebas();








