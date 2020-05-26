const express = require('express')

const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gopal:gopal%40123@cluster0-x5k2e.gcp.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DB Connected"))
    .catch(err => console.error(err))




app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(5000);