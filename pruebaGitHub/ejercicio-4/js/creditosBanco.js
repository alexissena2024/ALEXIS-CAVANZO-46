function calcularTotal() {
    // Obtención de valores del formulario
   // const cedula = document.querySelector('input[placeholder="Digite número de cédula"]').value;
   const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombreUsuario').value;
    const valorSolicitado = parseFloat(document.getElementById('valorSolicitado').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    const tipoCredito = document.querySelector('input[name="tipocredito"]:checked');
    
    // Validación de tipo de crédito
    if (!tipoCredito) {
        alert("Por favor, seleccione un tipo de crédito.");
        return;
    }
    
    // Obtener la tasa de interés seleccionada
    const tasaInteres = parseFloat(tipoCredito.value);
    
    // Determinar el descuento según el número de cuotas
    let descuento = 0;
    if (cuotas < 6) {
        descuento = 0.2
    } else if (cuotas < 12) {
        descuento = 0.4;
    } else if (cuotas < 24) {
        descuento = 0.4;
    } else if (cuotas >= 24) {
        descuento = 0.7;
    }

    // Calcular el valor total a pagar con el interés y descuento
    const valorConInteres= valorSolicitado +(valorSolicitado * tasaInteres /100)
    const valorConDescuento=  valorConInteres -  (valorConInteres * 0.2 /100)
    const valorPorCuota = valorConDescuento / cuotas
   
    // Mostrar el total a pagar
    document.getElementById('resultado').textContent = "$" + valorPorCuota.toFixed(2);

    // Agregar los valores a la tabla
    actualizarTabla(cedula, nombre, valorSolicitado, cuotas,valorConInteres,valorConDescuento, valorPorCuota.toFixed(2));
}

function actualizarTabla(cedula, nombre, valorSolicitado, cuotas,valorConInteres,valorConDescuento, valorPorCuota) {
    const tabla = document.getElementById('tablaRegistros').querySelector('tbody');

    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${cedula}</td>
        <td>${nombre}</td>
        <td>${valorSolicitado.toLocaleString()}</td>
        <td>${cuotas}</td>
        <td>${valorConInteres.toLocaleString()}</td>
        <td>${valorConDescuento.toLocaleString()}</td>
        <td>${valorPorCuota.toLocaleString()}</td>
    `;
    tabla.appendChild(fila);
}