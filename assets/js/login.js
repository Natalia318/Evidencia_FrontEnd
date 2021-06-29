console.log ("*** Logear Usuasrio")



function loegear() {
    e.preventDefault();
    var correoIn = localStorage.getItem('')
    var claveIn = localStorage.getItem('')

    const correoIn = document.getElementById("correoIn");
    const claveIn = document.getElementById("claveIn");

    
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