import express from 'express'
import path from 'path'
import 'express-async-errors'
import cors from 'cors'


import './database/connection'

import routes from './route'
import errorHandler from './errors/handler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')))
app.use(errorHandler)

// Rota = conjunto
// Recurso = usuario

// Metodos HTTP = GET, POST, PUT, DELETE
// Parametros 

// GET = Buscar informação  (lista, item) 
// POT = Criar informação
// PUT = Editar informação
// DELETE = Deletar informação

// Query Params: http://localhost:3333/users?search=Joao
// Route Params: http://localhost:3333/users/1 (identificar recurso)
// Body:



app.listen(3333)