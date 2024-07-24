document.getElementById('datosDeporte').addEventListener('submit', function(event) {
    event.preventDefault(); // Esta funcion evita que se envie el formulario

    // Obtener el valor del input
    const nombreDeporte = document.getElementById('nombreDeporte').value.toUpperCase();

    // Crear un objeto con los datos
    const deporte = {
        nombre: nombreDeporte
    };

    // Guardar el objeto en Local Storage
    localStorage.setItem('deporte', JSON.stringify(deporte));

    // Confirmación de que los datos fueron guardados
    alert('Datos guardados en Local Storage');

    // Limpiar el formulario
    document.getElementById('datosDeporte').reset();
});