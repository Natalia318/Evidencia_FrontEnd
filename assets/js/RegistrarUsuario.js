console.log ("*** Registrar Usuasrio")


const formularioInicio = document.getElementById("formularioRegistro")
let lista = []


formularioInicio.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombreIn = document.getElementById("nombreIn");
    const correoIn = document.getElementById("correoIn");
    const claveIn = document.getElementById("claveIn");

    const nuevoUsuario = {
      
      nom: nombreIn.value,
      cor: correoIn.value,
      cla: claveIn.value,
    }

   guardarUsuario(nuevoUsuario)

})

const guardarUsuario = (usuario) => {

    if (localStorage.getItem ('usuarios') == null) {
        lista.push(usuario)
        const usuariosString = JSON.stringify(lista)
        localStorage.setItem ('usuarios' ,usuariosString )
    } else {
        lista = JSON.parse(localStorage.getItem('usuarios'))

        if (!comprobarUsuario (usuario.cor, lista)) {
            lista.push(usuario)
            const usuariosString = JSON.stringify(lista)
            localStorage.setItem ('usuarios' ,usuariosString )
            console.log ("usuario guardado con exito ")
        } else {
            console.log ("usuario ya exise ")
        }
        
    }
    
   
}

const comprobarUsuario = (correo, arreglo) => {
    let existe = false
    for (let item of arreglo) {
        if (correo == item.cor) {
            existe = true
            return existe 
        }
    }
    return existe

}