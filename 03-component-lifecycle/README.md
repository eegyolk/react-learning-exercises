# Lifecycle

React components have different **lifecycle methods** in **Class Components** and **Functional Components**. This guide explains **how lifecycle methods work in both** with examples.

## Lifecycle Methods in React

The React lifecycle has **three main phases**:

`Mounting` – Component is **created and inserted into the DOM**.
`Updating` – Component **re-renders** when state or props change.
`Unmounting` – Component is **removed from the DOM**.

**Class Components use lifecycle methods**, whereas **Functional Components use Hooks** (`useEffect`).

### Lifecycle in Class Components

Class components have **built-in lifecycle methods** to handle these phases.

```js
import { Component } from "react";

class ClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		console.log("Constructor: Component is initialized.");
	}

	componentDidMount() {
		console.log("componentDidMount: Component is mounted to the DOM.");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(
			"componentDidUpdate: Component re-rendered due to state/prop change."
		);
	}

	componentWillUnmount() {
		console.log("componentWillUnmount: Component is being removed.");
	}

	render() {
		return (
			<div>
				<h1>Class Component</h1>
				<p>Count: {this.state.count}</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Increment
				</button>
			</div>
		);
	}
}

export default ClassComponent;
```

| Phase            | Method                 | Description                                       |
| ---------------- | ---------------------- | ------------------------------------------------- |
| **`Mounting`**   | constructor()          | Initializes state, runs once                      |
| **`Mounting`**   | componentDidMount()    | Runs after the component is inserted into the DOM |
| **`Updating`**   | componentDidUpdate()   | Runs when state or props change                   |
| **`Unmounting`** | componentWillUnmount() | Runs before component is removed                  |

---

### Lifecycle in Functional Components (Using Hooks)

Functional components **don’t have lifecycle methods**, but they achieve the same behavior using `useEffect`.

```js
import { useState, useEffect } from "react";

function FunctionalComponent() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("Component Mounted!");

		return () => {
			console.log("Component Unmounted!"); // Cleanup function (like componentWillUnmount)
		};
	}, []);

	useEffect(() => {
		console.log("Component Updated! Count:", count);
	}, [count]);

	return (
		<div>
			<h1>Functional Component</h1>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}

export default FunctionalComponent;
```

| Phase            | Equivalent to Class Lifecycle | `useEffect` Usage                                                                            |
| ---------------- | ----------------------------- | -------------------------------------------------------------------------------------------- |
| **`Mounting`**   | componentDidMount()           | `useEffect(() => {...}, [])` runs **only once**                                              |
| **`Updating`**   | componentDidUpdate()          | `useEffect(() => {...}, [dependency])` runs **when the dependency changes**                  |
| **`Unmounting`** | componentWillUnmount()        | `useEffect(() => {... return () => {...} }, [])` runs **cleanup function before unmounting** |

---

**Functional Components are preferred** because they are **simpler, more efficient, and easier to read**.
