const { DataTypes } = require('sequelize')
const conexao = require('../config/dbConfig')


const Musicas = conexao.define('musicas', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nome:{
        type: DataTypes.STRING,
    },
    cantor:{
        type: DataTypes.STRING
    },
    link:{
        type:DataTypes.STRING
    },
    capa:{
        type: DataTypes.STRING
    }
})

Musicas.sync() //vai executar o model que montamos e criar no banco de dados

module.exports = Musicas