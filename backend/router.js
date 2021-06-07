const router = require('express').Router()

router.use('/user', require('./api/login/user.router'))

router.use('/list', require('./api/todolist/list.router'))

router.use('/', (req, res) => {
    res.send('<h1 style="color:red;">Welcome to To-Do App</h1>')
})

module.exports = router