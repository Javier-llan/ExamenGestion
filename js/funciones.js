function limpiar(){
    document.getElementById('miFormulario').reset();
}
function areaCuadrado(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    
    if(valor1 == valor2){
      document.getElementById('resultado').innerHTML = valor1+valor2;
    }
    else{
      document.getElementById('resultado').innerHTML = "Los lados deben ser iguales";
    }
    
}

