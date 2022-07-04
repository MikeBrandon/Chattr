const express = require('express');
const cors = require("cors");
require('dotenv').config();

import { connectDB } from "./mongo";

const app = express();

app.use(express.json());
app.use(cors());

connectDB(process.env.MONGO_URL);

const server = app.listen(process.env.PORT, () => {
    console.log(`Chatrr: Backend is live on http://localhost:${process.env.PORT}`);
});
