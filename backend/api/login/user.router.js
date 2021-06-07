const router = require('express').Router()
const usercontroller = require('./user.controller')

router.post('/login', usercontroller.login)
router.post('/signup', usercontroller.signup)


module.exports = router