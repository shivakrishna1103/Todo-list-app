import React, { useState } from 'react'

const TodoItem = ({todo,deleteTodo,editTodo}) => {
const [isEditing,setIsEditing]= useState(false);
const [newText,setNewText]=useState(todo.text);
const handleEdit =()=>{
    setIsEditing(true);
}
const handleSave =()=>{
    editTodo(todo.id,newText);
    setIsEditing(false)
}

  return (
    <div>
        {isEditing?(<input type="text" value={newText} onChange={(e)=>setNewText(e.target.value)}/>):(
            <span>{todo.text}</span>
        )}
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleSave}>Save</button>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem