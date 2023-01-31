const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { knex } = require('../config/bd')

const realizarLogin = async (req, res) => {
  const { email, senha } = req.body
  try {
    const usuarioLogado = await knex('usuarios').first().where('email', email)
    if (!usuarioLogado) {
      return res.status(404).json({ mensagem: 'E-mail ou senha inválidos' })
    }
    const senhaValida = await bcrypt.compare(senha, usuarioLogado.senha)
    if (!senhaValida) {
      return res.status(400).json({ mensagem: 'E-mail ou senha inválidos' })
    }
    const token = jwt.sign({ id: usuarioLogado.id }, process.env.JWT_PASSWORD, { expiresIn: '1h' })
    const { senha: _senha, ...dadosUsuario } = usuarioLogado
    return res.status(200).json({ ...dadosUsuario, token })
  } catch (error) {
    return res.status(500).json({ mensagem: error.message })
  }
}

module.exports = {
  realizarLogin
}
