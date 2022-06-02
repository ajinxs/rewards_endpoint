import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use('/', usersRoutes)

app.get('/', (req, res) => res.send('Welcome to Homepage API'));

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})