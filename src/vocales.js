const formularioVocales = document.getElementById("formulario_vocales");
const inputFrase = document.getElementById("input_frase");
const divMensajVocales = document.getElementById("mensajeResultado_3");

formularioVocales.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const frase = inputFrase.value.trim();

  if (frase === "") {
    divMensajVocales.innerHTML = `
      <div class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>Por favor, ingrese una frase o palabra.</span>
      </div>
    `;
    return;
  }

  if (/\d/.test(frase)) {
    divMensajVocales.innerHTML = `
      <div class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>No se permiten números, sólo letras.</span>
      </div>
    `;
    return;
  }

  verificar_vocales(frase);
  formularioVocales.reset();
});

const verificar_vocales = (frase) => {
  const frase_min = frase.toLowerCase();
  const vocales = new Set(["a", "e", "i", "o", "u"]);
  const vocales_encontradas = new Set();

  for (let index = 0; index < frase_min.length; index++) {
    const letra = frase_min[index];
    if (vocales.has(letra)) {
      vocales_encontradas.add(letra);
    }
    if (vocales_encontradas.size === 5) {
      break;
    }
  }

  const vocales_que_aparecen = [...vocales_encontradas];

  divMensajVocales.innerHTML = `
      <div class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Las vocales encontradas son <strong>${vocales_que_aparecen.join(",")} </strong> </span>
      </div>
    `;
};
