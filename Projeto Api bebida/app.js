
const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json())

const porta = 3000

const bebida = require('./src/controllers/bebidascontroller')

const db = require('./src/infra/sqliteDB')


app.use(cors());


bebida(app, db)


app.listen(porta, ()=>{
    console.log(`http://localhost:${porta}`);
})