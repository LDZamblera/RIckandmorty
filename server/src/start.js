const { app, PORT } = require('./app')
const { sequelize } = require('./db/connection')
const { saveApiData } = require('./controllers')

sequelize.sync({ force: true })
  .then(() => {
    console.log('DB connection established')
    saveApiData()
    app.listen(PORT, () => {
      console.log('Server listening on http://localhost:3000')
    })
  })
