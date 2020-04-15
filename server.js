const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")

const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(express.json({ extended: true }))
app.use("/api/auth", require("./routes/auth.routes"))
app.use(express.static('client/build'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect(process.env.MONGOLAB_PINK_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err));

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log("Server Error", e.message)
        process.exit(1)
    }
}

start()

