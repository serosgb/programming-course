/* 
Pedra papel o tijeras
*/

// el jugador elija: piedra, papel o tijeras
let jugador = "";

function selecion(opcion) {
	console.log(opcion);

	jugador = opcion;
	
}

function jugar() {
	
	if (jugador === "") {
		alert("Seleccione una imagen y después pulse el botón jugar.");
	} else {

		// definir un arreglo con los valores: piedra, papel y tijeras
		let elementos = ["piedra", "papel", "tijeras"];

		// computadora selecciona un elemento del arreglo y lo almacena en una variable
		let opcion = Math.floor(Math.random() * elementos.length);

		let computadora = elementos[opcion];

		console.log("comptadora: ", computadora);




		// Definir variable para almacenar al ganador
		let ganador = "";

		console.log("jugador: ", jugador);
		// comparar para ver quien gana

		//  piedra le gana a tijeras
		if (computadora == "piedra" && jugador == "tijeras") {
		  ganador = "computadora";
		}

		if (computadora == "tijeras" && jugador == "piedra") {
		  ganador = "jugador";
		}

		//  tijeras le gana a papel
		if (computadora == "tijeras" && jugador == "papel") {
		  ganador = "computadora";
		}

		if (computadora == "papel" && jugador == "tijeras") {
		  ganador = "jugador";
		}


		//  papel le gana a piedra
		if (computadora == "papel" && jugador == "piedra") {
		  ganador = "computadora";
		}

		if (computadora == "piedra" && jugador == "papel") {
		  ganador = "jugador";
		}


		if (computadora == jugador) {
			alert('Fue un empate');
		} else {
			console.log("Ganador: ", ganador);			
			alert('Ganador ' + ganador);			
		}
		

		// imprimir el ganador

		jugador = "";
		ganador = "";
	}
}


