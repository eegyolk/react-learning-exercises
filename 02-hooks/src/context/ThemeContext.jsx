import { createContext, useEffect, useState } from 'react';

// Create a ThemeContext to manage dark/light mode across the application.
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // State to track the current theme (false = light mode, true = dark mode)
  const [isDark, setIsDark] = useState(false);

  // Effect to update the document's background color whenever isDark changes
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#333" : "#fff";
  }, [isDark]) // Only runs when isDark changes

  return (
    // Provide the theme state and updater function to child components
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
			{/* Wrapper div applies background and text color based on the theme */}
      <div style={{
				background: isDark ? "#333" : "#fff", 
				color: isDark ? "#fff" : "#000", 
				padding: "10px"
			}}>
        {children} {/* Render child components inside the provider */}
      </div>
    </ThemeContext.Provider>
  );
}
