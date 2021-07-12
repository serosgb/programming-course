# Fundamentos de Programación

## Sistema Operativo
Un sistema operativo (SO o, frecuentemente, OS —del inglés operating system—) es el software principal o conjunto de programas de un sistema informático que gestiona los recursos de hardware y provee servicios a los programas de aplicación de software, ejecutándose en modo privilegiado respecto de los restantes. 1​

[Referencia](https://es.wikipedia.org/wiki/Sistema_operativo)

### Proceso
Un proceso, en informática, puede entenderse informalmente como un programa en ejecución. Formalmente un proceso es "Una unidad de actividad que se caracteriza por la ejecución de una secuencia de instrucciones, un estado actual, y un conjunto de recursos del sistema asociados". 1​

Para entender mejor lo que es un proceso y la diferencia entre un programa y un proceso, A. S. Tanenbaum propone la analogía "Un científico computacional con mente culinaria hornea un pastel de cumpleaños para su hija; tiene la receta para un pastel de cumpleaños y una cocina bien equipada con todos los ingredientes necesarios, harina, huevo, azúcar, leche, etc." Situando cada parte de la analogía se puede decir que la receta representa el programa (el algoritmo), el científico computacional es el procesador y los ingredientes son las entradas del programa. El proceso es la actividad que consiste en que el científico computacional vaya leyendo la receta, obteniendo los ingredientes y horneando el pastel.

[Referencia](https://es.wikipedia.org/wiki/Proceso_(inform%C3%A1tica))

### Consola o Terminal del Sistema Operativo
La consola o terminal del sisema permite interactuar a travpes de comandos u ordenes con el sistema operativo.

Para abrir la consola o terminal del sistema se puede hacer lo siguiente:

| Windows |
|---------|
|Abrir el explorador de archivos en la carpeta deseada y en la barra de direcciones escribir **CMD** seguido de la tecla **ENTER**|
|Desde el botón inicio, escribir el **CMD**, luego hacer clic en la **opción CMD** |
|Pulsar **tecla de Windows y tecla R**, escribir **CMD** seguido de la tecla **ENTER**|

| Linux |
|---------|
|Todas las distribuciones cuentan con la aplicación Terminal y generalmente está visible en el escritorio o en el panel de búsqueda|
|Pulsando las teclas ALT y alguna de las teclas de función(F1, F2, ...., F7)|



### Comandos básicos
Un comando es una instrucción o una orden que el usuario proporciona a un sistema informático desde: la terminal del sistema, ventana de ejecución o desde un programa

A cotinuación se propociona un enlace con los comandos básicos para Windows y Linux
[Comandos Windows y Linux](https://ftp.kh.edu.tw/Linux/Redhat/en_6.2/doc/gsg/ch-doslinux.htm)

### Varaibles de Entorno
Una variable de entorno es una variable dinámica que puede afectar al comportamiento de los procesos en ejecución en un ordenador.

Son parte del entorno en el que se ejecuta un proceso.

Ejemplo Windows

```
echo %PATH%
```

Ejemplo Linux


```
echo $PATH
```
