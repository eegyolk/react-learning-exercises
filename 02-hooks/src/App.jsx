import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <h1>Implementing Hooks in Todo Apps</h1>
      <ThemeToggle />
    </ThemeProvider>
  )
}

export default App
