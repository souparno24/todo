const router = require('express').Router()
const listcontroller = require('./list.controller')

router.post('/',  listcontroller.makeuser)
router.post('/add',  listcontroller.add)
router.get('/fetch',  listcontroller.fetch)
router.delete('/remove',listcontroller.remove)


module.exports = router