import React,{useState} from 'react'
import TodoForm from './TodoForm'


function Todo({todos, handleChange, completeTodo ,removeTodo, updateTodo   }) {

    const[edit,setEdit]= useState({
    id:null,
    value :'',
});



const submitUpdate = value =>{
    updateTodo(edit.id , value)
    setEdit({
        id:null,
        value:''
    })
}
if (edit.id) {
    return  <TodoForm  edit={edit} onSubmit={submitUpdate} />
    }

return todos.map((todo  , index ) =>(

    <div
     className={todo.isComplite ? 'todo-row complete':'todo-row'}  
     key={index}
    > 


<div key={todo.id} onClick ={()=> completeTodo(todo.id)}>
    {todo.description}


</div>

  <div className=''>

        <input 
        className="form-check-input  m-2" 
        style={{margin:"0 10px"}}
         type="checkbox" 
         value="" 
         id="flexCheckDefault"
          checked={todos.done}
          onChange={()=>handleChange(todo.id)}
           />
           <span style={{textDecoration:"lineThrough"}}  >{todo.title}</span>

  <button type='button' onClick={()=> setEdit({id:todo.id , value:todo.text})} className="btn btn-warning" > Edit </button>

      <button onClick={()=>removeTodo(todo.id)} className="btb btn-danger m-2 "type='button' >delete</button>
  </div> 

</div>

 ));








}


export default Todo