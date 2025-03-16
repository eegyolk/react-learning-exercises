import { useContext, useMemo, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AddTodo from "./AddTodo";
import { TodoContext } from "../context/TodoContext";
import TodoRow from "./TodoRow";
import FilterTodo from "./FilterTodo";

function TodoTable() {
  const { isDark } = useContext(ThemeContext); // Get theme context to determine if dark mode is enabled
  const { state } = useContext(TodoContext); // Access the todo state from the TodoContext
  const [filterValue, setFilterValue] = useState(""); // State to track the selected filter value (NEW, DONE, or ALL)

  // useMemo ensures filteredTodos is only recomputed when filterValue or todos change
  const filteredTodos = useMemo(() => {
    return state.todos.filter(todo => (!filterValue ? true : todo.status === filterValue));
  }, [filterValue, state.todos]);

  // Function to update the filter value based on user selection
  function onFilterBy(filterBy) {
    setFilterValue(filterBy)
  }

  return(
    <div className="card" style={{ background: isDark ? "#333" : "#fff", color: isDark ? "#fff" : "#333" }}>
      {/* Top section containing the AddTodo form and FilterTodo component */}
      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
        <AddTodo />
        <FilterTodo filterBy={onFilterBy} />
      </div>
      
      {/* Table section displaying the list of todos */}
      <div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: isDark ? "#fff" : "#333", color: isDark ? "#333" : "#fff" }}>
            <tr>
              <th style={{ width: "10%" }}>#</th>
              <th style={{ width: "25%", paddingLeft: "10px" }} align="left">Title</th>
              <th style={{ width: "30%", paddingLeft: "10px" }} align="left">Description</th>
              <th style={{ width: "15%", paddingLeft: "10px" }} align="left">Status</th>
              <th style={{ width: "20%" }}>Actions</th>
            </tr>
          </thead>

          {/* Table body that dynamically renders rows based on filteredTodos */}
          <tbody>
            {filteredTodos.map(todo => {
              return <TodoRow key={todo.id} todo={todo} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoTable;
