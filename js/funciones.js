function limpiar(){
    document.getElementById('miFormulario').reset();
}
function sumar(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    

    document.getElementById('resultado').innerHTML = valor1+valor2;
    
}

function sumarPrimos(){
    
    var numero1=parseInt(document.getElementById('numero1').value);
    var numero2=parseInt(document.getElementById('numero2').value);
    
            for (var i = 2; i < numero1; i++) {
          
              if (numero1 % i === 0) {
                return console.log("no se puede sumar el numero 1");
              }
          
            }
    
            for (var i = 2; i < numero2; i++) {
          
                if (numero2 % i === 0) {
                  return console.log("no se puede sumar el numero 2");
                }
            
              }
          document.getElementById('resultado').innerHTML=numero1+numero2;
           
          
           
    }