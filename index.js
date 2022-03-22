const express = require('express');
const req = require('express/lib/request');

const app = express();

app.listen(3000, () => console.log("seridor rodando na porta 3000"));

app.get("/atendimentos", (req, res) => res.send("Você está na rota de atendimentos"));