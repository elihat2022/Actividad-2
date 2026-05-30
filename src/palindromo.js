const formulario = document.getElementById("formulario");
const divMensaje = document.getElementById("mensajeResultado");
const palabraInput = document.getElementById("input_palabra");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const palabra = palabraInput.value;
  verificar_palindromo(palabra);
  formulario.reset();
});

function verificar_palindromo(p) {
  let p_minus = p.toLowerCase();
  let izquierda = 0;
  let derecha = p_minus.length - 1;
  while (izquierda < derecha) {
    if (p_minus[izquierda] !== p_minus[derecha]) {
      divMensaje.innerHTML = `
        <div class="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>La palabra <strong>${p}</strong> NO es un palíndromo.</span>
        </div>
      `;
      return "Invalido";
    }
    izquierda++;
    derecha--;
  }

  divMensaje.innerHTML = `
        <div class="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>¡La palabra <strong>${p}</strong> es un palíndromo!</span>
        </div>
    `;
  return "Valido";
}
