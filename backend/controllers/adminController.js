const conexao = require("../config/dbConfig")
const MusicasModels = require("../models/musicaModel")
class adminController{

    static async listarMusicas(req, res){
        const musicas = await MusicasModels.findAll()
        res.json(musicas)
    }

    static async cadastrarMusicas(req, res){
        try {
            const {nome, cantor, link, capa} = req.body

            const novaMusica = await MusicasModels.create({nome, cantor, link, capa})
            res.json({message: "Musica cadastrada com sucesso", dados: novaMusica})
        } catch (err) {
            res.json({message: "Não foi possível cadastrar a música" + err})            
        }
    }

   
    static async alterarMusica(req, res) {
        try {

            const id = req.params.id
            const novaMusica = req.body

            const musicaSelecionada = await MusicasModels.findByPk(id)

            const musicaAlterada = await musicaSelecionada.update(novaMusica)

            res.json({ message: "Música alterada com sucesso", dados: musicaAlterada })

        } catch (err) {
            res.json({ message: "Não foi possível alterar a música" })
        }
    }

    static async deletarMusica(req, res){
        try {
            const id = req.params.id
            const musicaSelecionada = await MusicasModels.findByPk(id)
            await musicaSelecionada.destroy()
            res.json({message:"Música deletada com sucesso"})
            
        } catch (err) {
            res.json({message: "Não foi possível deletar a música"})
            
        }
    }

}

module.exports = adminController