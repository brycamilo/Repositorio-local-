const mongoose = require('mongoose')
const URL = "mongodb://localhost/minticproyecto"

mongoose.connect(URL)
        .then(db=>console.log("Database connected"))
        .catch( err => console.log(err));