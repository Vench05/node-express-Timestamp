const express = require('express')


const app = express()
const port = 3000

app.get('/api/:date', (req, res) => {
    let date = new Date(req.params.date)
    if(date == 'Invalid Date') {date =  new Date(parseInt(req.params.date))}
    if(date == 'Invalid Date') res.send({"error": "Invalid Date"})
    res.send({"unix": date.getTime(), "utc": date.toString()})
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))