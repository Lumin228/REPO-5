import { useState } from 'react'
import { useSelector } from 'react-redux';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const value = useSelector(state => state.tasks.items);
  console.log(value);
  
  return (
    <>
      <div>
        <ul>
          {value.map(task => {
            return <li>{task.text}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
