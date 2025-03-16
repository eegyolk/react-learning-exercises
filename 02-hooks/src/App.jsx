import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import { TodoProvider } from './context/TodoContext'
import TodoTable from './components/TodoTable'

function App() {
  return (
    <ThemeProvider>
      <h1>Implementing Hooks in Todo App</h1>
      <ThemeToggle />
      <TodoProvider>
        <TodoTable />
      </TodoProvider>
    </ThemeProvider>
  )
}

export default App
