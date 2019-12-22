const express = require('express')
const path = require('path');
app = express();

app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/mvp_1.html'))
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})