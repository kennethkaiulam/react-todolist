export  function NoteItem({completed, id, content, toggleNote, deleteNote}){
    return (
        <li> 
            <label>
                <input type="checkbox" 
                    checked={completed} 
                    onChange={e => toggleNote(id, e.target.checked)} 
                /> 
                {content} 
            </label>
            <button className="btn-btn-danger"  
                onClick={() => deleteNote(id)}
            >
        Delete
    </button>
    </li>
    )
    }       
    
export default NoteItem;