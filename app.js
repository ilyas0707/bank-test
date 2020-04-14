const express = require("express")
require("dotenv").config()
const path = require("path")
const mongoose = require("mongoose")

const app = express()

app.use(express.json({ extended: true }))

app.use("/api/auth", require("./routes/auth.routes"))

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/build/index.html"));
});

const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(5000, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log("Server Error", e.message)
        process.exit(1)
    }
}

start()

