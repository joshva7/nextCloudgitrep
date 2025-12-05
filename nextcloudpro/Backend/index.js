const mongoose = require("mongoose")
const core = require('cors')
const express = require("express")
const nodemailer = require("nodemailer")
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
        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: false,
            auth: {
                // user: "9d6ae2001@smtp-brevo.com", // THIS MUST BE smtp-brevo.com login
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
                // pass: "bskUmXOgcTPz0ns"
            },
        });
        await transport.sendMail({
            from: process.env.MAIL_SENDER,
            to: Email,
            subject: "Successfully create your TunnelStorage account",
            text: `Hello ${userName} your account is activate to few hourse pleass wait thanks for useing our cloudservices 🐋`
        });
        res.status(201).json({ message: "user created & Email send" })
    } catch (e) {
        console.log(e);
        return res.status(400).send({ message: `${e} error` })
    }
})
app.get("/", (req, res) => {
    res.status(200).send("home page route")
})
app.get("/test-email", async (req, res) => {
    try {
        const info = await transport.sendMail({
            from: process.env.MAIL_SENDER,
            to: "yourgmail@gmail.com",
            subject: "SMTP Test",
            text: "SMTP working!"
        });
        res.send(info);
    } catch (err) {
        res.send(err);
    }
});

app.listen(PORT, () => console.log(`Server Listen ${PORT}`))