const express = reqire('express')


const app = express()


app.get('/', (req, res) => {
    res.send('Hello World')
})




app.listen(3000, (req, res) => {
    console.log('Server Started')
})