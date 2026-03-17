# 🍰 The Pastry Place – QR-Based Digital Ordering System (React)

A modern **QR-based digital menu and order management system** built using **React.js**, designed for cafes and bakeries to streamline customer ordering and data collection.

---

## 🚀 Live Demo

🔗 https://thepastryplace.vercel.app

## 📌 Overview

The Pastry Place is a **contactless ordering system** where customers can scan a QR code to:

* Browse categorized menu items
* See products with price
* can register for future update from the store

Orders are stored in **Google Sheets** via **Google Apps Script**, acting as a lightweight backend.

---

## 🎯 Key Idea

> Replace traditional menus with a **smart digital ordering experience**

This project simulates a **real-world SaaS product for cafes and bakeries**.

---

## 🧩 Features

### 📱 QR-Based Access

* Instant access via QR scan
* No login / app required

---

### 🍰 Dynamic Menu System

* Built using React state & components
* Categories:

  * No-Bake Cheesecakes
  * Baked Cheesecakes
  * Tiramisu
  * Brownies
  * booking section -- cookies
                    -- cakes

---


### 👤 Customer Data Handling

* Name
* Phone number
* Date of birth

👉 Bonus:

* Auto reminder date (5 days before DOB)

---

### 📤 Order Submission

* Uses `fetch()` to send data
* Google Apps Script acts as API
* Stores structured data in Google Sheets

---

## 🏗️ Tech Stack

* **React.tsx** – Component-based UI
- Vite
- TypeScript
- shadcn-ui
* **Tailwind CSS** – Styling
* **Google Apps Script** – Backend API
* **Google Sheets** – Database
* **Vercel** – Deployment

---


## ⚙️ How It Works

1. User scans QR code
2. React app loads instantly
3. Menu rendered dynamically
4. On **Register now**:

   * Data is sent to Google Apps Script
   * Stored in Google Sheets

---

## 🚀 Future Enhancements

* Admin dashboard (analytics + order tracking)
* Payment gateway integration
* Real-time notifications
* Improved UI/UX (premium design system)
* Role-based access (admin/staff)

---

## 💡 What This Project Demonstrates

* React state management
* Component-based architecture
* API integration using `fetch()`
* Real-world product thinking
* Google Sheets as database alternative

---

## 👨‍💻 Author

Developed by **Ritika Sonkar**
Frontend Developer | Building real-world web applications

---

## ⭐ Support

If you like this project:

* Star ⭐ the repository
* Share feedback
* Contribute improvements

---





