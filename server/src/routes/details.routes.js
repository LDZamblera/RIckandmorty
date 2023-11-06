const router = require('express').Router()
const handler = require('../controllers/')

router.get('/:detailId', (req, res) => {
  const { detailId } = req.params
  if (!detailId) {
    res.status(400).json({ error: 'Es necesario enviar un id' })
    return
  }
  handler.getCharDetail(res, detailId)
})

module.exports = router
