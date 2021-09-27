// converir cadena en mayusculas

let texto = "Vamos a convertir este texto a mayúsculas";

let resultado = "";

let index = 0;

do {
  
  resultado += texto.charAt(index).toUpperCase();
  
  index++;
  
} while(index < texto.length);


console.log(resultado);

