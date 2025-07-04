# 🛒 SuperMarket System (Tkinter Edition)

Welcome to the **SuperMarket System**, a Python-Tkinter GUI application designed as a simple supermarket billing and checkout system. This is a basic training project meant to explore GUI concepts in Python, file saving, and a dash of authentication. No databases, no APIs, no rocket science. Just good ol' GUI spaghetti.

> ⚠️ **Warning:** This project contains hard-coded prices, hard-coded authentication, and a hard-coded desire to learn better practices in the next project.

---

## 📦 Features

* Food, Household, and Electronics categories
* Quantity selection per item
* Textarea for generating invoices
* Print and Save invoice (to a `.txt` file)
* Basic login screen (username: `ahmad`, password: `12345`)

---

## 🚀 Usage


📦 Downloading This Project Only
This project is part of a larger repository, but you can download only the SuperMarket folder by using GitHub Downloader:

👉 Click here to download just the folder:
[Download SuperMarket Folder](https://github.com/ahmadharbi0x1337/simple_projects_-1/tree/main/SuperMarket)

This will download a ZIP file containing only the files from the SuperMarket directory – no need to clone the whole repo!


1. Extract The Zip folder 
```
unzip filename.zip
```

2. Naviaget to the folder

```
cd SuperMarket/
```

3. It's Better to run in virtual-env

```
python -m venv venv
```

4. Activate the virtual env (Mostly same for Windows and Linux)

```
source venv/bin/activate
```

5. Install dependencies

```
pip install -r requirements.txt
```

3. Run the login screen

```
python app.py
```

4. Enter The credentials, click login and the main application will open
---

## 🔐 Credentials

> Username: `ahmad`
> Password: `12345`

Yes, it's hard-coded. No, you can't hack the Pentagon with it.

---

## 📂 Project Structure

```
SuperMarket/
├── app.py                 # Login window
├── super.py               # Main supermarket billing system
├── assets/                # Icons and images
├── README.md              # You're reading this!
├── notes.txt              # Dev notes, thoughts, regrets
└── requirements.txt       # dependencies
```

---

## 📓 Developer Notes (aka "The Confession Corner")

* 🤦‍♂️ I didn't figure out how to make the saved invoice `.txt` files pretty enough yet.

  * Maybe in the next project, with a sprinkle of string formatting magic.

* 😩 The `place()` method in Tkinter is a pain in the neck.

  * Next time: it's either `pack()` or `grid()`, I swear.

* 🕵️ The search button? Yeah... not gonna happen.

  * No database, no search. Let’s pretend that was a design choice.

* 🍼 This is a **very basic project**.

  * I’ll try to go a little advanced in the next round. Maybe SQLite? Flask?

### ✅ Final Closure Notes:

1. ❌ Don’t use `place()` method. It’ll place you into therapy, yet again suffering teach to appreciate and learn more!
2. 🌀 The Textarea scroller takes over its entire parent frame like it's paying rent. Be careful.
3. 💸 Prices are hard-coded. Yes, I know. I wrote it twice to remember for next time.
4. 🔧 I should aim to create a **dynamic system** to add items with categories and prices.

   * Easier said than done, but dreams cost nothing.
5. 🔐 Login is also hard-coded, making it *slightly* worthless... But hey, this is training wheels territory.

---

## 🙏 Acknowledgements

Thanks to coffee, stackoverflow, and late-night debugging marathons. This project was made purely to learn, make mistakes, and have fun while doing it.

Feel free to fork it, laugh at it, or build on it! 😄

---


## 📬 Contact

**Made by Ahmad Alharbi**
[Facebook](https://www.facebook.com/ahmed.al.harbi.229706/) | [Telegram](https://t.me/ahmadharbi0x1337) | [GitHub](https://github.com/ahmadharbi0x1337)

