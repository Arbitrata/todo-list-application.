import React,{useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function Todolist() {
    const [todos, setTodos]=useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos =[todo, ...todos];
setTodos(newTodos);

    };


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
     <h2> hello there... how is your day planned </h2>

<TodoForm onSubmit={addTodo}/>
<Todo todos ={todos} updateTodo={upadtedTodo}  completeTodo={completeTodo} 
 removeTodo={removeTodo}  />
    </div>
  )
}

export default Todolist