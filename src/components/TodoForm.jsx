import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [text,setText]=useState('')
    const handleSubmit=(e)=>{
       e.preventDefault();
       addTodo(text)
       setText('')

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          value={text}
          onChange={(e)=>setText(e.target.value)} />
          <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm