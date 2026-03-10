require("dotenv").config();
const express = require("express");

const app = express();

const registrations = [
    {
        id: 1,
        name: "lorena",
        email: "lorenaemail@example.com",
        phone: 81912345678,
        mensage: "a mensage",
    },
];

app.use(express.json());

app.get("/voluteers", (req, res) => {
    res.status(200).json(registrations);
});

app.post("/voluteers", (req, res) => {
    const { name, email, phone, message } = req.body;

    const newVoluteers = {
        id: registrations.length + 1,
        name,
        email,
        phone,
        message,
    };

    registrations.push(newVoluteers);
    res.status(201).json(newVoluteers);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Aplication started on http://localhost:${process.env.PORT}`);
});
