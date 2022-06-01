const express = require('express');
const port = process.env.PORT || 3000;
const morgan = require('morgan');

const app = express();
app.use(morgan("dev"));


app.get('/', (req, res) => {
    res.send(`<h1>xxxxxxxxxxxxxx${process.env.PORT} - ${port}</h1>`);
})

app.listen(port, () => {console.log(`Listening on port ${port}`)});

