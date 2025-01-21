const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const musicRouter = require('./router/router');

const port = process.env.PORT;

app.use('/', musicRouter);

app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
}) 