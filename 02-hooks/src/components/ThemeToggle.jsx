import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  // Access the theme state and updater function from ThemeContext
  const { isDark, setIsDark } = useContext(ThemeContext);

  // Function to toggle between dark and light mode
  function onClickHandler() {
    setIsDark(!isDark); // Switches the theme state (true <-> false)
  }

  return (
    // Button to toggle the theme, dynamically changing its background and text color
    <button onClick={onClickHandler} style={{ background: isDark ? "#fff" : "#333", color: isDark ? "#333" : "#fff" }}>
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  )
}

export default ThemeToggle;
