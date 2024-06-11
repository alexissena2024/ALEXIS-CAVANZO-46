const letrero="El resultado es:"


function limpiar(){
document.getElementById('formulario').reset()
document.getElementById('resultado').innerHTML="  "

}

function sumar(){
     var x=parseInt(document.getElementById('valor1').value)
     var y=parseInt(document.getElementById('valor2').value)
     document.getElementById('resultado').innerHTML=letrero + (x+y) 
}

function restar(){
    var x=parseInt(document.getElementById('valor1').value)
    var y=parseInt(document.getElementById('valor2').value)
    document.getElementById('resultado').innerHTML=letrero + (x-y) 
}


function multiplicar(){
    var x=parseInt(document.getElementById('valor1').value)
    var y=parseInt(document.getElementById('valor2').value)
    document.getElementById('resultado').innerHTML=letrero + (x*y) 
}

function dividir(){
    var x=parseInt(document.getElementById('valor1').value)
    var y=parseInt(document.getElementById('valor2').value)
    document.getElementById('resultado').innerHTML=letrero + (x/y) 
}