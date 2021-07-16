# Fundamentos de Programación [Sesión 3]

## Constantes
Son valores que nunca cambian a lo largo de la vida de un programa.

Ejemplo Java:
```
// Se define la constante PI de tipo entero usando la palabra reservada: final

final int PI = 3.14

```

Ejemplo Javascript:
```
// Se define la constante PI usando la palabra reservada: const

const PI = 3.14

```

## Variables
Una variable representa el valor de un dato y se almacena en la memoría RAM (memoria de acceso aleatorio/random access memory) de la computadora.

### Declaración de Variables
Para lenguajes de programación estrictamente tipados (tipado fuerte), como C/C++ y Java, una variable debe definirse antes de usarse de la siguiente forma:

```
TIPO NOMBRE_DE_LA_VARIABLE
```

> Esto evita que a lo largo del programa se asigne un tipo de dato que no corresponde, ya que de ser así, el programa no compilara.

Ejemplo Java:

```
// La sisguiente línea declara una variable llamada resultado de tipo entero y la inicializa en cero
int resultado = 0;
```


Para lenguajes no tipados (tipado débil), como Javascript, la definición de una variable es de la siguiente manera:

```
PALABRA_RESERVADA NOMBRE_DE_LA_VARIABLE
```
Ejemplo Javascript:

```
// La sisguiente línea declara una variable llamada resultado de tipo entero y la inicializa en cero
var resultado = 0;

// La sisguiente línea declara una variable llamada suma de tipo entero y la inicializa en cero
let suma = 0;


```


### Sensibilidad a Letras Mayúsculas o Minúsculas (Case Sensitive and Case Unsensitive)
Es una característica de los lenguajes de programación para hacer distinción entre palabras escritas en mayúsculas vs palabras escritas en minúsculas.

```
Ejemplo:
Aunque las siguientes palabras significan para nosotros lo mismo, para un lenguaje de programación son diferentes y esto ocasiona errores muy comunes a la hora de programar.

Nombre, nombre, NOMBRE, NoMbre, etc.
```



### Definir el Nombre de una Variable
El nombrado de una variable y otros elementos en un programa ayudan a mejorar la legibilidad del código y hacen más sencillo su mantenimiento.

Objetivos que deben perseguirse en el nombrado:

* Usar nombres que se puedan buscar.
* Usar nombres que se puedan pronunciar.
* Evitar nombres que sean ambigüos.

Se logra esto con las recomendaciones siguientes:
* Seguir los estándares del lenguaje.
* Limitar el ámbito de una variable.
* En algunos casos, crear variables y evitar reusarlas.
* Eliminar números mágicos (son valores puestos en código que solo tienen sentido cuando se escribe por primera vez el program, pero después se olvida su significado).
* Usar nombres que indiquen el que hace y no el como lo hace.
* Definir cuando usar nombres largos vs cortos


#### Notaciones Comunes de Nombrado
Las siguientes notaciones permiten definir nombres que usan varias palabras de una manera más adecuada.

El tipo de notación a usar depende de varios factores, como el lenguaje de programación que utilizas, el estándar que usas o tu preferencia personal, siendo lo más importante que seas consistente con tu elección.

##### Camel Case
Está notación es de las más extendidas y es usada genralmente en lenguajes como Java y Javascript. Consite en lo siguiente:

* No hay símbolo de separación entre palabras.
* La primera letra de cada palabra va en mayúsculas, las demás  letras en minúsculas.

Ejemplo:

|Conjunto de palabras|Usando la notación Camel Case|
|---|---|
| contar palabras | contarPalabras |
| aumentar nivel dificultad | aumentarNivelDificultad |


##### Pascal Case
Estas son las características de la notación Pascal Case:

* No hay símbolo de separación entre palabras.
* La primera letra de cada palabra va en mayúsculas, sin excepción.

|Conjunto de palabras|Usando la notación Pascal Case|
|---|---|
| contar palabras | ContarPalabras |
| aumentar nivel dificultad | AumentarNivelDificultad |

> **Nota:** Esta notación se usa comunmente en lenguajes como C#

##### Snake Case
En la notación Snake Case se siguen las reglas:

* Se combinan las palabras usando guión bajo _ como nexo.
* Pueden estar todas las letras en minúscula (se usa en campos de base de datos, php, WordPress) o en mayúscula (se usa comunmente en PHP, Javascript, Java).

|Conjunto de palabras|Usando la notación Snake Case|
|---|---|
| contar palabras | contar_palabras |
| aumentar nivel dificultad | aumentar_nivel_dificultad |
| contar palabras | CONTAR_PALABRAS |
| aumentar nivel dificultad | AUMENTAR_NIVEL_DIFICULTAD |


##### Kebab Case
Kebab case define las siguientes reglas:

* Se combinan las palabras usando guión bajo - como nexo.
* Todas las palabras se escriben en minúsculas.

|Conjunto de palabras|Usando la notación Kebab Case|
|---|---|
| contar palabras | contar-palabras |
| aumentar nivel dificultad | aumentar-nivel-dificultad |

> Está notación se usa en URLs (Unified Resource Location)



[Más información sobre tipos de notación](https://www.neoguias.com/tipos-notacion-nombres/)

## Palabras Reservadas (keywords)
Son palabras exclusivas del lenguaje de programación y no pueden ser usadas para nombrar variables u otros elementos (clases, funciones, etc.) dentro de un programa.

Ejemplos:

* [Palabras Reservadas Javascript](https://www.todojs.com/palabras-reservadas-js/)
* [Palabras Reservadas Java](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html)

## Práctica (Javascript)

En el navegador abrir el modo de desarrollador con la tecla de función F12, elige la pestaña Console y ejecuta el siguiente código línea a línea:

```
var dato1 = 20;
var dato2 = 40;
var nombre = "Este es mi primer programa!"
var suma = dato1 + dato2;

console.log(suma);

alert(nombre);

```

> La función console.log() se utiliza para mostrar los valores de las variables en la consola
> La función alert() permite mostrar un cuadro de alerta en el navegador

**Nota:** También se puede usar el siguiente servicio [https://jsbin.com/](https://jsbin.com/?html,output) para realizar la práctica anterior.

## Práctica (Java)
En el navegador abre la siguiente liga: [https://tryjshell.org/](https://tryjshell.org/) y ejecuta el siguiente código línea a línea.

```
int dato1 = 20;

in dato2 = 40;

String nombre = "Este es mi primer programa!"

int suma = dato1 + dato2;

System.out.println(suma);

System.out.println(nombre);

```


** Notas: **
*  A diferencia de Javascript en Java se debe especificar el tipo de dato que contendrá la variable.
*  Además, para mostrar los datos se usa la función: System.out.println
* No existe la función alert() para mostrar una ventana de alerta en el navegador.
