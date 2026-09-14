# 🐝 Spelling Bee (v1.0.0)

A kid-friendly web-based **Spelling Bee** game designed for children and parents.

---

## Features

- **Voice-Powered Audio:** Uses the native **Web Speech API** to read words aloud at normal and slow speeds.
- **Retro Sound & Celebrations:** Powered by the **Web Audio API** for instant sound effects and a custom HTML5 Canvas confetti animation for big wins.
- **Integrated Keyboard Focus Trap:** Auto-focuses keyboard input anywhere on the screen so children never lose their place while typing.
- **Practice Missed Words:** Players can re-try only the words they misspelled in a special round, then easily return to the full list.
- **JSON List Management & Server Auto-Fetch:**
  - Automatically loads weekly word lists from a server-side `manifest.json`.
  - Supports loading local custom `.json` word lists.
  - Allows parents and kids to create and export new custom word lists directly to `.json`.
- **High Score Tracking:** Saves high scores and top times per player name using browser `localStorage`.
- **Built-in How to Play Modal:** Clear, accessible instructions for kids and non-technical users.

---

## Getting Started

### Quick Start (Local)
1. Download or clone this repository.
2. Open `index.html` directly in any modern web browser (Chrome, Edge, Safari, Firefox).

### Hosting on GitHub Pages
1. Push all files to a public GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and click **Save**.
4. Your game will be live at `https://<your-username>.github.io/<repository-name>/`.

---

## File Structure

```text
├── index.html              # Main game application & styles
├── logo.svg                # Header logo graphics
├── README.md               # Project documentation
└── word-lists/             # Directory for pre-loaded word lists
    ├── manifest.json       # Index file listing available weekly lists
    ├── week-1.json         # Example weekly word list
    └── week-2.json         # Example weekly word list
