# 📹 Missing Frames Detector (React + Vite)

This is a simple React + Vite project that detects missing video frames from a list of received frame numbers.

---

## 🚀 Features

- Detects missing frame ranges.
- Finds the longest missing range.
- Counts total missing frames.
- Simple UI (all code inside `App.jsx`).

---

## 📦 Installation & Setup

1. Clone this repo or create the project using Vite:
   ```bash
   npm create vite@latest missing-frames-app
   cd missing-frames-app
   npm install
   ```

## Run the development server:

- npm run dev

### Open the app in your browser:

- http://localhost:5173/

## 📂 Project Structure

- missing-frames-app/
  ├─ src/
  │ ├─ App.jsx # Main application logic + UI
  │ └─ main.jsx # React entry point
  ├─ index.html
  ├─ package.json
  └─ README.md

## ✨ Usage

- Enter frame numbers (comma separated) into the input field.
- Example:
- 1,2,3,5,6,10,11,16

## Click Detect Missing Frames.

# The app will show:

- All missing frame ranges.
- The longest missing range.
- Total number of missing frames.
