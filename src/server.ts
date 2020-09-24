import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import routes from './routes';

const app = express();

app.use(cors())
app.use(json())
app.use(routes)

const port = 8000
app.listen(port, () => {
    console.log(`Server running: http://localhost:${8000}/health`)
});
