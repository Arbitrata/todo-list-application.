import React,{useState ,useEffect} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import pic1 from "../components/Image/todome.png"
import axios from "axios"



function Todolist() {
    const [todos, setTodos]=useState([]);
     const [setError]=useState(null);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return 

        }
        const newTodos =[todo, ...todos];
setTodos(newTodos);




    };
   
    const getTodos = () => {
        axios.get('https://my-json-server.typicode.com/arbitrata/my-server/todos')
          .then(res => setTodos(res.data))
          .catch( error => setError(error.message));
      }
      useEffect(()=>{
    getTodos();
    
      }, []);    

    const upadtedTodo =(todoId ,newValue) => {

        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
    };



    const removeTodo =id =>{
        const removeArr =[...todos].filter(todo => todo.id !==id)
        setTodos(removeArr)
    }
    const handleCheckboxChange=(id)=>{
        const newTodolist=todos.map(todo => {
            if (todo.id===id) 
return {...todo ,done:!todo.done}
    return todo;
        })
       setTodos(newTodolist)
    }

const completeTodo= id =>{
    let upadtedTodo = todos.map(todo => {
        if (todo.id === id) {
todo.iscomplete =!todo.iscomplete            
        }
        return todo
    })
    setTodos(upadtedTodo)

}

  return (
    <div className='w-200'>
        <div className='d-flex justify-content-center'>
          <img src={pic1} alt="todo pic" />

     <h2> hello there... how is your day planned </h2>
     </div>
<TodoForm onSubmit={addTodo} />
<Todo todos ={todos} updateTodo={upadtedTodo} handleChange={handleCheckboxChange} completeTodo={completeTodo} 
 removeTodo={removeTodo}  />
    </div>
  )
}

export default Todolist