document.addEventListener(`DOMContentLoaded`, () => {

    const nombreUsuario = prompt(`Ingree su nombre`)
    const apellidoUsuario = prompt(`Ingree su apellido`)

    const inicialNombre = nombreUsuario.slice(0,1).toLowerCase();
    const inicialApellido = apellidoUsuario.slice(0,3).toLowerCase();

    const numeroAleatorio = Math.floor(Math.random() * 90) + 10;

    const resultadoConcat = inicialNombre + inicialApellido + numeroAleatorio

    console.log(`Tu nuevo nombre de usuario es: ${resultadoConcat}`);
});