let Productos=[
    {producto:"Televisor",precio:570000},
    {producto:"Nevera",precio:1000000},
    {producto:"Lavadora",precio:680000}
]

const selectProductos= document.getElementById('selectProductos')
// Rellenar el select con los productos
Productos.forEach(elemento => {
    let option = document.createElement("option")
    option.textContent = elemento.producto
    selectProductos.appendChild(option)
});


function agregarProducto() {
const selectProductos = document.getElementById("selectProductos")
const precio = parseFloat(document.getElementById("precio").value)
const descuento = parseFloat(document.getElementById("descuento").value)
const productoSeleccionado = selectProductos.options[selectProductos.selectedIndex].text
const descue = (precio * descuento) / 100
const total=precio - descue

const tablaProductos = document.getElementById("tablaProductos")
const fila = tablaProductos.insertRow()

fila.innerHTML = `
    <td>${productoSeleccionado}</td>
    <td>${precio.toFixed(2)}</td>
    <td>${descuento.toFixed(2)}</td>
    <td>${total.toFixed(2)}</td>
    <td><button class="btn btn-danger" onclick="eliminarProducto(this)">Eliminar</button></td>
`;
}

function eliminarProducto(btn) {
const fila = btn.parentNode.parentNode
fila.parentNode.removeChild(fila)
calcularTotal()
}

function calcularTotal() {
let total = 0;
//seleccionamos toda la tabla y toda la FILA  document.querySelectorAll("#tablaProductos tr")
const filas = document.querySelectorAll("#tablaProductos tr")
//Iteramos sobre la fila
filas.forEach(fila => {
    //con la variable fila seleccionamos la columna 3 que dice TOTAL, y le pasamos el contenido con texgtConten
    const totalProducto = parseFloat(fila.cells[3].textContent)

    total += totalProducto
});

document.getElementById("total").textContent = `Total de Venta: $${total.toFixed(2)}`
}


function agregarItemsalSelector() {
    const nuevoProducto = prompt("Ingrese el nombre del nuevo producto:");
    const nuevoPrecio = parseFloat(prompt("Ingrese el precio del nuevo producto:"));

    if (nuevoProducto && !isNaN(nuevoPrecio)) {
        Productos.push({producto: nuevoProducto, precio: nuevoPrecio});

        let option = document.createElement("option");
        option.textContent = nuevoProducto;
        selectProductos.appendChild(option);
    } else {
        alert("Datos inválidos. Por favor, intente de nuevo.");
    }
}