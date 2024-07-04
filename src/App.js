import TodoList from './components/TodoList';
import './App.css';
import useState from 'react'
import TodoForm from './components/TodoForm';
function App() {
  const [todos,setTodos] = useState([]);

  const addTodo =(text)=>{
    setTodos([...todos,{id:Date.now(),text}])
  }
  const deleteTodo =(id)=>{
    setTodos(todos.filter(todo =>todo.id !==id))
  }
  const editTodo =(id,newText)=>{
    setTodos(todos.map(todo =>(todo.id === id ? {...todo,text:newText}:todo)))
  }
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
     <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );
}

export default App;
