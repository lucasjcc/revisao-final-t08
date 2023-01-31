const joi = require('joi')

const esquemaUsuario = joi.object({
  nome: joi.string().required().messages({
    'string.base': 'O nome é um campos de texto',
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campos nome é obrigatório'
  }),
  email: joi.string().email().required().messages({
    'string.base': 'O e-mail é um campos de texto',
    'any.required': 'O campo e-mail é obrigatório',
    'string.empty': 'O campos e-mail é obrigatório',
    'string.email': 'Formato de e-mail inválido'
  }),
  senha: joi.string().min(5).alphanum().required().messages({
    'string.base': 'A senha é um campos de texto',
    'any.required': 'O campo senha é obrigatório',
    'string.empty': 'O campos senha é obrigatório',
    'string.min': 'O campo senha deve ter no mínimo 5 caracteres',
    'string.alphanum': 'O campo senha deve conter apenas letras e números'
  })
})

module.exports = {
  esquemaUsuario
}
