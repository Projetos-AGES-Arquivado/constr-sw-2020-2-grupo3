import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import routes from './routes';
import database from './database/database'

const app = express()
const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'API de Avaliações',
            title: 'Swagger',
            version: '1.0.0',
        },
        basePath: '',
        produces: [],
        schemes: ['https', 'http']
    },
    basedir: __dirname, //app absolute path
    files: ['./routes.ts'] //Path to the API handle folder
};
expressSwagger(options);


app.use(cors())
app.use(json())
app.use(routes)

//database("localhost:27017");

const port = 8000
app.listen(port, () => {
    console.log(`Server running: http://localhost:${8000}/health`)
});
