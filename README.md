# 🐝 Spelling Bee

A kid-friendly web-based **Spelling Bee** game designed for children and parents.

---

## Features

- **Voice-Powered Audio:** Uses the native **Web Speech API** to read words aloud at normal and slow speeds. Speech waits until the previous phrase has finished cancelling, avoids empty primer sounds, and keeps the slow speed in a range phone voices can play without crackling.
- **Learn, Then Spell:** Each new game shows the spelling first. The reader says the word, spells the letters, and reads a sentence when the list has one.
- **Same Sound, Different Spelling:** A word can include a sentence. In the quiz the reader says the word and the sentence, and the on-screen sentence hides the spelling so `wait` and `weight` stay distinct.
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
    ├── week-1.json         # Weekly word list (array of words)
    ├── week-2.json
    ├── week-3.json
    └── week-5.json         # Homophones, each with a context sentence

Word lists are a JSON array. Items can be a word string, or an object with `word` and `sentence` when the spelling depends on context:

```json
[
  "blade",
  {"word": "wait", "sentence": "Please wait for your turn."}
]
```
