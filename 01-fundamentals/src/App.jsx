import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)
  const [showProfile, setShowProfile] = useState(false); // A react hook that manages local state, more of this in the next lesson.

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
        { /**
          * A button that toggles the visibility of the Profile component.
          * When clicked, it updates the `showProfile` state to either show or hide the profile.
          */
        }
        <button onClick={() => setShowProfile(!showProfile)}>
          {/* Changes button text based on the `showProfile` state */}
          { showProfile ? "Hide Profile Image" : "Show Profile Image" }
        </button>
        {/* Conditionally renders the Profile component if `showProfile` is true */}
        { showProfile && <Profile /> }
      </div>
    </>
  )
}

export default App
