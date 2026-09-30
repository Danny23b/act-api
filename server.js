const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>API Act-API</h1>
        <p>La aplicación está funcionando correctamente.</p>
        <p>Proyecto desplegado con Render.</p>
    `);
});

app.get("/saludo", (req, res) => {
    res.json({
        mensaje: "Hola desde mi aplicación Node.js",
        estado: "Funcionando"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});