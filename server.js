require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const registrations = [
    {
        id: 1,
        name: "stub user",
        email: "stubemail@example.com",
        phone: 81912345678,
        mensage: "a mensage",
    },
];

app.use(express.json());

const validateContactData = (req, res, next) => {
    const name = req.body.name.trim();
    const email = req.body.email.trim().toLowerCase();
    const phone = req.body.phone.replace(/\D/g, "");
    const message = req.body.message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,11}$/;

    if (!name || name.length < 3) {
        return res
            .status(400)
            .json({ error: "Name must be at least 3 characters long." });
    }

    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format." });
    }

    if (!phone || !phoneRegex.test(phone)) {
        return res
            .status(400)
            .json({ error: "Phone must be 10 or 11 digits (only numbers)." });
    }

    if (!message || message.length > 500) {
        return res.status(400).json({
            error: "Message is required and limited to 500 characters.",
        });
    }

    req.body = { name, email, phone, message };

    next();
};

app.get("/voluteers", (req, res) => {
    res.status(200).json(registrations);
});

app.post("/voluteers", validateContactData, (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Aplication started on http://localhost:${PORT}`);
});
