//guardar_localstogare()

obtener_localstorage()
function obtener_localstorage(){

    if(localStorage.getItem("guardar")){

        let nombre=localStorage.getItem("nombre")
        let persona=JSON.parse(localStorage.getItem("guardar"))
        console.log(nombre)
       console.log(persona)
    }else{
        console.log("No hay elelentos gurdados")
    }
   

}

function guardar_localstogare(){
    

let persona = {
    nombre:"fernando",
    edad: 31,
    correo:"acg_200@yahoo.es",
    cords:{
        lat:10,
        lng:-10
    }
};

const nombre = "LILIANA"
localStorage.setItem("nombre",nombre)
localStorage.setItem("guardar",JSON.stringify(persona))
}

