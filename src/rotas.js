const { realizarLogin } = require('./controladores/login')
const { cadastrarUsuario } = require('./controladores/usuarios')
const { upload } = require('./config/upload')
const { esquemaLogin } = require('./esquemas/login')
const { esquemaUsuario } = require('./esquemas/usuario')
const { validarCorpo } = require('./intermediarios/validarCorpo')
const { validarLogin } = require('./intermediarios/validarLogin')
const { cadastrarAnimal, listarAnimais, deletarAnimal } = require('./controladores/animais')
const { esquemaAnimal } = require('./esquemas/animal')

const rotas = require('express').Router()

rotas.post('/usuarios', validarCorpo(esquemaUsuario), cadastrarUsuario)
rotas.post('/login', validarCorpo(esquemaLogin), realizarLogin)

rotas.use(validarLogin)

rotas.post('/animais', upload.single('foto'), validarCorpo(esquemaAnimal), cadastrarAnimal)
rotas.get('/animais', listarAnimais)
rotas.delete('/animais/:id', deletarAnimal)

module.exports = {
  rotas
}
