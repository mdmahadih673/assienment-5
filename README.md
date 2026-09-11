# Dev Stack Builder

Dev Stack Builder is a simple React website where users can explore different technologies and create their own development stack.

## Live Site

[Live Site](https://assienment-5.vercel.app/)

## GitHub Repository

https://github.com/mdmahadih673/assienment-5

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Toastify
* React Icons
* Vite
* JSON

## Features

* Explore different technologies
* Add technology to your stack
* Remove individual technology
* Remove all technologies
* Prevent duplicate technology
* Show selected technology count
* Toast notifications
* Loading state
* Responsive design

## Project Structure

```text
Dev-Stack-Builder/
│
├── public/
│   └── technologies.json
│
├── src/
│   │
│   ├── assets/
│   │   ├── banner-stack.png
│   │   ├── hero.png
│   │   └── logo-text.png
│   │
│   ├── components/
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── Hero/
│   │   │   └── Hero.tsx
│   │   │
│   │   ├── Navbar/
│   │   │   └── Navbar.tsx
│   │   │
│   │   └── Technology/
│   │       ├── Technologies.tsx
│   │       ├── TechnologyCard.tsx
│   │       ├── YourStack.tsx
│   │       └── StackItem.tsx
│   │
│   ├── types/
│   │   └── TechnologyType.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# React Questions & Answers

## What is JSX, and why is it used in React?

**JSX** means JavaScript XML. It allows us to write HTML-like code inside JavaScript.

React-এ UI এবং components তৈরি করা easier এবং more readable করার জন্য JSX ব্যবহার করা হয়।

---

## What is the difference between props and state?

* **Props:** Props ব্যবহার করে Parent component থেকে Child component-এ data পাঠানো হয়। Child component সরাসরি props-এর value change করতে পারে না।
* **State:** State হলো component-এর নিজের data, যেটা প্রয়োজন অনুযায়ী update করা যায়। State change হলে React UI আবার update করে।

সহজভাবে বললে, **Props আসে Parent থেকে আর State manage হয় component-এর ভিতরে।**

---

## What does the useState hook do, and where did you use it in this project?

`useState` is a React Hook that helps us store and update changing data in a component.

এই project-এ user কোন কোন technology stack-এ add করেছে, সেই selected technologies-এর list manage করার জন্য `useState` ব্যবহার করেছি। Technology add বা remove করলে state update হয় এবং UI-তেও সেই change দেখা যায়।

---

## What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used for handling side effects, such as fetching data or working with external systems after rendering.

তবে এই project-এ JSON data load করার জন্য আমি `useEffect` ব্যবহার করিনি। এখানে `fetch()` দিয়ে JSON data load করেছি এবং React-এর `Suspense` ও `use()` ব্যবহার করে data handle করেছি।

---

## Why does every item in a .map() list need a unique key prop?

When we render a list using `.map()`, each item needs a unique `key`.

এতে React প্রতিটি item আলাদাভাবে identify করতে পারে। ফলে কোনো item add, remove বা change হলে React efficiently বুঝতে পারে কোন অংশটা update করতে হবে।

---

## What is conditional rendering? Show one place you used it (example: the empty stack message).

**Conditional rendering** means showing different UI based on a condition.

আমাদের project-এর **Your Stack** section-এ এটি ব্যবহার করেছি। যদি `selectedTechnologies.length === 0` হয়, তাহলে **"Your stack is empty"** message দেখায়। আর কোনো technology select করা থাকলে selected technologies-এর list দেখায়।

---

## How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent থেকে Child component-এ data পাঠানোর জন্য **props** ব্যবহার করা হয়।

আর Child থেকে Parent-এ কোনো data বা event পাঠানোর জন্য Parent component থেকে একটি **callback function** props হিসেবে Child-এ পাঠানো যায়। তারপর Child সেই function call করলে Parent-এর data update করা সম্ভব হয়।

এই project-এ technology add করার জন্য এই ধরনের **props and callback function** ব্যবহার করা হয়েছে।

---

## Author

**Md. Mahadi Hasan**

MERN Stack Web Developer

## License

This project was created for educational purposes.
