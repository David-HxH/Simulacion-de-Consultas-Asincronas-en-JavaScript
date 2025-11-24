document.addEventListener("DOMContentLoaded", () => {
  let crearLista = confirm("Bienvenido a tu lista de tareas. ¿Deseas crear una lista de tareas?");

  if (!crearLista) {
    alert("Hasta la próxima, vuelve pronto!");
    return;
  }

  let listaDeTareas = [];
  let tarea = prompt("Ingresa una tarea (o presiona cancelar para salir):");

  if (tarea === null) {
    alert("Has cancelado la aplicación. No se agregaron tareas.");
    return;
  }

  while (tarea !== null && tarea.trim() !== "") {
    listaDeTareas.push(tarea.trim());

    const confirmar = confirm("¿Deseas agregar otra tarea?");

    if (!confirmar) break;

    tarea = prompt("Ingresa otra tarea (o presiona cancelar para salir):");

    if (tarea === null) break;
  }

  console.log("--- Lista de Tareas Pendientes ---");
  for (let i = 0; i < listaDeTareas.length; i++) {
    console.log(`${i + 1}. ${listaDeTareas[i]}`);
  }
});
