// Encontrar una letra en un texto

// Obtener texto
// Definir que letra a buscar
// Si se encuentra mostrar "valor encontrado", si no "el valor no se econtró".

let text = "Esto es un texto de prueba";
let findChar = 'z';

let index = 0;
let found = false;


while(index < text.length) {
  
  if (text.charAt(index) === findChar ) {
    console.log("Valor encontrado!");
    found = true;
  } 
  
  index++;
}


if (!found) {
  console.log("El valor no se encontro!");
}




