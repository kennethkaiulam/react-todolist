import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
   const localValue = localStorage.getItem("ITEM");
   if (localValue == null)  return []
   return JSON.parse(localValue);
  })
  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem("NOTE");
  if (localValue == null)  return []
  return JSON.parse(localValue);
  })

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem("NOTE", JSON.stringify(notes))
  }, [notes])


  function addToDo(title){
    setTodos(currentTodos => { 
      return [
     ...currentTodos, {id: crypto.randomUUID(), title, completed: false}
    ]
   })
  }


  function addToNote(content){
    setNotes(currentNotes => { 
      return [
     ...currentNotes, {id: crypto.randomUUID(), content, completed: false}
    ]
   })
  }

  function addToState(title,content){
    if(title !== ""){
      addToDo(title);
    }
    if (content !== ""){
    addToNote(content);
    }
    console.log(notes);
    console.log(todos);
  }
  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
         return {...todo,completed}
        } else {
          return todo;
        }
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
      })
  }

  function toggleNote(id, completed){
    setNotes(currentNotes => {
      return currentNotes.map(note => {
        if (note.id === id){
         return {...note,completed}
        } else {
          return note;
        }
      })
    })
  }

  function deleteNote(id){
    setNotes(currentNotes => {
      return currentNotes.filter(note => note.id !== id)
      })
  }
  return (
    <>
     <NewTodoForm onSubmit={addToState}/>
     <h1 className="header">Notes</h1>
     <NotesList notes={notes} toggleNote={toggleNote} deleteNote={deleteNote}/>
     <h1 className="header">Todo List</h1>
     <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
     </>
  )

}

export default App;
