const { knex } = require('../config/bd')
const { s3 } = require('../config/s3')

const cadastrarAnimal = async (req, res) => {
  const { file, usuarioLogado } = req
  const { nome, descricao } = req.body
  try {
    const animalEncontrado = await knex('animais').where('nome', nome).first().returning('*')
    if (animalEncontrado) {
      return res.status(401).json({ mensagem: 'Não é permitido cadastrar animais com o mesmo nome' })
    }
    const foto = await s3.upload({
      Bucket: process.env.BACK_BLAZER_BUCKET,
      Key: `${req.usuarioLogado.id}-${req.usuarioLogado.nome}/${nome}`,
      Body: file.buffer,
      ContentType: file.mimetype
    }).promise()
    const animalCadastrado = await knex('animais').insert({ id_usuario: usuarioLogado.id, nome, descricao, foto_url: foto.Location, foto_path: foto.Key }).returning('*')
    return res.json(animalCadastrado)
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro interno no servidor' })
  }
}

const listarAnimais = async (req, res) => {
  const { usuarioLogado } = req
  try {
    const animais = await knex('animais').where('id_usuario', usuarioLogado.id).returning('*')
    return res.json(animais)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor' })
  }
}

const deletarAnimal = async (req, res) => {
  const { id } = req.params
  const { usuarioLogado } = req
  try {
    const animalEncontrado = await knex('animais').where({
      id_usuario: usuarioLogado.id,
      id
    }).first()
    if (!animalEncontrado) {
      return res.status(401).json({ mensagem: 'Animal não encontrado' })
    }
    await knex('animais').where('id', id).del()
    await s3.deleteObject({
      Bucket: process.env.BACK_BLAZER_BUCKET,
      Key: animalEncontrado.foto_path
    }).promise()
    return res.status(204).send()
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ mensagem: 'Erro interno no servidor' })
  }
}

module.exports = {
  cadastrarAnimal,
  listarAnimais,
  deletarAnimal
}
