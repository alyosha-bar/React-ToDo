
import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  // destructuring 
  //pass in function into useState instead of default
  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    
    //if empty return default
    if (localValue == null) return []

    //actual return
    return JSON.parse(localValue)
  })


  //runs every time "todos" changes
  useEffect(() => {
    //save to JSON local storage
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTodo(title) {
    setToDos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

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
    <NewTodoForm onSubmit={addTodo} />
    <TodoList todos ={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
} 