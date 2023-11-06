const router = require('express').Router()
let fav = []

router.get('/', (req, res) => {
  res.json(fav)
})

router.post('/', (req, res) => {
  const { character } = req.body
  if (!character) {
    res.status(400).json({ error: 'Es necesario enviar un personaje' })
    return
  }

  fav.push(character)
  res.status(201).send('Created')
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ error: 'Es necesario un id' })
    return
  }
  if (fav.some(fav => fav.id === parseInt(id))) {
    const updatedFavs = fav.filter(fav => fav.id !== parseInt(id))
    fav = updatedFavs
    res.status(200).send()
  } else {
    res.status(404).json({ error: 'Character not found' })
  }
})

module.exports = router
