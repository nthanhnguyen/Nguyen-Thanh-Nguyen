import { MongoClient } from 'mongodb';
const express = require('express');
const body = require('body-parser');
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const configViewEngine = require('./config/viewEngine');

async function main() {
    const app = express();
    const port = process.env.PORT || 8080
    try {
        app.use(body.json({
            limit: '500kb'
        }));

        // Config req.body
        app.use(express.json()) // for json
        app.use(express.urlencoded({ extended: true })) // for form data

        // Declare route
        app.use('/', userRoutes);

        // Config template engine
        configViewEngine(app);

        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        })
    }
    catch (error) {
        console.log(error)
    };
}

main();
