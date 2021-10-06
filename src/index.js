const express = require('express');
const morgan = require('morgan');

require('./database');

const app = express();

app.set('port', 5000);

app.use(morgan('dev'))
app.use(express.json())


app.use('/api/products',require('./routes/products.routes'));

app.listen(app.get('port'),()=>{
    console.log("Server on port ",app.get('port'));
})