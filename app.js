const express = require('express')


const app = express()
const port = 3000


app.get('/api', (req, res) => {
    let date = new Date()
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    res.send({"unix": date.getTime(), "utc": date.toUTCString()})
})

app.get('/api/:date', (req, res) => {
    let date = new Date(req.params.date)
    console.log(date);
    if(date == 'Invalid Date') {date =  new Date(parseInt(req.params.date))}
    if(date == 'Invalid Date') res.send({"error": "Invalid Date"})
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    res.send({ "unix": date.getTime(), "utc": date.toUTCString() })
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))