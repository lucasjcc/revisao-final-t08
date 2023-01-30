require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ mensagem: 'Olá, mundo!' })
})

app.listen(8000, () => console.log(`API rodando na porta ${PORT}`))
