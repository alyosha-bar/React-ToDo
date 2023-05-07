
import { useState } from "react"
import "./styles.css"

export default function App() {

  // destructuring 
  const [newItem, setNewItem] = useState("")
  const [todos, setToDos] = useState([]);


  function handleSubmit(e) {
    e.preventDefault()

    setToDos((currentTodos) => {
      return [
        ...currentTodos,
       {id: crypto.randomUUID(), title: newItem, 
       completed: false}, 
      ]
    })

    setNewItem("")
  }

  console.log(todos);

  function toggleTodo(id, completed) {
    setToDos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }


  function deleteTodo(id) {
    setToDos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  return <>
  <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item"> New Item: </label>
      <input type="text" 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        id="item"/>
      <button className="btn"> Add </button>
    </div>
  </form>
  <h1 className="header"> To Do List </h1>
  <ul className="list">
    {todos.map(todo => {
      return (
      <li key={todo.id}>
        <label>
        <input 
        type="checkbox" 
        checked={todo.completed}
        onChange = {e => toggleTodo(todo.id, e.target.checked)}
        />
        {todo.title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}> 
        Delete </button>
      </li>
      )
    })}
  </ul>
  </>
} 