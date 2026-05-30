const formularioContarVocales = document.getElementById(
  "formulario_contar_vocales",
);
const inputFraseContar = document.getElementById("input_frase_contar");
const divMensaContarVocales = document.getElementById("mensajeResultado_4");

formularioContarVocales.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const frase = inputFraseContar.value.trim();

  if (frase === "") {
    divMensaContarVocales.innerHTML = `
      <div class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>Por favor, ingrese una frase o palabra.</span>
      </div>
    `;
    return;
  }

  if (/\d/.test(frase)) {
    divMensaContarVocales.innerHTML = `
      <div class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>No se permiten números, sólo letras.</span>
      </div>
    `;
    return;
  }

  verificar_contar_vocales(frase);
  formularioContarVocales.reset();
});

const verificar_contar_vocales = (frase) => {
  const contar_vocales = frase.toLowerCase();
  const vocales = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
  ]);

  for (let index = 0; index < contar_vocales.length; index++) {
    const letra = contar_vocales[index];
    if (vocales.has(letra)) {
      let valor_actual = vocales.get(letra);
      vocales.set(letra, valor_actual + 1);
    }
  }

  divMensaContarVocales.innerHTML = `
      <div class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span"En la frase la letra <strong> "a" aparece ${vocales.get("a")} veces </strong> </span>
        <span"En la frase la letra <strong> "e" aparece ${vocales.get("e")} veces </strong> </span>
        <span"En la frase la letra <strong> "i" aparece ${vocales.get("i")} veces </strong> </span>
        <span"En la frase la letra <strong> "o" aparece ${vocales.get("o")} veces </strong> </span>
        <span"En la frase la letra <strong> "u" aparece ${vocales.get("u")} veces </strong> </span>
        </div>
    `;
};
