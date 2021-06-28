console.log('Juego BTS ');
console.log (" Logica Juego Memoria");


const padre = document.getElementById("padre");
const btnValores = document.getElementById("btnValores");


let val = []
let pos = []

//ver qye pasa cuando hacemos click en una celda

padre.addEventListener('click', (e) => {
    console.log(e.target.id)
})

//-------------------------------------

const validar = (valor, arreglo) => {
    let existe = false
    for (let item of arreglo) {
        if (item == valor) {
            existe = true
            return existe
        }
    }
    return existe
}

const  completar = (arreglo, maximo) => {
    for (let i=0; i<= maximo; i++) {
        if (!validar(i,arreglo))
              arreglo.push(i)
    }
}



const cargar = (arreglo, maximo) => {
    for (let i = 0 ; i<= maximo; i++) {
        var valor = Math.round(Math.random() * maximo)
        if (!validar(valor,arreglo))
              arreglo.push(valor)
    }  

  completar(arreglo, maximo)
}

const imprimir = (arreglo) => {
    for (let item of arreglo ) {
        console.log ("[ "+ item + " ]")
    }
}


const cargarImagenes = () => {

    for (let i = 0 ; i<= 7; i++) {
        let A = i * 2;
        let B = A+1;



        let cajaImg1 = "caja"+pos[A]
        let cajaImg2 = "caja"+pos[B]

      

        let html = "<img class='tamanoPic img' src='./assets/img/BTS_" + val[i] + ".png'>";

        document.getElementById(cajaImg1).innerHTML = html
        document.getElementById(cajaImg2).innerHTML = html
     
    }

}

//-------------------------------------



btnValores.addEventListener ('click', () => {
    console.log ("Generar valores aleatorios")
   
    val = []
    pos = []

    cargar(val,7);


   
    cargar(pos,15);
    console.log ("Valores")
    imprimir(val)
    console.log ("Posiciones")
    imprimir(pos)
   
   cargarImagenes();

})

//------------------------------------------------------------