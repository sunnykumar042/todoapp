const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const router= require('./routes/ToDoRoute');

require('dotenv').config();
const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sunnymum042:sunny123@cluster0.rt6py1m.mongodb.net/TodoApp?retryWrites=true&w=majority")
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))
app.use(router);

app.listen(5000, () => {
    console.log("Server Started at port 5000");
});