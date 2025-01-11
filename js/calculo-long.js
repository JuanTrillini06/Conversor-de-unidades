document.getElementById("calcular-long").addEventListener("click",convertirLongitud);
let convertidoLong = 0;
function convertirLongitud () {
    const unidadInicial = document.getElementById("long-inicial").value;
    const unidadFinal = document.getElementById("long-final").value;
    const valor = parseFloat(document.getElementById("valor-long").value);
    let valorenMetros = valor * unitsLong[unidadInicial];
    convertidoLong = (valorenMetros / unitsLong[unidadFinal]).toPrecision(3);
    actualizarResultado();
    agregarAlHistorial("Longitud", valor, unidadInicial, convertidoLong, unidadFinal);
}
function actualizarResultado() { 
    const resultadoLong = document.getElementById("resultado-long"); 
    resultadoLong.innerText = convertidoLong;
    let notificar = (convertidoLong != 0 || NaN) ? Toastify({ text:"Calculo realizado", duration: 3000,style:{background:"linear-gradient(to right, #7DDA58, #E2EAF4)"},}).showToast() : Toastify({ text:"Calculo erroneo", duration: 3000, style:{background:"linear-gradient(to right, #E4080A, #E2EAF4)",}}).showToast()

}

