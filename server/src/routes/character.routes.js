const router = require('express').Router()
const handler = require('../controllers')

router.get('/:id', (req, res) => {
  const { id } = req.params
  if (!id) {
    res.status(400).json({ error: 'Es necesario enviar un id' })
    return
  }
  handler.getCharById(res, id)
})

module.exports = router
