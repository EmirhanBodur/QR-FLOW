# QR-Flow 🚀

[![en](https://img.shields.io/badge/lang-en-red.svg)](#english) [![tr](https://img.shields.io/badge/lang-tr-blue.svg)](#türkçe)

---

<a id="english"></a>
## 🇬🇧 English

QR-Flow is a modern, multi-step web application that converts order numbers and operational data into high-resolution QR codes in seconds. Designed with a smart caching system that remembers the user, it streamlines repetitive QR generation tasks with minimal effort.

### ✨ Features

* **Smart Cache (Local Storage):** Users log in simply by entering their name. The system remembers them and directs them to their history upon the next visit.
* **Dynamic QR Generation:** Instantly generates high-resolution QR codes (Level H - 30% Error Correction) tailored to the entered order numbers.
* **History Panel:** Users can access all previously generated QR codes from a single screen and quickly switch between them.
* **Quick Export:**
  * 📥 **Download:** Save generated QR codes directly to the device as transparent PNGs with a single click.
  * 📋 **Copy to Clipboard:** Visually copy the QR code to the clipboard (can be pasted into any document with Ctrl+V).
* **Modern & Responsive UI:** Designed with Tailwind CSS for a minimalist and user-friendly UI/UX experience.
* **Help Modal:** An elegant, backdrop-blurred informational screen to guide users.

### 🛠️ Technologies Used

* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **QR Library:** `qrcode.react` (Canvas-based high-quality rendering)
* **Icons:** `lucide-react`

### 🚀 Installation & Setup

Follow these steps to run the project locally: