console.log ("*** Registrar Usuasrio")


const formularioRegistro = document.getElementById("formularioRegistro")
let lista = []


formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuarioIn = document.getElementById("usuarioIn");
    const nombreIn = document.getElementById("nombreIn");
    const correoIn = document.getElementById("correoIn");

    const nuevoUsuario = {
      usu: usuarioIn.value,
      nom: nombreIn.value,
      cor: correoIn.value,
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