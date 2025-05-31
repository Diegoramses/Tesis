document.getElementById("formulario").addEventListener("submit", async function (e) {
  e.preventDefault();

  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("clave").value;

  const datos = { correo, clave };

  const respuesta = await fetch("/guardar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  if (respuesta.ok) {
    alert("Datos guardados exitosamente.");
    document.getElementById("formulario").reset();
  } else {
    alert("Error al guardar los datos.");
  }
});
