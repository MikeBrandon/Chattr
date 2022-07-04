const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT, () => {
    console.log(`Chatrr Backend is live on http://localhost:${process.env.PORT}`);
});