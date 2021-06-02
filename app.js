const express = require('express')


const app = express()
const port = 3000

app.get('/api/:date', (req, res) => {
    const date = req.params.date.split("-")
    const utc = Date.parse(date)
    if (!utc) res.send({"error": "Invalid Date"})
    res.send({"unix": utc | date, "utc": new Date(date)})
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))