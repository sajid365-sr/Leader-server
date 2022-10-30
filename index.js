const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const course = require('./data.json');
app.use(cors());

app.get('/', (req, res) =>{
    res.send(course);
})

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const detailCourse = course.find(one => one.id === id);
    res.send(detailCourse);
})

app.listen(port, ()=>{
    console.log('Server is running on the port: ', port);
})