require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { rotas } = require('./rotas')
const app = express()

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(rotas)

app.listen(8000, () => console.log(`API rodando na porta ${PORT}`))
