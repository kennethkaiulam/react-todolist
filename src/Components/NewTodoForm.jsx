import { useState } from "react";


export function NewTodoForm({onSubmit}){
 const [newItem, setNewItem] = useState("");
 const [newNote, setNewNote] = useState("");
 

  function handleSubmit(e){
    e.preventDefault();
     
        onSubmit(newItem, newNote);  
        setNewItem("");
        setNewNote("");
    }
    return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} 
              name="title"
              onChange={e => setNewItem(e.target.value)} 
              type="text" 
              id="item"/>
        <label htmlFor="newNote">New Note</label>
        <textarea value={newNote} 
            
              onChange={e => setNewNote(e.target.value)} 
              id="newNote"
              type="note"/>
              

      </div>
      <button>Add</button>
    </form>
    )
}


export default NewTodoForm;