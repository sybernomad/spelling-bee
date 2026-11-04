# 🐝 Spelling Bee

A kid-friendly web-based **Spelling Bee** game designed for children and parents.

---

## Features

- **Three Game Modes:** 🐝 *Spelling Bee* (hear it, spell it), 🔀 *Scramble* (tap the jumbled letters in order) and 🧩 *Missing Letters* (fill in the gaps; the game hides vowels and vowel teams like `aw`, `ou`, `ow`, where the tricky spellings live).
- **Buzz the Bee:** A mascot with a speech bubble who cheers, wobbles and encourages the speller after every answer.
- **Honey Points & Bee Ranks:** First try = 10 honey, second = 6, third = 3, plus streak bonuses. Honey grows the player's rank from 🥚 Bee Egg up to 🌟 Spelling Legend.
- **Word Mastery Stars:** Each word earns a ⭐ when spelled right on the first try (3 stars = mastered) and loses one when missed. The setup screen shows "X / 12 mastered" for the week, and **🎯 Practice tricky words** quizzes only the words that aren't mastered yet.
- **Sticker Book:** 13 unlockable stickers (Hot Streak, Perfect Hive, Speedy Bee, Comeback Kid, Word Wizard, Full Week...).
- **School-Day Streak:** Counts days practiced in a row. Weekends never break the streak.
- **Progress Track & Hearts:** A bee flies toward the honey pot as words are completed; tries are shown as ❤️❤️❤️.
- **Voice-Powered Audio:** Uses the native **Web Speech API** to read words aloud at normal and slow speeds. A missed word is said and spelled out before moving on.
- **Crackle-Free Speech on Phones:** Sound effects (Web Audio) only run while a beep is actually playing and are put to sleep before the reader talks. A running AudioContext alongside speech was what made the voice crackle on mobile. Sound effects can also be turned off in Settings.
- **Learn, Then Spell:** Each new game can show the spelling first (toggle "Show me the words first"). The reader says the word, spells the letters, and reads a sentence when the list has one.
- **Same Sound, Different Spelling:** A word can include a sentence. In the quiz the reader says the word and the sentence, and the on-screen sentence hides the spelling so `wait` and `weight` stay distinct.
- **Practice Missed Words:** Re-try only the words that were missed, then return to the full list.
- **JSON List Management & Server Auto-Fetch:** Weekly lists load from `word-lists/manifest.json`; custom `.json` lists can be loaded or exported.
- **Per-Player Progress:** High scores, honey, stars and stickers are saved per player name in browser `localStorage` (per device/browser).

---

