// ===================================================
//  MENÚ HAMBURGUESA 
// ===================================================

var miBoton = document.getElementById("boton-menu");
var miMenu = document.getElementById("menu-enlaces");

if (miBoton && miMenu) {
    miBoton.addEventListener("click", function() {
        miMenu.classList.toggle("active");
        if (miMenu.classList.contains("active")) {
            miBoton.innerText = "CERRAR";
        } else {
            miBoton.innerText = "MENÚ";
        }
    });
}

// ===================================================
//  FORMULARIO DE AGENDA
// ===================================================

var formularioAgenda = document.getElementById("formulario-agenda");

if (formularioAgenda) {
    formularioAgenda.addEventListener("submit", function(evento) {
        evento.preventDefault();

        var nombreUsuario = document.getElementById("ins-nombre").value.trim();
        var selectEvento = document.getElementById("ins-evento");
        var nombreEvento = selectEvento.options[selectEvento.selectedIndex].text;
        var contenedorInscripcion = document.getElementById("bloque-inscripcion");


        contenedorInscripcion.innerHTML = `
            <div class="mensaje-exito-medieval" style="background-color: rgba(197, 242, 0, 0.1); border: 1px solid #c5f200; padding: 20px; border-radius: 6px; text-align: center;">
                <h4 style="color: #c5f200; margin-top: 0; margin-bottom: 8px; font-family: 'Playfair Display', serif;">¡Registro Concedido!</h4>
                <p style="font-size: 0.85rem; color: #b3b9c4; margin: 0; line-height: 1.5;">Loor a ti, <strong>${nombreUsuario}</strong>. Tu plaza para asistir a la sesión de <em>"${nombreEvento}"</em> ha sido reservada con éxito en nuestros registros.</p>
            </div>
        `;
    });
}
