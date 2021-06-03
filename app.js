const express = require('express')


const app = express()
const port = 3000

// app.use(express.json())
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api', (req, res) => {
    let date = new Date()
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    res.json({unix: date.getTime(), utc: date.toUTCString()})
})

app.get('/api/:date?', (req, res) => {
    let date = new Date(req.params.date)
    if (!isNaN(req.params.date)){
        date = new Date(parseInt(req.params.date))
    }
    if(date.toString() === 'Invalid Date') res.json({error: date.toString()})
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    res.json({ unix: date.getTime(), utc: date.toUTCString() })
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))