 # Fundamentos de Programación [Sesión 6]

## Arreglos
Un arreglo es un tipo de dato que permite almacenar un conjunto de valores en una sola variable.

### Definir un arreglo

En Java

```
// opción 1 - Todas las variables definidias despúes de nobre de variable, también serán arreglos
tipo_de_dato[] nombre_de_variable;


// opción 2
tipo_de_dato nombre_de_variable[];

```

Ejemplos:

```
// Definiendo un arreglo que contendrá 3 números enteros
int edades[] = new int[3];

// Definición e inicialización de un arreglo
int edades[] = {20, 22, 25};

```


En Javascript

```

let nombre_de_variable = [];

```

Ejemplos:

```
// Definiendo un arreglo que contendrá 3 números enteros
let edades = [];

// Definición e inicialización de un arreglo
let edades = [20, 22, 25];

```


### Leer un elemento de un arreglo
Para leer un elmento en un arreglo se utiliza un índice. Ejemplos:

Java:

```
int edades[] = {20, 22, 25};

System.out.println(edades[0]);  // Muestra en consola 20

```

Javascript:

```
int edades = [20, 22, 25];

console.log(edades[0]);  // Muestra en consola 20

```

**Nota:** El primer elemento de un arreglo en Java y Javascript está en el índice 0 (cero)


### Iterar un arreglo

Java:

```
int edades[] = {20, 22, 25};

// la propiedad length devuelve el tamaño del arreglo
for (int index = 0; edades.length; index++) {
	System.out.println(edades[index]);
}

/*
Salida:
20
22
25

*/

// Otra forma de interar el arreglo:

for (int edad : edades) {
	System.out.println(edad);
}

```

Javascript:

```
int edades = [20, 22, 25];


// la propiedad length devuelve el tamaño del arreglo
for (let index = 0; edades.length; index++) {
	console.log(edades[index]);
}

/*
Salida:
20
22
25

*/

// Otra forma de interar el arreglo:

edades.forEach(function(edad){
	console.log(edad);
});

```


### Agregar un elemento a un arreglo

En Java:
Los arreglos son estáticos, esdecir una vez definidos no se puede incrementar su tamaño.

```

int edades[] = new int[3];

edades[0] = 20;
edades[1] = 22;
edades[2] = 25;

```

En Javascript:

```

let edades = [];

edades[0] = 20;
edades[1] = 22;
edades[2] = 25;

console.log(edades);

// también se utiliza la función push para agregar elementos al final del arreglo
edades.push(35);
edades.push(40);

console.log(edades);

```

### Eliminar el último elemento de un arreglo


En Javascript se utiliza la función **pop**:

```

let edades = [20, 22, 25, 35, 40, 45];

edades.pop();
console.log(edades);

edades.pop();
console.log(edades);

```



Práctica - Manejo de Inventario (Javascript)

1. Tu compañia esta lanzando 3 nuevos productos: papel de baño, botella de agua, y desinfectante. Define un arreglo para almacenarlos.
2. Resulta que hubo un error y en lugar de papel de baño debe ser toallitas de papel. Actualiza el arreglo para corregir el problema.
3. El desinfectatante se ha agotado. Eliminalo de la lista.
4. Tu compañia ha lanzado un nuevo producto el cual es: Shampoo para el cabello. Agregalo a la lista.


## Práctica

Pedra papel o tijeras

Obtener el número mayor de un conjunto de elementos
Sumar todos los elementos de un arreglo
Dado un arreglo de números calcular el cuadrado de cada elemento y almacenar los valores en otro arreglo









