require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 8000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:8080']
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.static('uploads'))

// connection
mongoose.set('strictQuery', false)
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => console.log(`Connected to database Database name: "${res.connections[0].name}"`))
    .catch(err => console.log(err))


app.use('/api', require('./routes/routes'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/dist/'))
    app.get('*', (req, res) => {
        res.sendFile(__dirname + '/dist/index.html')
    })
}


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))