const express = require('express')
const app = express()
require('dotenv').config()
const { PORT } = process.env
const bodyParser = require('body-parser')
const router = require('./routes')
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000', 'https://vibrant-bardeen-55e861.netlify.app']
}));

app.use(bodyParser.json())
app.use(router)

app.listen(PORT, _ => {
  console.log(`listening to port: ${PORT}`)
})