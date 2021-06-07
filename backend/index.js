  
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongoDB = 'mongodb+srv://souparno123:souparno123@cluster0.qwuwc.mongodb.net/mean-demo?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
    useUnifiedTopology: true,
    poolSize: 50,
    useNewUrlParser: true,
    keepAlive: true,
    keepAliveInitialDelay: 300000
})
mongoose.Promise = global.Promise;

mongoose.connection
    .on('connected', ()=> {
        console.log('Mongoose default connection connected')
    })
    .on('error', (err)=> {
        console.log('Mongoose default connection error: ' + err)
    })
    .on('disconnected', ()=> {
        console.log('Mongoose default connection disconnected')
    })

// if the Node process ends, close the Mongoose connection
process.on('SIGINT', ()=> {
    mongoose.connection.close(()=> {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})
app.use(cors())

app.use(bodyParser.json())
app.use('/', require('./router'))

const http = require('http').Server(app)
http.listen('5000', () => {
    console.log('API running on 5000 port!')
})

module.exports = app