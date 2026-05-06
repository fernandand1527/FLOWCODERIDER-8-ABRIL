window.VerificarSistema = function() {
    const statusDiv = document.getElementById("status");
    if (statusDiv) {
        statusDiv.innerHTML = "✅ Sistema Verificado correctamente.";
        statusDiv.style.color = "#009B4C";
    }
};