
    document.getElementById('registroForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Esta funcion evita que se envie el formulario

        // Obtener el valor de los campos 
        const tipoDocumento = document.getElementById('tipoDocumento').value;
        const numeroDocumento = document.getElementById('numeroDocumento').value;
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value.toUpperCase();
        const direccion = document.getElementById('direccion').value.toUpperCase();
        const telefono = document.getElementById('telefono').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        // Validación de campos
        if (!/^\d+$/.test(numeroDocumento)) {
            alert('El número de cédula solo debe contener números.');
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            alert('El nombre solo debe contener letras.');
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(apellidos)) {
            alert('Los apellidos solo deben contener letras.');
            return;
        }

        // Almacenamiento en localStorage
        const persona = {
            tipoDocumento: tipoDocumento,
            numeroDocumento: numeroDocumento,
            nombre: nombre,
            apellidos: apellidos,
            direccion: direccion,
            telefono: telefono,
            fechaNacimiento: fechaNacimiento
        };

        localStorage.setItem('persona', JSON.stringify(persona));
        alert('Datos guardados correctamente.');

        // Limpiar el formulario después de guardar los datos
        document.getElementById('registroForm').reset();
    });
