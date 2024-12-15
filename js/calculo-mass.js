document.getElementById("calcular-mass").addEventListener("click",convertirMasa);
let convertidoMass = 0;

function convertirMasa(){
    const unidadInicial = document.getElementById("mass-inicial").value;
    const unidadFinal = document.getElementById("mass-final").value;
    const valor = parseFloat(document.getElementById("valor-mass").value);
    let valorenKilogramos = valor * unitsMass[unidadFinal];
    convertidoMass = (valorenKilogramos / unitsMass[unidadInicial]).toPrecision(3);
    actualizarResultadoMass();
    agregarAlHistorial("Masa", valor, unidadInicial, convertidoMass, unidadFinal);
}

function actualizarResultadoMass() { 
    const resultadoMass = document.getElementById("resultado-mass"); 
    resultadoMass.innerText = convertidoMass; 
}