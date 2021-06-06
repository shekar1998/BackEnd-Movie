const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express();
app.use(cors()) 

dotenv.config( { path: './config.env'} );
const database= process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

app.use(express.json());

mongoose.connect(database, {
    useCreateIndex : true,
    useFindAndModify:false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => console.log('Connection Successful'))

const movierouter = require('./Router/router');
app.use('/', movierouter);
const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log('Server Started')
});