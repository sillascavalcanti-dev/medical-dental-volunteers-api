# Medical & Dental Volunteers API 🩺🦷

This is a backend project developed for **educational purposes**. The goal is to build a functional API using **Node.js** and **Express.js** to manage a network of medical and dental volunteers, aiming to support universal healthcare access.

---

## 📚 Learning Objectives
This repository is a "learning lab" where I am practicing:
* **Backend Development:** Building RESTful APIs with Express.js.
* **Middleware Logic:** Implementing custom validation layers for data integrity.
* **Environment Management:** Developing within **WSL (Ubuntu 24.04)** and using **GitHub CLI**.
* **Clean Code:** Standardizing naming conventions and project structure in English.

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Operating System:** Windows Subsystem for Linux (WSL) - Ubuntu 24.04
* **Tools:** Git, VS Code, GitHub CLI

## 📋 Features & Progress
- [x] Initial Express server setup.
- [x] **Contact Validation Middleware:** Checks for valid name, email (Regex), phone, and message length.
- [x] Duplicate entry prevention for emails and phone numbers.
- [ ] Integration with a database (Planned).
- [ ] Implementation of Zod/Joi for advanced schema validation (Planned).

## 🔧 How to Run localy

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/sillascavalcanti-dev/medical-dental-volunteers-api.git](https://github.com/sillascavalcanti-dev/medical-dental-volunteers-api.git)
   cd medical-dental-volunteers-api

2. **Install dependencies:**
   ```bash
   npm install
   
3. **Start the server:**
   ```bash
   npm run start
## 🛣️ Current Endpoints

**GET /api/volunteers**
Return all volunteers registed

**POST /api/volunteers**
Receives volunteer data.

Required fields: name, email, phone, message.

Validation: Returns 400 Bad Request for invalid formats.

## 📝 Author

Developed by *Sillas* as part of my backend development journey.

*"Coding is a marathon, not a sprint. Every commit is a step forward."*
