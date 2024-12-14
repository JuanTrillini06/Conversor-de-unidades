document.getElementById("calcular-long").addEventListener("click",convertirLongitud);
let convertidoLong = 0;
function convertirLongitud () {
    const unidadInicial = document.getElementById("long-inicial").value;
    const unidadFinal = document.getElementById("long-final").value;
    const valor = parseFloat(document.getElementById("valor-long").value);
    let valorenMetros = valor * unitsLong[unidadInicial];
    convertidoLong = valorenMetros / unitsLong[unidadFinal];
    actualizarResultado();
}
function actualizarResultado() { 
    const resultadoLong = document.getElementById("resultado-long"); 
    resultadoLong.innerText = convertidoLong; 
}

