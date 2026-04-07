const express = require("express");

const app = express();

const port = 3000;

app.get("/hello", (req, res) => {
    res.json({
        message: "Ola, mundo"
    });
});

app.use((req, res) => {
    res.status({
        error: "Rota nao encontrada"
        
    });
});

app.listen(port, () => {
   console.log(`Servidor rodando em http://localhost:${port}`);
});