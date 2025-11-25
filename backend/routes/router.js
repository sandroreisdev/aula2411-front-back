const express = require('express')
const adminController = require('../controllers/adminController')
const router = express.Router()


router.get('/',adminController.listarMusicas)
router.post("/cadastrar", adminController.cadastrarMusicas)
router.put('/alterar/:id', adminController.alterarMusica)
router.delete('/deletar/:id', adminController.deletarMusica)

module.exports = router
