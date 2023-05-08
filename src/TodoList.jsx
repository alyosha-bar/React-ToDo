import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return <>
    <ul className="list">
    <h1 className="header"> To Do List </h1>

    {/* Shortcircuiting */}
    {todos.length === 0  && "No todos"}

      {todos.map(todo => {
        return (
            //clean up a tad
            <TodoItem {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
        )
      })}
    </ul>
    </>
}