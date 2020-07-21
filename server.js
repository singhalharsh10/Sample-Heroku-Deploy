const express = require('express')


const app = express()

// setting up port for heroku deploy
const PORT = process.env.PORT || 2345

app.get('/', (req, res) => {
    res.send('Hello World')
})




app.listen(PORT, (req, res) => {
    console.log(`Server Started at ${PORT}`)
})