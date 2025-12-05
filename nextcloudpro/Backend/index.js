const mongo_DB = require("mongoose")
const core = require('cors')
const express = require("express")
const { default: mongoose } = require("mongoose")
const PORT = 8080
const app = express()
app.use(core());
app.use(express.json())
mongo_DB.connect("mongodb+srv://backendpro:b2hUc23siIXW13hX@backendproject.cctxcn8.mongodb.net/?appName=backendproject")
    .then(() => {
        console.log("Connect mongobd");
    })
    .catch((err) => console.log(err + "monogodb error"))
const mongoSchema = new mongo_DB.Schema({
    userName: String,
    Email: String,
    Password: String
})
const User = mongoose.model("UserInfo", mongoSchema)
app.post("/api/user", async (req, res) => {
    try {

        const { userName, Email, Password } = req.body;
        const newUser = await User({ userName, Email, Password });
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