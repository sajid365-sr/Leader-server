const express = require('express');
const app = express();
const port = 5000;

const course = require('./data.json');

app.get('/', (req, res) =>{
    res.send(course);
})
app.listen(port, ()=>{
    console.log('Server is running on the port: ', port);
})