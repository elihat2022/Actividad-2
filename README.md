# Actividad 2 - JavaScript y AJAX

Pequena practica con HTML, JavaScript y AJAX. Incluye ejercicios de palindromo, numero mayor, vocales y un cliente AJAX interactivo.

## Estructura

- src/index.html: interfaz principal
- src/ajax.js: cliente AJAX y manejo de estados
- src/palindromo.js, src/numero_mayor.js, src/vocales.js, src/vocales_contar.js: ejercicios

## Requisitos del cliente AJAX

1. Al cargar la pagina, el cuadro de texto muestra la URL de la propia pagina.
2. Al pulsar Mostrar Contenidos, se descarga via AJAX el contenido de la URL.
3. Se muestran los estados de la peticion en todo momento.
4. Se muestran todas las cabeceras de la respuesta.
5. Se muestran el codigo y el texto de estado.

## Ejecucion local

Desde la carpeta src:

```bash
python3 -m http.server 8000
```

Luego abrir en el navegador:

```
http://localhost:8000/index.html
```

Nota: Algunas URLs bloquean peticiones por CORS. Prueba con URLs del mismo servidor o con un endpoint que permita CORS.
