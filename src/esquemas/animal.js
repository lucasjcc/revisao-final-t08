const joi = require('joi')

const esquemaAnimal = joi.object({
  nome: joi.string().required().messages({
    'string.base': 'O nome é um campos de texto',
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório'
  }),
  descricao: joi.string().messages({
    'string.base': 'A senha é um campos de texto'
  })
})

module.exports = {
  esquemaAnimal
}
