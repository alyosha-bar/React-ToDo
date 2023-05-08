import { useState } from "react"

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
    
        //check if the title is null
        if (newItem !== "") {
          onSubmit(newItem)
        } else {
          alert("Please Give Title to Task")
        }
        setNewItem("")
      }


    return <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item"> New Item: </label>
      <input type="text" 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        id="item"/>
      <button className="btn"> Add </button>
    </div>
  </form>
}