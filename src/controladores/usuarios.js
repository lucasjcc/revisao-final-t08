const { knex } = require('../config/bd')
const bcrypt = require('bcrypt')
const fs = require('fs').promises
const { enviarEmails } = require('../utils/enviarEmail')

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body
  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10)
    const emailCadastrado = await knex('usuarios').where({ email }).first()
    if (emailCadastrado) {
      return res.status(400).json({ mensagem: 'Email ou senha inválidos' })
    }
    const usuariosCadastrados = await knex('usuarios').insert({ nome, email, senha: senhaCriptografada }).returning('*')
    const { senha: _senha, ...usuarioCadastrado } = usuariosCadastrados[0]
    const arquivo = (await fs.readFile('./src/templates/cadastro.html')).toString()
    enviarEmails(arquivo, { nome }, { nome, email })
    return res.status(201).json(usuarioCadastrado)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor' })
  }
}

module.exports = {
  cadastrarUsuario
}
