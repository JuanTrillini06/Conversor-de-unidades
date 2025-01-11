const historial =[];

function agregarAlHistorial(tipo, valorInicial, unidadInicial, valorFinal, unidadFinal) {
    const nuevoRegistro = {
        tipo,
        valorInicial,
        unidadInicial,
        valorFinal,
        unidadFinal
    };

    historial.unshift(nuevoRegistro);
    if (historial.length > 5) {
        historial.pop();
    }


    sessionStorage.setItem("historial", JSON.stringify(historial));

    actualizarHistorial();
}

function actualizarHistorial(){
    const aside = document.getElementById("historial");
    aside.innerHTML = "<h4>HISTORIAL</h4>";

    const historialGuardado = JSON.parse(sessionStorage.getItem("historial")) || [];

    for (let i = 0; i < historialGuardado.length; i++) {
        let plantillaHistorial = document.createElement("div");

        plantillaHistorial.innerHTML = `
            <h3>${historialGuardado[i].tipo}</h3>
            <p>${historialGuardado[i].unidadInicial}: ${historialGuardado[i].valorInicial}</p>
            <p>${historialGuardado[i].unidadFinal}: ${historialGuardado[i].valorFinal}</p>
            <br>`;
        
        aside.appendChild(plantillaHistorial);   
    }
}

window.onload = function() { actualizarHistorial(); };