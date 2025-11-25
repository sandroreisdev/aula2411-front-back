const sequelize = require ('sequelize')

const conexao = new sequelize('musicpich', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

async function testarConexao(){
    try {
        await conexao.authenticate()
        console.log('BANCO CONECTADO COM SUCESSO')
        
    } catch (err) {
            console.log('NÃO FOI POSSÍVEL CONECTAR COM O BANCO DE DADOS')
    }
}

testarConexao()
module.exports = conexao
    
