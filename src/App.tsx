import { useState } from 'react'
import './App.css'

interface ToDoItemProps {
  content: string
}

const ToDoItem = ({ content }: ToDoItemProps) => {
  return (
    <li>
      <input type="checkbox" />
      <span>{content}</span>
    </li>
  )
}

function App() {
  const [todos, setTodos] = useState<string[]>([])

  const addToDo = () => {
    setTodos([
      ...todos,
      (document.getElementById('task-input')! as HTMLInputElement).value
    ])
  }

  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <ul id="task-list">
          {todos.map((value, i) => {
            return <ToDoItem content={value} key={i} />
          })}
        </ul>
        <div className="add-task">
          <input
            type="text"
            id="task-input"
            placeholder="Adicionar nova tarefa"
          />
          <button onClick={addToDo}>Adicionar</button>
        </div>
      </div>
    </>
  )
}

export default App
