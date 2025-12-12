document.addEventListener("DOMContentLoaded", () => {
  const imagenPrincipal = document.querySelector("#imagen-principal");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const contenedorPrincipal = document.querySelector("#imagen-principal-container");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
      // Obtener src y alt del thumbnail clickeado
      const nuevaSrc = thumbnail.src;
      const nuevoAlt = thumbnail.alt || ""; // fallback por si no tiene alt

      // Actualizar la imagen principal (src y alt)
      imagenPrincipal.src = nuevaSrc;
      imagenPrincipal.alt = nuevoAlt;

      // Eliminar pie de foto anterior si existe
      const pieExistente = document.querySelector("#pie-de-foto");
      if (pieExistente) {
        pieExistente.remove();
      }

      // Crear nuevo pie de foto
      const pie = document.createElement("p");
      pie.id = "pie-de-foto";
      pie.textContent = nuevoAlt;

      // Añadir el pie al contenedor de la imagen principal
      contenedorPrincipal.appendChild(pie);
    });
  });
});
