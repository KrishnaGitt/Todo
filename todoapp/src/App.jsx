import { useState } from 'react'
import TodoApp from './TodoApp'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-wrapper">
      <TodoApp />
    </div>
  )
}

export default App
