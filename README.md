# 3D Calculator & Currency Market Price Web App

This document serves as a README-style guide for understanding, installing, and using the website project that includes a **3D-style calculator**, **currency price tracker**, and **theme switcher**.

---

## 📌 Project Overview

This web application combines two major features:

1. **A modern calculator** with history tracking, keyboard support, and a scientific square root function.
2. **A live currency price viewer** powered by the CoinGecko API, letting users track cryptocurrency values against fiat currencies.

Additionally, the website includes:

* A responsive UI layout.
* Light mode, dark mode, and a special glowing animated theme.
* A clean navigation header with icons.

---

## 📁 Project Structure

```
/project-root
│── index.html      # Main HTML layout
│── index.css       # Styling & themes
│── index.js        # Calculator logic + API + interactivity
│── assets/         # Images, icons (if applicable)
```

---

## 🧮 Features

### ✔ Calculator

* Supports addition, subtraction, multiplication, and division.
* Square root function.
* Click-based and keyboard input.
* Displays the last 5 calculations in a collapsible history panel.

### ✔ Currency Price Section

* Select between USD, EUR, or GBP.
* Choose from Bitcoin, Ethereum, or Solana.
* Automatically fetches prices from **CoinGecko**.
* Refreshes every **60 seconds**.

### ✔ Theme Options

* **Light Mode** (default)
* **Dark Mode**
* **Glowing Animated Background Mode**

---

## 🚀 How to Use

### 1. Open the Website

Open `index.html` in your browser.

### 2. Calculator

* Click on any button or type using your keyboard.
* Press `Enter` to calculate.
* Press `C` to clear.
* Use the √ button for square root.
* View recent history below the calculator.

### 3. Currency Market

* Choose a fiat currency from the first dropdown.
* Choose a cryptocurrency.
* Real-time price displays automatically.

---

## 🔧 Technologies Used

* **HTML5**: Structure
* **CSS3**: Styling, theming, animations
* **JavaScript (ES6)**: Logic, event handling, API integration
* **CoinGecko API**: Live crypto-to-fiat price data

---

## 🌐 API Endpoint Used

```
https://api.coingecko.com/api/v3/simple/price?ids={crypto}&vs_currencies={fiat}
```

* `{crypto}` → bitcoin / ethereum / solana
* `{fiat}` → usd / eur / gbp

---

## 🛠 Installation

No installation needed. Just open **index.html** in any modern browser.

If deploying online:

1. Upload the three files (`index.html`, `index.css`, `index.js`) to your hosting.
2. Ensure that all asset paths remain correct.

---

## 🎨 Screenshots (Optional)

You may add screenshots of the UI here.

---

## 📝 License

This is your private project; you may choose your preferred license (MIT, Apache, or None).

---

## 📞 Contact

If others use this project, they can contact you for help or suggestions.

---

**README generated based on your project files.**

