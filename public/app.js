const VERSION = '1.2.0';

function  saludar(nombre) {
    return `Hola, ${nombre}! Bienvenido a Coderider.`;
}
function healthCheck() {
    return {
        status: 'OK',
        version: VERSION,
        timestamp: new Date().toISOString(),
        message: 'Sistema Coderider funcionando correctamente.'
    };
}
function VerificarSistema() {
    const resultado = healthCheck();
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = '${resultado.message};| ${resultado.timestamp}';
    statusDiv.style.color = '#009B4C';
}
 
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('version').textContent = `v${VERSION}`;
    VerificarSistema();
});
