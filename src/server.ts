import express  from "express";
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'


//dot env config, criar o arquivo .env na raiz do projeto e colocar as variáveis de ambiente lá dentro

dotenv.config()

const server = express()

//configuração do mustache
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
//criar a pasta views dentro de /src
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))
//criar a pasta public na raiz do projeto, e colocar os arquivos estáticos lá dentro (css, js, imagens, etc)


// Rotas

server.listen(process.env.PORT)
//criar a variável de ambiente PORT no arquivo .env
