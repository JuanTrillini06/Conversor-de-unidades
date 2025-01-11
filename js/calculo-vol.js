document.getElementById("calcular-vol").addEventListener("click",convertirVolumen);

let convertidoVol = 0;

function convertirVolumen(){

    const unidadInicial = document.getElementById("vol-inicial").value;
    const unidadFinal = document.getElementById("vol-final").value;
    const valor = document.getElementById("valor-vol").value;

    let valorenLitros = valor * unitsVol[unidadFinal];
    
    convertidoVol = (valorenLitros / unitsVol[unidadInicial]).toPrecision(3);

    actualizarResultadoVol();
    agregarAlHistorial("Volumen", valor, unidadInicial, convertidoVol, unidadFinal);
}

function actualizarResultadoVol() { 
    const resultadoVol = document.getElementById("resultado-vol"); 
    resultadoVol.innerText = convertidoVol;

    let notificar = (convertidoVol != 0 || NaN) ? Toastify({ text:"Calculo realizado", duration: 3000,style:{background:"linear-gradient(to right, #42E700, #7DDA58)"},}).showToast() : Toastify({ text:"Calculo erroneo", duration: 3000, style:{background:"linear-gradient(to right, #E4080A, #E56C6E)",}}).showToast()
}