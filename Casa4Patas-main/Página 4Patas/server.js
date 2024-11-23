const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const app = express();

// Carregar o certificado e a chave privada
const options = {
  key: fs.readFileSync(path.join(dirname, 'ssl', 'server.key')),
  cert: fs.readFileSync(path.join(dirname, 'ssl', 'server.crt'))
};

// Servir arquivos estáticos e rotas
app.use(express.static(path.join(__dirname, 'src')));

// Criar servidor HTTPS
https.createServer(options, app).listen(443, () => {
  console.log('Servidor HTTPS rodando na porta 443');
});

app.get('/', (req, res) => {
  res.send('Conexão segura com HTTPS!');
});