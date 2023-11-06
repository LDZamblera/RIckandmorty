/* eslint-disable no-undef */
const { sequelize, Character } = require('../db/connection')

describe('Conexion a la base de datos', () => {
  test('Debe establecer correctamente la conexion', async () => {
    try {
      await sequelize.authenticate()
      expect(true).toBe(true)
    } catch (error) {
      expect(error).toBeUndefined()
    }
  })
  test('Debe ser posible realizar operaciones en la base de datos', async () => {
    try {
      await sequelize.query('SELECT 1 + 1')
      expect(true).toBe(true)
    } catch (error) {
      expect(error).toBeUndefined()
    }
  })
})

describe('Modelos DB', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })

  describe('Modelo Character', () => {
    test('Character debe existir', () => {
      const Character = sequelize.models.Character
      expect(Character).toBeDefined()
    })

    test('Debe tener las propiedades correctas', async () => {
      const character = await Character.build({
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: 'Earth',
        image: 'example.png'
      })
      const keys = ['id', 'name', 'status', 'species', 'gender', 'origin', 'image']
      expect(Object.keys(character.toJSON())).toEqual(keys)
    })

    test('La propiedad status solo puede recibir Alive, Dead o unknown', async () => {
      expect.assertions(1)
      try {
        await Character.create({
          name: 'Rick Sanchez',
          status: 'vivo',
          species: 'Human',
          gender: 'Male',
          origin: 'Earth',
          image: 'example.png'
        })
      } catch (error) {
        expect(error.message).toBeDefined()
      }
    })

    test('La propiedad gender solo puede recibir Female, Male, Genderless, o unknown', async () => {
      expect.assertions(1)
      try {
        await Character.create({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          gender: 'binary',
          origin: 'Earth',
          image: 'example.png'
        })
      } catch (error) {
        expect(error.message).toBeDefined()
      }
    })
  })
})
