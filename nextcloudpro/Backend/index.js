const mongoose  = require("mongoose")
const core = require('cors')
const express = require("express")
require("dotenv").config();
const PORT = process.env.PORT || 8080
const app = express()
app.use(core());
app.use(express.json())
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connect mongobd");
    })
    .catch((err) => console.log(err + "monogodb error"))
const mongoSchema = new mongoose.Schema({
    userName: String,
    Email: String,
    Password: String
})
const User = mongoose.model("UserInfo", mongoSchema)
app.post("/api/user", async (req, res) => {
    try {

        const { userName, Email, Password } = req.body;
        const newUser = new User({ userName, Email, Password });
        await newUser.save();
        res.status(201).json({ message: "user created" })
    } catch (e) {
        res.status(400).send({ message: "error" })
    }
})
app.get("/", (req, res) => {
    res.send("hello api")
})
app.listen(PORT, () => console.log(`Server Listen ${PORT}`))