// contar las vocales en una cadena
let texto = "Hola";

//declarar variables para llevar el contador de las a,e,i,o,u

let a = 0; 
let e = 0;
let i = 0;
let o = 0;
let u = 0;

// declar un indice para recorrer el texto
let index = 0;


do {
  
  console.log(texto.charAt(index))

  // condicion para ver si letra es vocal y sumar a sus respectivos contadores
  if (texto.charAt(index) == 'a') {
    ++a;
  }
  
  if (texto.charAt(index) == 'e') {
    e++;
  }

  if (texto.charAt(index) == 'i') {
    i++;
  }
  
  if (texto.charAt(index) == 'o') {
    o++;
  }

  if (texto.charAt(index) == 'u') {
    u++;
  }
  
  index++;
  
} while(index < texto.length);


// Imprimir el contador de cada letra

console.log("a= " + a);
console.log("e= " + e);
console.log("i= " + i);
console.log("o= " + o);
console.log("u= " + u);

