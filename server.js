const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const dbFile = path.join(__dirname, "db.json");

app.use(express.static(__dirname));
app.use(express.json());

app.post("/guardar", (req, res) => {
  const nuevoUsuario = req.body;

  // Leer datos actuales
  let datos = [];
  if (fs.existsSync(dbFile)) {
    const contenido = fs.readFileSync(dbFile);
    datos = JSON.parse(contenido);
  }

  // Agregar nuevo dato
  datos.push(nuevoUsuario);

  // Guardar en archivo
  fs.writeFileSync(dbFile, JSON.stringify(datos, null, 2));

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
