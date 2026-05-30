const formularioMayor = document.getElementById("formulario_numero_mayor");
const divMensajeMayor = document.getElementById("mensajeResultado_2");
const numeroInput1 = document.getElementById("input_numero_1");
const numeroInput2 = document.getElementById("input_numero_2");

formularioMayor.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const num1 = parseFloat(numeroInput1.value);
  const num2 = parseFloat(numeroInput2.value);
  verificar_numero_mayor(num1, num2);
  formularioMayor.reset();
});

const verificar_numero_mayor = (n1, n2) => {
  if (n1 < n2) {
    divMensajeMayor.innerHTML = `
      <div class="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>El número mayor es: ${n2}</span>
      </div>
    `;
  } else if (n1 > n2) {
    divMensajeMayor.innerHTML = `
      <div class="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>El número mayor es: ${n1}</span>
      </div>
    `;
  } else {
    divMensajeMayor.innerHTML = `
      <div class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Los números son iguales</span>
      </div>
    `;
  }
};
