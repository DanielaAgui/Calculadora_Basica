function sumar(){
    const formulario = document.getElementById("formulario");
    let operandoA = formulario["operandoA"];
    let operandoB = formulario["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)){
        resultado = "Ingrese números"
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function restar(){
    const formulario = document.getElementById("formulario");
    let operandoA = formulario["operandoA"];
    let operandoB = formulario["operandoB"];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if (isNaN(resultado)){
        resultado = "Ingrese números"
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}
function multiplicar(){
    const formulario = document.getElementById("formulario");
    let operandoA = formulario["operandoA"];
    let operandoB = formulario["operandoB"];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if (isNaN(resultado)){
        resultado = "Ingrese números"
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}
function dividir(){
    const formulario = document.getElementById("formulario");
    let operandoA = formulario["operandoA"];
    let operandoB = formulario["operandoB"];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if (isNaN(resultado)){
        resultado = "Ingrese números"
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}