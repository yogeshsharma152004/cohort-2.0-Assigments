# 🟢 DOM Task 14 – Matrix Text Effect

This task demonstrates a **Matrix-style text hover effect** using **pure JavaScript (DOM) and CSS**, inspired by modern UI animations where text dynamically transforms before settling back to its original form.

---

## 🚀 Task Overview

When the user **hovers over the text**, each character:
- Randomly changes into alphabets (A–Z, a–z)
- Gradually resolves back to the **original text**
- Creates a smooth **Matrix hacking-style animation**

This effect is commonly seen in **portfolio websites, hero sections, and creative UI designs**.

---

## 🧠 Core Concept Used

- DOM Selection
- Event Handling (`mouseenter`)
- `setInterval()` for animation
- String manipulation
- Logic building using iteration control

---

## 🧩 How It Works (Logic Breakdown)

1. Select the paragraph element using `querySelector`
2. Store the original text
3. On mouse hover:
   - Start replacing characters randomly
   - Gradually increase iteration count
4. Once iteration reaches text length:
   - Original text fully restores

---

