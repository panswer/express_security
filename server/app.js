const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(require('./router/index'));

app.listen(3050, err => err ?
    console.log(err) :
    console.log("Server on port 3050"));