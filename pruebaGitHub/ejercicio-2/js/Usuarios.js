let usuariosRegistrados=[
 
    {cedula:79564996,nombre:"ALEXIS",telefono:3023309501,edad:53},
    {cedula:63503191,nombre:"ARELIS",telefono:318605958,edad:47},
]


const registros=[]
let admitidos= 0
let rechazados= 0





function validarProductos(){
   
    const cedula = parseInt(document.getElementById('cedula').value)
    const nombre = document.getElementById('nombre').value
    const telefono = parseInt(document.getElementById('telefono').value)
    const edad = parseInt(document.getElementById('edad').value)
    
   
    if(!cedula || !nombre || !telefono || !edad){
        alert('no se admiten campos en blanco')
        document.getElementById('cedula').focus()
        return false
    }
   
    let usuario = usuariosRegistrados.find(user => user.cedula===cedula)
    
   if(usuario){
    //si la cedula existe muestra mensaje de alerta , limopia el formluario y coloca el focus en cedula
     alert('Cédula ya existe!!!!!')
     document.getElementById('validarUsuario').reset()
     document.getElementById('cedula').focus()
     return false
   }
    
    
         //inicializamos una variable estado como boolean
        let estado='Rechazado'
        if (edad >=18){
            estado = 'ADMITIDO'
            alert('Registro almacenado con exito')
            admitidos+=1
            document.getElementById('validarUsuario').reset()
            document.getElementById('cedula').focus()
        } else {
            alert('Registro rechazado')
            rechazados+=1
            document.getElementById('validarUsuario').reset()
            document.getElementById('cedula').focus()
        } 

        //Crea un nuevo usuario******************************
        usuario = {cedula, nombre, telefono,edad,estado}
        usuariosRegistrados.push(usuario)

        registros.push(usuario)

        actualizarTabla();
        actualizarResumen();

}


function actualizarTabla(){
  const tbody = document.getElementById('tablaRegistros').querySelector('tbody')
 
  tbody.innerHTML=''
  registros.forEach(registro =>{
    const fila= document.createElement('tr')
    fila.innerHTML = `
    <td>${registro.cedula}</td>
    <td>${registro.nombre}</td>
    <td>${registro.telefono}</td>
    <td>${registro.edad}</td>
    <td>${registro.estado}</td>`
    tbody.appendChild(fila)
  })
}


function actualizarResumen(){
   document.getElementById('admitidos').textContent=admitidos
   document.getElementById('rechazados').textContent=rechazados

}






