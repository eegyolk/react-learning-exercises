import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TODO_ACTION, TodoContext } from "../context/TodoContext";

function AddTodo() {
  const { isDark } = useContext(ThemeContext); // Access the theme context to apply dark or light mode styles
  const { dispatch } = useContext(TodoContext); // Access the TodoContext to dispatch actions for adding a new task

  // Create references for input fields to access their values without causing re-renders
  const titleRef = useRef(null);
  const descRef = useRef(null);
  
  function handleAddTask() {
    // Dispatch action to add a new todo with entered title and description
    dispatch({
      type: TODO_ACTION.ADD,
      payload: {
        title: titleRef.current.value,
        desc: descRef.current.value
      }
    });

    // Clear input fields after adding the task
    titleRef.current.value = "";
    descRef.current.value = "";
    titleRef.current.focus(); // Set focus back to the title input field for better user experience
  }

  return (
    <div style={{ display: "inline-block" }}>
      <input ref={titleRef} type="text" placeholder="Task title" className="add-todo" />
      <input ref={descRef} type="text" placeholder="Task description" className="add-todo" style={{ width: "350px" }} />
      <button onClick={handleAddTask} style={{ background: isDark ? "#fff" : "#333", color: isDark ? "#333" : "#fff" }}>Add Task</button>
    </div>
  )
}

export default AddTodo;
