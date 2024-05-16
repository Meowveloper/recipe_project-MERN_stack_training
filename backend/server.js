const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const recipeRoutes = require('./routes/recipes');
const mongoose = require('mongoose');
const password = process.env.PASSWORD;
console.log(password);
const mongoURL = `mongodb+srv://Meowveloper:${password}@mern-cluster.koyddli.mongodb.net/?retryWrites=true&w=majority&appName=MERN-cluster`;



const app = express();
mongoose.connect(mongoURL).then(() => {
    console.log('connected');
    app.listen(process.env.PORT, () => {
        console.log('App is running on localhost:4000');
    });
});
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/recipes', recipeRoutes);

