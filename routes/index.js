const router = require('express').Router()
const { addJSON } = require('../controllers')
router.post('/', addJSON)
router.get('/', (req, res) => res.send({ message: 'welcome to ipfs provider' }))
router.use('*', (req, res) => res.status(404).send({ message: 'not found' }))

module.exports = router
