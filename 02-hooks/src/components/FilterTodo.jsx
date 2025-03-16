import { useEffect, useRef } from "react";
import { TODO_STATUS } from "../context/TodoContext";

function FilterTodo({ filterBy }) {
  const allRef = useRef(null); // Reference for the "All" radio button to programmatically set it as checked on mount

  useEffect(() => {
    allRef.current.checked = true; // useEffect to set "All" as the default selected filter when the component mounts
  }, []);

  function handleOnChange(selected) {
    filterBy(selected) // Calls the filterBy function passed as a prop with the selected filter value
  }

  return (
    <div style={{ display: "inline-block", padding: "10px" }}>
      {/* Radio button for showing all todos, set as default using useRef */}
      <input ref={allRef} type="radio" onChange={() => handleOnChange("")} id="all" name="fav_language" value="All" /><label htmlFor="all">All</label>
      <input type="radio" onChange={() => handleOnChange(TODO_STATUS.NEW)} id="new" name="fav_language" value="New" /><label htmlFor="new">New</label>
      <input type="radio" onChange={() => handleOnChange(TODO_STATUS.DONE)} id="done" name="fav_language" value="Done" /><label htmlFor="done">Done</label>
    </div>
  )
}

export default FilterTodo;
