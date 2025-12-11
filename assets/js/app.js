document.addEventListener("DOMContentLoaded", () => {

  // Objeto que representa a un usuario (antes var → ahora const)
  const usuario = {
    nombre: "Ana",
    edad: 24,
    ciudad: "Barcelona",
  };

  // NUEVO CODIGO REFACTORIZADO
  const crearMensajePresentacion = ({ nombre, edad, ciudad }) => {
    return `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en la ciudad de ${ciudad}.`;
  };

  const mensajeDeBienvenidaRefactorizado = crearMensajePresentacion(usuario);
  console.log(mensajeDeBienvenidaRefactorizado);

});

