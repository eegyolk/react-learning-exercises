import { createContext, useReducer } from "react";

// Creating the context to manage Todo state
export const TodoContext = createContext();

export function TodoProvider({ children }) {
  // useReducer hook to manage state and dispatch actions
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Wrapping children components with TodoContext.Provider to pass state and dispatch function
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// Defining possible Todo statuses
export const TODO_STATUS = {
  NEW: "NEW",
  DONE: "DONE"
}

// Defining possible actions that can be performed on the Todo list
export const TODO_ACTION = {
  ADD: "ADD",
  EDIT: "EDIT",
  DELETE: "DELETE",
  SAVE: "SAVE",
  CANCEL: "CANCEL",
} 

// Initial state for the Todo list, including a few predefined Todo items
const initialState = {
  todos: [
    { id: 1, title: 'Fix Login Bug', desc: 'Investigate and resolve the login issue affecting some users.', status: TODO_STATUS.DONE, isEdit: false },
    { id: 2, title: 'Write API Documentation', desc: 'Create detailed API documentation for the new user authentication system.', status: TODO_STATUS.NEW, isEdit: false },
    { id: 3, title: 'Design Dashboard UI', desc: 'Sketch and prototype a new user dashboard interface.', status: TODO_STATUS.NEW, isEdit: false },
    { id: 4, title: 'Optimize Database Queries', desc: 'Refactor slow SQL queries to improve app performance.', status: TODO_STATUS.DONE, isEdit: false },
    { id: 5, title: 'Review PR #45', desc: 'Conduct a code review for pull request #45 before merging.', status: TODO_STATUS.NEW, isEdit: false }
  ]
};

// Reducer function to handle state changes based on dispatched actions
function todoReducer(state, action) {
  switch(action.type) {
    case TODO_ACTION.ADD:
      return {
        ...state,
        todos: [
          ...state.todos, {
            id: state.todos[state.todos.length -1].id + 1, // Generating a new ID
            ...action.payload, // Spreading the payload data (title, desc)
            status: TODO_STATUS.NEW, // New Todo item has a "NEW" status
            isEdit: false // New Todo item is not in edit mode
          }
        ]
      };

    case TODO_ACTION.EDIT:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.isEdit = true; // Set the selected Todo item to edit mode
          }

          return todo;
        })
      }

    case TODO_ACTION.DELETE:
      // Deleting a Todo item by filtering out the one with the matching ID
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id != action.payload.id)
      }

    case TODO_ACTION.SAVE:
      // Saving the updated Todo item with new data (title, desc, status)
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.desc = action.payload.desc;
            todo.status = action.payload.status;
            todo.isEdit = false; // Exit edit mode
          }

          return todo;
        })
      }

    case TODO_ACTION.CANCEL:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.isEdit = false; // Cancel edit mode and revert to the previous state
          }

          return todo;
        })
      }
  }
}
