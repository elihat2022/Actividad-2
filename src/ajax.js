document.addEventListener("DOMContentLoaded", () => {
  const formUrl = document.getElementById("formulario_url");
  const urlInput = document.getElementById("input_url");
  const mensajeResultado = document.getElementById("mensajeResultado_ajax");
  const btnMostrar = formUrl?.querySelector('button[type="submit"]');
  const zonaEstados = document.getElementById("zonaEstados");
  const zonaCabeceras = document.getElementById("zonaCabeceras");
  const zonaCodigo = document.getElementById("zonaCodigo");
  const zonaContenidos = document.getElementById("zonaContenidos");

  if (!formUrl || !urlInput || !btnMostrar) {
    return;
  }

  urlInput.value = window.location.href;

  const estadosTexto = {
    0: "No iniciada",
    1: "Conexión establecida",
    2: "Cabeceras recibidas",
    3: "Cargando",
    4: "Completada",
  };

  const mostrarEstado = (xhr) => {
    zonaEstados.textContent = `${xhr.readyState}: ${estadosTexto[xhr.readyState]}`;
  };

  const terminarPeticion = () => {
    btnMostrar.disabled = false;
    btnMostrar.textContent = "Mostrar Contenidos";
  };

  formUrl.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = urlInput.value.trim();

    mensajeResultado.textContent = "";
    mensajeResultado.className = "mt-4 text-sm";

    try {
      new URL(url);
    } catch (error) {
      mensajeResultado.innerHTML =
        '<span class="badge badge-error">La URL no es valida.</span>';
      mensajeResultado.className = "mt-4";
      return;
    }

    const xhr = new XMLHttpRequest();

    zonaEstados.textContent = `0: ${estadosTexto[0]}`;
    zonaCabeceras.textContent = "Esperando respuesta...";
    zonaCodigo.textContent = "Esperando respuesta...";
    zonaContenidos.textContent = "Esperando respuesta...";
    btnMostrar.disabled = true;
    btnMostrar.textContent = "Cargando...";

    xhr.onreadystatechange = function () {
      mostrarEstado(xhr);

      if (xhr.readyState === 4) {
        zonaContenidos.textContent = xhr.responseText || "Sin contenido.";
        zonaCabeceras.textContent =
          xhr.getAllResponseHeaders() || "No se recibieron cabeceras.";
        zonaCodigo.textContent = `${xhr.status} ${xhr.statusText}`;

        if (xhr.status < 200 || xhr.status >= 300) {
          mensajeResultado.innerHTML =
            '<span class="badge badge-warning">Respuesta no exitosa.</span>';
          mensajeResultado.className = "mt-4";
        } else {
          mensajeResultado.innerHTML =
            '<span class="badge badge-success">Respuesta exitosa.</span>';
          mensajeResultado.className = "mt-4";
        }

        terminarPeticion();
      }
    };

    xhr.onerror = function () {
      zonaEstados.textContent = "Error al realizar la petición";
      zonaCabeceras.textContent = "No disponibles.";
      zonaCodigo.textContent = `${xhr.status || 0} ${xhr.statusText || "Error"}`;
      zonaContenidos.textContent = "No se pudo descargar el contenido.";
      mensajeResultado.innerHTML =
        '<span class="badge badge-error">No se pudo completar la solicitud.</span>';
      mensajeResultado.className = "mt-4";
      terminarPeticion();
    };

    xhr.open("GET", url, true);
    xhr.send();
  });
});
