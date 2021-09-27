// imprimir un texto al revés

// Ejemplo: Botella  salida alletoB
// Ejemplo: Cuchara salida arahcuC
// Ejemplo: Ana salida Ana

// Declarar la variable donde el texto de entrada
let text = "Botella";
let output = "";

// Iterar en orden inverso el texto y almacenar cada letra en una variable
// saber el tamaño del texto
// saber como leer un caracter de la cadena

console.log(text.length);
console.log(text.charAt(0));


for (let index = text.length; index >= 0; index--) {
    output = output + text.charAt(index);
}

// Imprimir en consola la variable
console.log('Botella es ', output);
