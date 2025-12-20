## 🗓️  DOM Task 13: Instagram Reels Project

### 📌 Overview
In this task, I built an **Instagram Reels–like scrolling section** using **HTML, CSS, and JavaScript**.  
All reels are generated dynamically using an **Array of Objects**, similar to how real backend/API data works in production applications.

---

### 🧠 Core Concepts Used
- DOM Manipulation
- Array of Objects (JSON-like data handling)
- Event Bubbling
- Event Delegation
- State Management using JavaScript objects
- Dynamic UI rendering

---

### ⚙️ Features Implemented
- Dynamic reels creation from data (no hardcoded HTML)
- Vertical scrolling reels layout
- Auto-playing videos
- Like / Unlike functionality with live count update
- Double-click to like (Instagram-style)
- Follow / Unfollow system
- Mute / Unmute video
- Play / Pause video
- Single parent event listener handling multiple actions

---

### 🧩 How It Works
- Reel data (username, video, likes, follow state, etc.) is stored inside an **array of objects**
- A single card structure is generated repeatedly using JavaScript
- All interactions (like, follow, mute, pause) update both:
  - UI (DOM)
  - Data (object state)
- Event bubbling is used to efficiently manage multiple actions without adding listeners to every element

---

### 🎯 Learning Outcome
This task helped me understand how **real-world applications like Instagram, Reels, and Shorts work internally**.  
I gained confidence in handling:
- Dynamic data
- Complex DOM interactions
- Multiple features with clean logic

---

### 🚀 Conclusion
This project was a big step toward real-world frontend development.  
DOM no longer feels confusing — it feels powerful.

