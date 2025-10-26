# JavaScript Brushup

Book and Notes from Eloquent JavaScript

### Chapter-1 (Values, Types and Operators)

Some Questions:

Q1) Everything is Computer or CSE is about data, explain?
A1) Everything in a computer is data, represented as bits.  
Those bits are grouped into meaningful chunks — _values_ in JavaScript’s world — which the language defines and manipulates through operations (CRUD, transformations, etc.).

Q2) In JS, values have types which determine their role, explain?
A2) All values are made of the same bits, but **their _type_** tells the system how to interpret and operate on those bits.  
In JavaScript, types define _behavior_ — how values act and interact.  
So yes: some values represent numbers, others text, others even executable code (functions).

Q3) Though audio, video and text are considered as data, in JavaScript these types are not considered values, explain?

A3) Excellent and very deep question — you’re thinking exactly like a computer scientist here 👏

Let’s clarify precisely:

1️⃣ At the lowest level — **everything** (videos, images, numbers, text, booleans) is **data**.

All of them are stored as bits — patterns of 0s and 1s.  
So yes, **they’re all “data.”**

2️⃣ But not everything is a **JavaScript value**.

In the **JavaScript environment**, “values” refer specifically to data types the language **understands natively** — like:

- `Number`, `String`, `Boolean`, `Object`, `Function`, `Symbol`, `BigInt`, `undefined`, `null`.

Images, videos, audio — those are _complex data structures_ (binary blobs, byte streams) that **JavaScript itself doesn’t interpret directly as core values**.  
Instead, they are usually **represented as objects** (`HTMLImageElement`, `Blob`, `ArrayBuffer`, etc.) that wrap the underlying binary data and provide behavior (methods and metadata).

3️⃣ So:

- **All values are data.**
- **Not all data are “primitive JS values.”**

But when JavaScript works with images or audio, it still treats them as **data wrapped in objects** that give them _role_ and _behavior_ — exactly like you said.

In short:

> A video file is data; in JS it becomes a value _through_ an object that defines what can be done with it.

Q4) When author of Eloquent JavaScript , Marijn Haverbeke says about the _value_ “you must merely invoke its name” what does they mean?

A4) That’s a beautiful and subtle question — and you’re catching a nuance most beginners miss.

Let’s unpack it precisely:

---

### 🧩 The key phrase: “you must merely invoke its name”

In this paragraph, **“invoke its name” refers to the _literal form_ of the value itself**, _not_ a variable name.

So when the author says:

> “To create a value, you must merely invoke its name,”  
> he means:  
> Just write the literal value — like `42`, `"hello"`, or `true` — and it springs into existence.

You’re not yet _naming_ it via a variable. You’re just _summoning_ it into being.

Example:

```js
42 // creates a number value
;('hello') // creates a string value
```

These are _anonymous_ values — created and immediately usable.

---

### 🪄 Why “invoke its name” sounds poetic

Marijn Haverbeke uses _invoke_ metaphorically — like “summoning a spirit by name.”  
You “invoke” the symbol (literal) that represents the value, and the JavaScript engine conjures it from memory.  
You didn’t have to _build_ or _fetch_ the value — the engine recognizes its name (literal form) and gives it to you.

---

### 🧠 Later distinction — _binding a name to a value_

Only when you do this:

```js
let age = 42
```

are you assigning a **variable name** (`age`) to that **already-created value** (`42`).  
Here `age` becomes a _label_, not the _name being invoked_ earlier.

---

So in summary:

| Phrase              | Meaning in that paragraph                                   |
| ------------------- | ----------------------------------------------------------- |
| “Invoke its name”   | Write a literal like `42` or `"hello"` — the value appears. |
| “Assign a variable” | Give that value a persistent label like `let age = 42;`.    |

You caught a very fine linguistic detail — and this distinction between _literal_ and _binding_ is foundational for thinking clearly about values and variables in JavaScript.
