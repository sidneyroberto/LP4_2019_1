const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');
const logger = require('morgan');

require('./db');
const produtoCtrl = require('./controllers/produto_controller');

const app = express();

// Liberar o acesso de apps externos
app.use(cors());

// Habilitar o POST de blocos JSON
app.use(bodyParser.json());

// Sanitizar as queries do MongoDB
app.use(mongoSanitize());

// Habilitar o log mais detalhado
app.use(logger('dev'));

// Registra o web service
app.get('/produtos', produtoCtrl.recuperarTodos);

app.listen(3000, () => {
    console.log('App inicializado');
});