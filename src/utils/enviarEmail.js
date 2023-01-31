const handlebars = require('handlebars')
const { transportador } = require('../config/email')

const enviarEmails = async (arquivo, propriedades, { nome, email }) => {
  const compilador = handlebars.compile(arquivo)
  const emailString = compilador(propriedades)
  transportador.sendMail({
    from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
    to: `${nome} <${email}>`,
    subject: 'Boas-vindas',
    html: emailString
  })
}

module.exports = {
  enviarEmails
}
