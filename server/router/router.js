//Routes often involve fetching, inserting, updating, or deleting data from the database. Without a connection, these operations can't be performed, thats why we are requiring our databse here.

const express = require('express');
const router = express.Router();

const connectDb = require('../db/config');
connectDb();

module.exports = router;