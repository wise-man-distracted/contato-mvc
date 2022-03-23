// Importar o express
const express = require('express');

//importar os reteadores
const ContatosRouter = require("./routes/ContatosRouter")

// Criar um servidor/aplica\u00e7\u00e3o com o express
const app = express(); 

// Criar rota get no endere\u00e7o '/' para responder requisi\u00e7\u00e3o com msg "ol\u00e1"
app.get('/',(req,res)=>{res.send('ol\u00e1');});
// usando os roteadores
app.use("/",ContatosRouter);

// Levantar/rodar/executar a nossa aplica\u00e7\u00e3o
app.listen('3000',()=>{console.log("Rodando na porta 3000")})