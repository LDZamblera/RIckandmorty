const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3000
const routerFavourites = require('./routes/favourite.routes')
const routerCharacter = require('./routes/character.routes')
const routerDetails = require('./routes/details.routes')
const morgan = require('morgan')

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(morgan('dev'))

app.use('/rickandmorty/fav', routerFavourites)
app.use('/rickandmorty/character', routerCharacter)
app.use('/rickandmorty/detail', routerDetails)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = {
  app,
  PORT
}
