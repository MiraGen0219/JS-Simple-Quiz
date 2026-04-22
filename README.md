# 🧠 JavaScript Fundamentals Quiz App

## ✍️ Author  
E. Ermine  

---

## 📌 Table of Contents
- Introduction  
- Features  
- Prerequisites  
- Installation  
- Usage  
- Project Structure  
- Key JavaScript Concepts Used  
- Styling & UI Design  

---

## 📖 Introduction
This project is a **JavaScript Quiz Application** built using HTML, CSS, and vanilla JavaScript. It presents users with multiple-choice questions, tracks progress, provides instant feedback, and calculates a final score.

The application demonstrates core front-end development skills including DOM manipulation, event handling, conditional logic, and state management.

---

## ✨ Features
- Dynamic question rendering from a JavaScript array of objects  
- Multiple-choice question system  
- Instant visual feedback:
  - 🟢 Green = correct answer  
  - 🔴 Red = incorrect selection  
- Score tracking system  
- Prevents multiple selections per question  
- Next button locks until an answer is selected  
- Final score screen with restart option  
- Dynamic button text (“Next Question” → “Finish Quiz”)  
- Clean UI with hover and disabled states  

---

## 🧰 Prerequisites
To run this project locally:

- A modern web browser (Chrome, Firefox, Edge, etc.)  
- Optional: VS Code or any code editor  

---

## 🚀 Usage
1. Open `index.html` in your browser  
2. Answer each multiple-choice question by clicking an option  
3. Immediate feedback will be shown:  
   - 🟢 Green = correct answer  
   - 🔴 Red = incorrect answer  
4. Click **Next Question** to proceed  
5. On the final question, the button changes to **Finish Quiz**  
6. View your final score on the results screen  
7. Click **Restart Quiz** to play again  

---

## 📁 Project Structure
js-quiz-app/
│
├── index.html # Main HTML structure
├── style.css # Styling and UI design
├── script.js # Quiz logic and interactivity
└── README.md # Project documentation

---

## 🧠 Key JavaScript Concepts Used

### State Management
- `currentQuestionIndex` tracks progress  
- `score` tracks correct answers  
- `answered` prevents multiple selections  

### DOM Manipulation
- `getElementById()` for selecting elements  
- `innerHTML` for dynamic updates  
- `createElement()` and `appendChild()` for building UI  

### Event Handling
- Click events for answer buttons  
- Click event for Next/Finish button  
- Click event for Restart button  

### Conditional Logic
- Checks correct vs incorrect answers  
- Controls button enabling/disabling  
- Switches button text dynamically at the end  

---

## 🎨 Styling & UI Design
- Centered quiz container with clean layout  
- Blue background for main quiz section  
- Hover effects for interactive buttons  
- Disabled button styling for better UX feedback  
- Hidden score screen until quiz completion  
- Color-coded answer feedback:
  - 🟢 Green = correct  
  - 🔴 Red = incorrect  

---
