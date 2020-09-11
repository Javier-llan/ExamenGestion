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
  
function areaRectangulo(){
    
  var valor1 = parseFloat(document.getElementById('numero1').value);
  var valor2 = parseFloat(document.getElementById('numero2').value);
  

  document.getElementById('resultadoResta').innerHTML = valor1*valor2;
           
    }

    function areaTriangulo(){
    
      var valor1 = parseFloat(document.getElementById('base').value);
      var valor2 = parseFloat(document.getElementById('altura').value);
      
    
      document.getElementById('resultadoTriangulo').innerHTML = (valor1*valor2)/2;
               
        }



