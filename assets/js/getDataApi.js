console.log("Juego Minions");
//const url ="https://pokeapi.co/api/v2/pokemon";

/*Variables*/
let iconos = []
let selecciones = []

generarTablero()
/*Funcion para cargar los iconos*/
function cargarIconos(){
    /*Cargar imagenes - Tamaño*/
	iconos = [
	`<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/Edith-despicable-me-2-icon_43744.png" width="80%">`,
	`<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/Dancing-minion-icon_43757.png" width="80%">`,
	`<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/Minion_icon_43768.png" width="80%">`,
	`<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/despicable-me-2-Minion-icon-6_43766.png" width="80%">`,
	`<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/despicable-me-2-Minion-icon-3_43770.png" width="80%">`,
	`<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/Evil-Minion-Icon-3_43745.png" width="80%">`,
	`<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/despicable-me-2-Minion-icon-1_43756.png" width="80%">`,
	`<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/Margo-dispicable-me-2-icon_43758.png" width="80%">`,
    `<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/despicable-me-2-Minion-icon-8_43769.png" width="80%">`,
    `<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/despicable-me-2-Minion-icon-2_43755.png" width="80%">`,
    `<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/gru-icon_43746.png" width="80%">`,
    `<img src="https://cdn.icon-icons.com/icons2/458/PNG/128/happy-agnes-icon_43743.png" width="80%">`,
	]
}

/*Funcion para generar el tablero*/
function generarTablero() {
    /*Traemos la funcion de cargar los iconos*/
            cargarIconos()
            selecciones = []
            /*Obtener el elemento representativo del html*/
            let tablero = document.getElementById("tablero")
            /*Declarar un arreglo para las targetas - Desordenarlas*/
            let tarjetas = []
            /*6x4 = 24 elementos*/
            /* 0 a 23 = tiene 24 iteraciones*/
            for (let i = 0; i < 24; i++) {
                /*Pasar el indice (i) de cada tarjeta*/
                /*Concatenar iconos {i}*/
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                            <img src="https://cdn.icon-icons.com/icons2/458/PNG/128/Shy-Minion-icon_43752.png" width="70%">
                        </div>
                    </div>
                </div>        
                `)
                //Mostrar 2 De La Misma Figura
                /*(0) es la posicion, la primera*/
                /*(1) la cantidad de elementos que se van a ingresar a partir de la posicion*/
                if (i % 2 == 1) {
                    iconos.splice(0, 1)
                }
            }
            //Cartas De Forma Aleatoria En El tablero
            tarjetas.sort(() => Math.random() - 0.5)
            tablero.innerHTML = tarjetas.join(" ")
        }

        function seleccionarTarjeta(i) {
            /*Seleccionar tarjeta con el indice (i) que es la iteracion*/
            let tarjeta = document.getElementById("tarjeta" + i)
            /*Si su transformacion es direrente a 180 - Rotar la tarjeta*/
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)"
                /*Conocer el indice de la targeta seleccionada*/
                selecciones.push(i)
            }
            /*Si la cantidad de elementos seleccionados son dos*/
            if (selecciones.length == 2) {
                /*deseleccionar los elentos*/
                deseleccionar(selecciones)
                /*Arreglo vacio*/
                selecciones = []
            }
        }

        function deseleccionar(selecciones) {
            /*Tener efecto despues - demorarse 1 seg*/
            setTimeout(() => {
                /*Obtener las tarjetas por medio del indice*/
                let trasera1 = document.getElementById("trasera" + selecciones[0])
                let trasera2 = document.getElementById("trasera" + selecciones[1])
                /*Si la cara trasera 1 y 2 son diferentes se voltean a 0 grados*/
                if (trasera1.innerHTML != trasera2.innerHTML) {
                    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                    tarjeta1.style.transform = "rotateY(0deg)"
                    tarjeta2.style.transform = "rotateY(0deg)"
                }else{
                    /*Si si coinciden, cambiar el color de las tarjetas*/
                    trasera1.style.background = "plum"
                    trasera2.style.background = "plum"
                }
            }, 1000);
        }

