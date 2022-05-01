const res = require("express/lib/response")
const bd = require("../infra/sq-litebd")
const SobremesasConstructor = require("../model/ModelSobremesa")

const sobremesa = (app,bd) => {
    app.get('/sobremesa', (req,res) => {
            bd.all(`SELECT * FROM SOBREMESAS`, (error, rows) =>{
                if(error) {
                    res.json("Erro ao selecionar o Banco")
                } else {
                    res.json({"Banco sobremesas selecionado" : rows})
                }
        })
    })

    app.get('/clientes/:id', (req,res) => {
        const requisicao = req.params.id

        bd.all(`SELECT * FROM CLIENTES WHERE id = ${requisicao}`, (error, rows) => {
            if(error) {
                console.log(typeof requisicao, requisicao)
                res.json({"Erro ao retornar nome" : error})
            } else {
                console.log(typeof requisicao, requisicao)
                res.json ({"nome selecionado" : rows})
            }

        })
    })

    app.post('/usuario', (req,res) =>{
        const add = req.body
        console.log(add)
        bd.all(`INSERT INTO CLIENTES (NOME,CPF,EMAIL,SENHA) VALUES(?,?,?,?)`, 
        [add.nome, add.cpf, add.email, add.senha])
        res.send("foi")
    })

}
    

module.exports = sobremesa