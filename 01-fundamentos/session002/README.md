# Fundamentos de Programación [Sesión 2]

## Conceptos

### Algoritmo
Es un conjunto de instrucciones ordenadas y finitas que permitem solucionar un problema o realizar una tarea.


### Programa
Un programa informático o programa de computadora es una secuencia de instrucciones, escritas para realizar una tarea específica en un computador.

> En la programación regular puede verse como:

> ENTRADAS (datos) + REGLAS Y LÓGICA = RESULTADO


### Diagrama de Flujo
Es la representación gráfica de un algoritmo o proceso.

Herramientas en línea:
[Lucidchart](https://www.lucidchart.com/pages/examples/flowchart-maker)


### Lenguaje de Programación
se conoce como lenguaje de programación a un programa destinado a la construcción de otros programas informáticos. Su nombre se debe a que comprende un lenguaje formal que está diseñado para organizar algoritmos y procesos lógicos que serán luego llevados a cabo por un ordenador o sistema informático, permitiendo controlar así su comportamiento físico, lógico y su comunicación con el usuario humano.


Los 5 lenguajes más populares en 2021 son:

* Python
* Javascript
* Java
* C#
* C/C++

#### Tipos de lenguajes

|Tipo|Descripción|
|---|---|
| Lenguajes de bajo nivel | Están diseñados para un hardware específico y que por lo tanto no pueden migrar o exportarse a otros computadores. |
| Lenguajes de alto nivel | Aaspiran a ser un lenguaje más universal, por lo que pueden emplearse indistintamente de la arquitectura del hardware, es decir, en diversos tipos de sistemas. Los hay de propósito general y de propósito específico.|

Otra forma de clasificación a menudo es la siguiente:

|Tipo|Descripción|
|---|---|
| Lenguajes imperativos. | Estos lenguajes programan mediante órdenes condicionales y un bloque de comandos al que retornan una vez llevada a cabo la función.|
| Lenguajes funcionales. | También llamados procedimentales, estos lenguajes programan mediante funciones que son invocadas conforme a la entrada recibida, que a su vez son resultado de otras funciones |


[Fuente](https://concepto.de/lenguaje-de-programacion/#ixzz70PnPtDRn)



### Lenguaje Compilado vs Lenguaje Interpretado

Los **lenguajes compilados** son aquellos lenguajes de alto nivel que como su nombre lo sugiere, requieren de un compilador (programa que traduce un lenguaje de alto nivel en código máquina o lenguaje máquina) para traducirlo y crear la parte ejecutable.

> Característica principal
>
> Son más rápidos en ejecución

Pueden verse como:

> CÓDIGO FUENTE -> COMPILADOR -> CÓDIGO EJECUTABLE

Ejemplos: C/C++, Java, C#

Los **lenguajes interpretados** son aquellos lenguajes de programación también de alto nivel en donde el código fuente debe ser traducido a un lenguaje que la máquina entienda y pueda realizar, no crean un archivo externo.

> Característica principal
>
> Son más portables entre diferentes tipos de hardware


Pueden verse como:

> CÓDIGO FUENTE -> INTERPRETE

Ejemplos: Python, Javascript, Ruby


### Código Fuente
El código fuente es el archivo o archivos con las instrucciones necesarias, realizadas en un lenguaje de programación (legibles por un ser humano), que son utilizadas para ser compiladas o interpretadas posteriormente un programa o programas.

### Código Objeto
Es código que resulta de la compilación del código fuente. Puede ser en lenguaje máquina o bytecode

### Depuración (Debug)
La depuración de programas es el proceso de identificar y corregir errores de programación. En inglés se conoce como debugging, porque se asemeja a la eliminación de bichos, manera en que se conoce informalmente a los errores de programación

[Fuente](https://es.wikipedia.org/wiki/Depuraci%C3%B3n_de_programas)

### Entorno de desarrollo Integrado (IDE)
Un entorno de desarrollo Integrado proporciona un editor de texto y un conjunto de herramientas (resaltador de código, asistencia inteligente, detección de errores de sintaxis, etc.) a los programadores para el desarrollo de Software.

> Hay IDEs que soporta multiples lenguajes de programación
> Algunos requieren el comprar una licencia para poder usarlos

Ejemplos de IDEs por lenguaje de programación:

| Lenguaje | IDEs |
|---|----|
| Python | Visual Studio Code, Pycharm, Sublime, VIM, etc.|
| Javascript | Visual Studio Code, Sublime, Atom, etc. |
| Java| Eclipse, IntelliJ, STS, etc. |
| C/C++| Eclipse, Ms Visual Studio, Visual Studio Code, |


### Herramientas de Construcción
Permite gestionar las dependencias (librerias), la compilación, empaquetamiento y distribución de una applicación de software.

Ejemplos: npm, maven, gradle.

**Nota**: Hacer estas tareas de forma manual para proyectos medianos o grandes es propenso a erores y muy complejo de manejar.

### Sistema de Control de Versións (CMS)
os sistemas de control de versiones son herramientas de software que ayudan a los equipos de software a gestionar los cambios en el código fuente a lo largo del tiempo.

Ejemplos: Git, Subversion, Mercurial, etc.

### Control de la Calidad de Código
Los sistemas de control de versiones son herramientas de software que ayudan a los equipos de software a gestionar los cambios en el código fuente a lo largo del tiempo. A medida que los entornos de desarrollo se aceleran, los sistemas de control de versiones ayudan a los equipos de software a trabajar de forma más rápida e inteligente.

### Pruebas Unitarias
Las pruebas unitarias o unit testing son una forma de comprobar que un fragmento de código funciona correctamente.

[Fuente](https://trycore.co/transformacion-digital/tipos-de-pruebas-funcionales/)


