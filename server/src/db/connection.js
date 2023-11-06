require('dotenv').config()
const { Sequelize } = require('sequelize')
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env
const { Character } = require('../models')

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
    { logging: false, native: false }
)

// models

Character(sequelize)

module.exports = {
  ...sequelize.models,
  sequelize
}
