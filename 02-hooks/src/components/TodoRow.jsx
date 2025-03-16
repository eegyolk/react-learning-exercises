import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TODO_ACTION, TODO_STATUS, TodoContext } from "../context/TodoContext";

function TodoRow({ todo }) {
  const { isDark } = useContext(ThemeContext); // Access the theme context to apply dark or light mode styles
  const { dispatch } = useContext(TodoContext) // Access the todo context to dispatch actions for updating tasks

  // References to input fields for title, description, and status (only used in edit mode)
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const statusRef = useRef(null);

  // Dispatch action to enable edit mode for the selected task
  function handleEditTask() {
    dispatch({
      type: TODO_ACTION.EDIT,
      payload: {
        id: todo.id
      }
    });
  }

  // Dispatch action to delete the selected task
  function handleDeleteTask() {
    dispatch({
      type: TODO_ACTION.DELETE,
      payload: {
        id: todo.id
      }
    });
  }

  // Dispatch action to save the edited task with updated title, description, and status
  function handleSaveTask() {
    dispatch({
      type: TODO_ACTION.SAVE,
      payload: {
        id: todo.id,
        title: titleRef.current.value,
        desc: descRef.current.value,
        status: statusRef.current.value
      }
    });
  }

  // Dispatch action to cancel the edit mode and revert changes
  function handleCancel() {
    dispatch({
      type: TODO_ACTION.CANCEL,
      payload: {
        id: todo.id
      }
    });
  }

  return (
    <tr key={todo.id} style={{ borderBottom: isDark ? "1px solid #fff" : "1px solid #333" }}>
      <td>{todo.id}</td>
      <td style={{ paddingLeft: "10px" }} align="left">{
        !todo.isEdit ?
          todo.title :
          <input ref={titleRef} type="text" defaultValue={todo.title} style={{ padding: "10px", marginInlineEnd: "10px" }} />
      }</td>
      <td style={{ paddingLeft: "10px" }} align="left">{
        !todo.isEdit ?
          todo.desc :
          <input ref={descRef} type="text" defaultValue={todo.desc} style={{ padding: "10px", marginInlineEnd: "10px" }} />
      }</td>
      <td style={{ paddingLeft: "10px" }} align="left">{
        !todo.isEdit ?
          todo.status :
          <select ref={statusRef} defaultValue={todo.status} style={{ padding: "10px", marginInlineEnd: "10px" }}>
            {Object.keys(TODO_STATUS).map(status => {
              return (
                <option key={status}>{status}</option>
              )
            })}
          </select>
      }</td>

      {/* Actions Column - Shows "Edit/Delete" buttons or "Save/Cancel" when editing */}
      <td>
        {
          !todo.isEdit ?
            <button onClick={handleEditTask} className="as-link" style={{ background: isDark ? "#fff" : "#333", color: isDark ? "#fff" : "#333", marginInlineEnd: "10px" }}>Edit</button> :
            <button onClick={handleSaveTask} className="as-link" style={{ background: isDark ? "#fff" : "#333", color: isDark ? "#fff" : "#333", marginInlineEnd: "10px"}}>Save</button>
        }
        {
          !todo.isEdit ? 
            <button onClick={handleDeleteTask} className="as-link" style={{ background: isDark ? "#fff" : "#333", color: isDark ? "#fff" : "#333" }}>Delete</button> :
            <button onClick={handleCancel} className="as-link" style={{ background: isDark ? "#fff" : "#333", color: isDark ? "#fff" : "#333" }}>Cancel</button>
        }        
      </td>
    </tr>
  )
}

export default TodoRow;
