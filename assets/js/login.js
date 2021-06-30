console.log ("*** Logear Usuasrio")


    var correo = localStorage.getItem('cor');
        var clave = localStorage.getItem('cla');

       console.log(correo)
       console.log(clave)

formularioInicio.addEventListener('submit', (e) => {
    
        
        
      

    
    })

const devolverUsuario = (usuario) => {

    if (localStorage.getItem ('usuarios') == null) {
        console.log ("No hay usuarios guardados ")
    }else{
        if (!comprobarUsuario (usuario.cor,usuario.cla, lista)) {
            console.log ("Registrese ")
        } else {
            window.location.pathname="./Home.html";
        }
        
    }
    
   
}


const comprobarUsuario = (correo,clave, arreglo) => {
    let existe = false
    for (let item of arreglo) {
        if (correo == item.cor && clave == item.cla ) {
            existe = true
            return existe 
        }
    }
    return existe

}