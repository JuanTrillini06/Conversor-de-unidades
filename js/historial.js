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
    actualizarHistorial();
}

function actualizarHistorial(){
        let plantillaHistorial = document.createElement("div");
        const aside = document.getElementById("historial")
        plantillaHistorial.innerHTML = `<h3>${historial[historial.length-historial.length].tipo}</h3>
                                        <p>${historial[historial.length-historial.length].unidadInicial}: ${historial[historial.length-historial.length].valorInicial}</p>
                                        <p>${historial[historial.length-historial.length].unidadFinal}: ${historial[historial.length-historial.length].valorFinal}</p>
                                        <br>`;
                            
        aside.appendChild(plantillaHistorial);
}
