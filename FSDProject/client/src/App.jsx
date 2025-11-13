import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<h1>Home Page</h1>}/>
          <Route path = "/" element = {<h1>About Page</h1>}/>
          <Route path = "/" element = {<h1>Home Page</h1>}/>
          <Route path = "/" element = {<h1>Home Page</h1>}/>
          <Route path = "/" element = {<h1>Home Page</h1>}/>
        </Routes>
        </BrowserRouter>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App