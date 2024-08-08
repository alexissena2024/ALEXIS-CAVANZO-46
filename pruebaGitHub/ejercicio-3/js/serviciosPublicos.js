
    function calcularTotal() {
        const estrato = parseInt(document.getElementById('Estrato').value);
        const consumo = parseInt(document.getElementById('consumo').value);
        let tarifa = 0;

        switch (estrato) {
            case 1:
                tarifa = 1200;
                break;
            case 2:
                tarifa = 2300;
                break;
            case 3:
                tarifa = 3200;
                break;
            default:
                document.getElementById('resultado').textContent = "Estrato Incorrecto";
                return;
        }

        let totalConsumo = consumo * tarifa;
        let recargo = 0;

        // Si el consumo es mayor a 20 m³, se aplica un recargo del 10%
        if (consumo > 20) {
            recargo = totalConsumo * 0.10;
        }

        let totalConRecargo = totalConsumo + recargo;

        // Cargo fijo de $5.800
        const cargoFijo = 5800;

        // Total a pagar (con recargo y cargo fijo)
        const totalAPagar = totalConRecargo + cargoFijo;

        // Actualizar el resultado en la página
        document.getElementById('resultado').textContent = "$" + totalAPagar.toLocaleString();

        // Llenar la tabla con los datos
        actualizarTabla(tarifa, totalConsumo, recargo, totalConRecargo, totalAPagar);
    }

    function actualizarTabla(tarifa, totalConsumo, recargo, totalConRecargo, totalAPagar) {
        const tbody = document.getElementById('tablaRegistros').querySelector('tbody');

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>$${tarifa.toLocaleString()}</td>
            <td>$${totalConsumo.toLocaleString()}</td>
            <td>$${recargo.toLocaleString()}</td>
            <td>$${totalConRecargo.toLocaleString()}</td>
            <td>$${totalAPagar.toLocaleString()}</td>
        `;
        tbody.appendChild(fila);
    }
