function limpiar(){
    document.getElementById('miFormulario').reset();
}
function sumar(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    

    document.getElementById('resultado').innerHTML = valor1+valor2;
    
}

