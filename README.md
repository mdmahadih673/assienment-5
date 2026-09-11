# Dev Stack Builder

Dev Stack Builder is a simple website where users can explore different technologies and create their own stack.

##  Live Site

[Add your live site link here.](https://assienment-5.vercel.app/)

##  GitHub

https://github.com/mdmahadih673/assienment-5

##  Technologies

* React
* TypeScript
* Tailwind CSS
* React Toastify
* Vite
* React Icons
* JSON

##  Features

* See different technologies
* Add technology to stack
* Remove technology
* Remove all technologies
* Prevent duplicate technology
* Toast notification
* Responsive design
* Loading state

##  Project Structure

```text
src/
├── assets/
├── components/
├── types/
├── App.tsx
├── index.css
└── main.tsx

public/
└── technologies.json
```

---

#  React Questions & Answers

**1. What is JSX, and why is it used in React?**

> JSX হলো JavaScript-এর ভেতরে HTML-এর মতো কোড লেখার একটি সহজ মাধ্যম। এটি দিয়ে খুব সহজে UI ডিজাইন তৈরি করা এবং বোঝা যায়।

---

**2. What is the difference between props and state?**

> * **Props:** Parent থেকে Child কম্পোনেন্টে পাঠানো ডেটা (যা চেঞ্জ করা যায় না)।
>
> * **State:** কম্পোনেন্টের নিজস্ব ডেটা, যা পরিবর্তনের সাথে সাথে UI আপডেট হয়।
>
> *সহজ কথায়:* Props আসে বাইরে থেকে, আর State থাকে কম্পোনেন্টের ভেতরে।

---

**3. What does the useState hook do, and where did you use it in this project?**

> `useState` হলো পরিবর্তনশীল ডেটা ধরে রাখা ও আপডেট করার একটি মাধ্যম।
> এই প্রজেক্টে ইউজারের সিলেক্ট করা টেকনোলজির লিস্ট জমা রাখতে এবং তা যোগ/বাদ দেওয়ার কাজে এটি ব্যবহার করেছি।

---

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**

> `useEffect` ব্যবহার করা হয় API বা বাইরের কোনো সিস্টেমের সাথে কাজ করার জন্য।
> এই প্রজেক্টে JSON ডেটা লোড করতে `useEffect`-এর দরকার হয়নি; বরং `fetch()`-এর সাথে React-এর `Suspense` এবং `use()` অ্যাপোচ ব্যবহার করে কাজ সম্পন্ন করা হয়েছে।

---

**5. Why does every item in a .map() list need a unique key prop?**

> React যাতে সহজে বুঝতে পারে লিস্টের কোন আইটেমটি নতুন যোগ হলো, বাদ গেল বা পরিবর্তন হলো। এতে UI দ্রুত আপডেট হয়।
> *যেমন:* `<TechnologyCard key="{technology.id}" technology="{technology}"/>` (এখানে `technology.id` হলো Unique Key)।

---

**6. What is conditional rendering? Show one place you used it.**

> শর্তের (Condition) ওপর ভিত্তি করে স্ক্রিনে UI দেখানোটাই হলো Conditional Rendering।
> *যেমন:* "Your Stack" সেকশনে কোনো টেকনোলজি সিলেক্ট করা না থাকলে "Your stack is empty" দেখায়, আর সিলেক্ট করা থাকলে লিস্টটি দেখায়।
> `{selectedTechnologies.length === 0 ? <p>Your stack is empty.</p> : <List/>}`

---

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

> * **Parent থেকে Child:** Props-এর মাধ্যমে ডেটা পাঠানো হয়।
>
> * **Child থেকে Parent:** Parent একটি ফাংশন বানিয়ে Props হিসেবে Child-কে দেয়। Child কোনো অ্যাকশনে (যেমন বাটনে ক্লিক) সেই ফাংশনটি কল করে Parent-এ ডেটা পাঠায়।
>
> *যেমন:* `<TechnologyCard onAdd="{handleAddToStack}" technology="{technology}"/>`

---

##  Author

**Md. Mahadi Hasan**

MERN Stack Web Developer

##  License

This project was created for educational purposes.
