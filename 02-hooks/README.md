# Hooks

This project uses **React Hooks** to manage state, handle side effects, and optimize performance. Below is a clear explanation of the hooks used and their purpose.

## React Hooks Overview

React **Hooks** allow functional components to manage state and lifecycle methods **without needing class components**. This project makes use of the following hooks:

| Hook             | Purpose                                                  | When to Use                                             |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------- |
| **`useContext`** | Access global state without props                        | Themes, authentication, shared data                     |
| **`useReducer`** | Manage complex state logic                               | When `useState` becomes too complex                     |
| **`useState`**   | Manage simple local state                                | Forms, toggles, modals, input values                    |
| **`useRef`**     | Reference elements without causing re-renders            | Input fields, persisting values, DOM manipulation       |
| **`useEffect`**  | Handle side effects like API calls or DOM updates        | Fetching data, updating the page title, event listeners |
| **`useMemo`**    | Optimize performance by memoizing expensive calculations | Filtering, sorting, caching computed values             |

---

## Hook Explanations & Usage

Below is a breakdown of how each hook is used in this project.

### `useContext` – Accessing Global State

**What it does:**
`useContext` allows components to **access shared state** without passing props down multiple levels.

**Example from Code:**

```js
const { isDark } = useContext(ThemeContext);
const { state, dispatch } = useContext(TodoContext);
```

**Used for:**

- Managing dark/light mode (`ThemeContext`).
- Accessing todos and actions (`TodoContext`).

### `useReducer` – Managing Complex State

**What it does:**
`useReducer` is an alternative to `useState` for **managing state with actions**.

**Example from Code:**

```js
const [state, dispatch] = useReducer(todoReducer, initialState);
```

**Used for:**

- Handling **todo actions** (add, edit, delete, save, cancel).
- Updating state using `dispatch({ type: TODO_ACTION.ADD, payload: {...} })`.

### `useState` – Managing Component State

**What it does:**
`useState` manages **local state inside components**.

**Example from Code:**

```js
const [filterValue, setFilterValue] = useState("");
```

**Used for:**

- Tracking **selected todo filter** (`NEW`, `DONE`, `ALL`).
- Updating filter dynamically using `setFilterValue(filterBy)`.

### `useRef` – Referencing DOM Elements

**What it does:**
`useRef` **stores references to DOM elements** without causing re-renders.

**Example from Code:**

```js
const titleRef = useRef(null);
const descRef = useRef(null);
const statusRef = useRef(null);
```

**Used for:**

- Accessing **input fields** (`titleRef.current.value`).
- Managing **focus on input fields** without re-rendering.

### `useEffect` – Handling Side Effects

**What it does:**
`useEffect` runs **code after rendering** (e.g., fetching data, updating UI).

**Example from Code:**

```js
useEffect(() => {
	allRef.current.checked = true; // Set "All" as the default filter
}, []);
```

**Used for:**

- **Setting default filter** when the component mounts.
- **Running cleanup code** if necessary.

### `useMemo` – Optimizing Expensive Computations

**What it does:**
`useMemo` **caches computed values** to prevent unnecessary re-renders.

**Example from Code:**

```js
const filteredTodos = useMemo(() => {
	return state.todos.filter((todo) =>
		!filterValue ? true : todo.status === filterValue
	);
}, [filterValue, state.todos]);
```

**Used for:**

- **Filtering todos efficiently**.
- Avoiding recalculations on every render.
