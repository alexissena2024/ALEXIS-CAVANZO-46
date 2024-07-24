
        document.getElementById('datosCiudades').addEventListener('submit', function(event) {
            event.preventDefault(); // Esta funcion evita que se envie el formulario

            // Obtener el valor del input
            const nombreCiudad = document.getElementById('nombreCiudad').value.toUpperCase();

            // Crear un objeto con los datos
            const ciudad = {
                nombre: nombreCiudad
            };

            // Guardar el objeto en Local Storage
            localStorage.setItem('ciudad', JSON.stringify(ciudad));

            // Confirmación de que los datos fueron guardados
            alert('Datos guardados en Local Storage');

            // Limpiar el formulario
            document.getElementById('datosCiudades').reset();
        });
    