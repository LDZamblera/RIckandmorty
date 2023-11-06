/* eslint-disable no-undef */
const request = require('supertest')
const { app } = require('../app.js')
const agent = request(app)

// eslint-disable-next-line no-undef
describe('Routas', () => {
// eslint-disable-next-line no-undef
  it('Para la ruta GET /rickandmorty/character/:id debe devolver un status code 200 si se realiza una peticion valida', async () => {
    const res = await agent.get('/rickandmorty/character/1')
    // eslint-disable-next-line no-undef
    expect(res.statusCode).toBe(200)
    // eslint-disable-next-line no-undef
  })
  // eslint-disable-next-line no-undef
  it('Response un objeto con las propiedades: id, name, species, gender e image', async () => {
    const res = await agent.get('/rickandmorty/character/1')
    // eslint-disable-next-line no-undef
    expect(Object.keys(res.body)).toContain('id')
    expect(Object.keys(res.body)).toContain('name')
    expect(Object.keys(res.body)).toContain('species')
    expect(Object.keys(res.body)).toContain('gender')
    expect(Object.keys(res.body)).toContain('image')
  })

  it('Par la ruta GET /rickandmorty/detail/:detailId debe retornar un status 200 si sale todo bien', async () => {
    const res = await agent.get('/rickandmorty/detail/1')
    expect(res.statusCode).toBe(200)
  })

  it('Para la ruta GET /rickandmorty/detail/:detailId debe retornar un obj con las pros: name, image ,gender, species, status, origin', async () => {
    const res = await agent.get('/rickandmorty/detail/1')
    expect(Object.keys(res.body)).toContain('name')
    expect(Object.keys(res.body)).toContain('image')
    expect(Object.keys(res.body)).toContain('gender')
    expect(Object.keys(res.body)).toContain('species')
    expect(Object.keys(res.body)).toContain('status')
    expect(Object.keys(res.body)).toContain('origin')
  })

  it('Para la ruta POST /rickandmorty/fav debe retornar un 400 si no se envia la informacion necesaria desde el body', async () => {
    const res = await agent.post('/rickandmorty/fav').send({})
    expect(res.statusCode).toBe(400)
  })

  it('Para la ruta POST /rickandmorty/fav debe retornar un mensaje de error si no se envia la informacion necesaria desde el body', async () => {
    const res = await agent.post('/rickandmorty/fav').send({})
    expect(res.body).toEqual({ error: 'Es necesario enviar un personaje' })
  })

  it('Para la ruta POST /rickandmorty/fav debe retornar un status 201 si se envia la informacion necesaria', async () => {
    const res = await agent.post('/rickandmorty/fav').send({ character: {} })
    expect(res.statusCode).toBe(201)
  })

  it('Para la ruta DELETE /rickandmorty/fav/:id debe retornar un status 404 si no se encuentra el personaje a eliminar', async () => {
    const res = await agent.delete('/rickandmorty/fav/1')
    expect(res.statusCode).toBe(404)
  })

  it('Para la ruta DELETE /rickandmorty/fav/:id debe retornar un mensaje de error', async () => {
    const res = await agent.delete('/rickandmorty/fav/1')
    expect(res.body).toEqual({ error: 'Character not found' })
  })

  it('Para la ruta DELETE /rickandmorty/fav/:id debe retornar un status 200 si se pudo eliminar el persnoaje', async () => {
    await agent.post('/rickandmorty/fav').send({ character: { id: 1, name: 'Rick Sanchez', species: 'Human', gender: 'Male' } })
    const res = await agent.delete('/rickandmorty/fav/1')
    expect(res.statusCode).toBe(200)
  })
})
