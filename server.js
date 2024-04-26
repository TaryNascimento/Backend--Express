// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes); // Usando as rotas definidas no arquivo routes.js

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app; // Exportando o app para uso em outros arquivos
