# Redux Counter App

This is a simple **React + Redux Toolkit** based counter application. It demonstrates basic concepts of Redux like state management, actions, reducers, and dispatching actions from components.

---

## 🚀 Features

- Increment count
- Decrement count
- Reset count
- Increment by a custom value (e.g. 5)

---

## 📂 Project Structure

src/
├── app/
│ └── store.js
├── features/
│ └── counter/
│ ├── CounterView.js
│ └── counterSlice.js
├── App.js
└── index.js

---

## 🛠️ Technologies Used

- React
- Redux Toolkit
- React Redux

---

## 📦 Installation

```bash
git clone https://github.com/Saddam2508/redux-toolkit.git
cd redux-counter-app
npm install
npm start
```

## 🧠 How it works

```
counterSlice.js: Contains Redux state logic with createSlice.

store.js: Configures the Redux store.

CounterView.js: React component that displays the counter and dispatches actions.

```
