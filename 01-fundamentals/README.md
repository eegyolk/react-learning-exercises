# Fundamentals

## React Overview

React is a **JavaScript library** for building fast and interactive user interfaces. It follows a **component-based architecture**, allowing for reusable and maintainable UI elements.

## Why Use React?

- **Component-Based** – Build modular and reusable UI elements.
- **Virtual DOM** – Optimized rendering for better performance.
- **Declarative UI** – Define how UI should look, React handles updates.
- **State Management** – Manage dynamic data with `useState` and `useEffect`.
- **Strong Ecosystem** – Supports tools like React Router, Redux, and Next.js.
- **Cross-Platform** – Use with React Native for mobile apps.

## JSX

**JSX** is a **syntax extension for JavaScript** that is used in React to describe the UI structure. It looks similar to HTML but allows embedding JavaScript expressions inside `curly braces {}`.

**JSX uses HTML-like syntax** but allows JavaScript inside `{}` (e.g., `{props.name}`). JSX must have a single parent element, so wrap multiple elements inside `<div>` or `<>`.

```
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

JSX attributes **use camelCase** instead of HTML attribute names. Use `className `instead of `class`. Use `htmlFo`r instead of `for` for labels.

```
const Button = () => {
  return <button className="btn-primary" onClick={() => alert("Clicked!")}>Click Me</button>;
};
```

You can use **ternary operators (**`? :`**)** or **logical** `&&` **operators** to conditionally render elements.

```
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
  </div>
);
```

```
const hasNotifications = true;

return (
  <div>
    <h1>Dashboard</h1>
    {hasNotifications && <p>You have new messages.</p>}
  </div>
);
```

JSX can **dynamically render lists** using `.map()`. Always add a key when rendering lists to `improve React performance`.

```
const todos = ["Learn React", "Build Projects", "Contribute to Open Source"];

return (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ))}
  </ul>
);
```

## Components (Functional & Class)

Class components were the standard before React Hooks. They require the **_render()_** method and use **_this.state_** for state management.

```
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Component Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

React now recommends functional components with Hooks (**_useState_**, **_useEffect_**, etc.) for better performance and cleaner code.

```
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Functional Component Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

## Props vs. State

In React, **Props** and **State** are both used to manage and pass data within a component, but they serve different purposes.

**Props** are read-only and are used to pass data from a parent component to a child component. They make components reusable and dynamic. They are immutable. It follow a top-down (unidirectional) data flow.

```
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return <Greeting name="Alice" />;
}
```

**State** is used to manage data that changes over time within a component. Unlike props, state is mutable and can be updated using the **_useState_** hook in functional components.

```
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

```

Quick rule of thumb, if data needs to be shared then use **Props**, if data changes within a component then use **State**.
