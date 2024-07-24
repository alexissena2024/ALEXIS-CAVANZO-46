document.getElementById('Cargos').addEventListener('submit', function(event) {
    event.preventDefault(); // Esta función evita que se envíe el formulario

    // Obtener el valor del input y convertirlo a mayúsculas
    const nombreCargo = document.getElementById('nombreCargo').value.toUpperCase();

    // Crear un objeto con los datos
    const cargo = {
        nombre: nombreCargo
    };

    // Guardar el objeto en Local Storage
    localStorage.setItem('cargo', JSON.stringify(cargo));

    // Confirmación de que los datos fueron guardados
    alert('Datos guardados en Local Storage');

    // Limpiar el formulario
    document.getElementById('Cargos').reset();
});