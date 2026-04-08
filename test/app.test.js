import {saludar,despedir,estadoSistema} from "../src/app.js"

function ejecutarPruebas() {
let pasadas =0;
let fallidas =0;

const r1 = saludar("Rider")
if (r1.includes("Rider")) {
console.log ("Test 1 Pasado: funcion saludar en CodeRider es correcto")
pasadas++;
} else {
console.log("Test 1 Fallido: ", r1);
fallidas++;
}
{

console.log("Test 2 Pasado: ", estado);
    pasadas++;

    console.log("Test 2 Fallido: ", estado);
    fallidas++;


}
console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas.");
if (fallidas > 0) ProcessingInstruction.exit(1);

}
ejecutarPruebas();