## ✨ Simulación de Consultas Asíncronas en JavaScript

Este proyecto demuestra el manejo de asincronía en JavaScript utilizando tres enfoques distintos:

1. Callbacks
2. Promesas
3. Async / Await

## 🧩 Contexto

Las funciones de API proporcionadas simulan llamadas a una red mediante `setTimeout` y utilizan **callbacks**.  
Estas funciones **no fueron modificadas**, tal como indica el enunciado.

## 🔄 Envolviendo callbacks con Promesas

Para poder utilizar Promesas y `async/await`, se creó una capa adaptadora que **envuelve** las funciones originales en Promesas.

Este patrón es común cuando se trabaja con código legacy basado en callbacks.

Ejemplo:

```js
const obtenerUsuarioPromesa = (id) => {
  return new Promise((resolve, reject) => {
    obtenerUsuario(id, (error, usuario) => {
      if (error) reject(error);
      else resolve(usuario);
    });
  });
};
