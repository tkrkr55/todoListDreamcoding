import React, { useState } from 'react'
import Todo from '../Todo/Todo'
import TodoAdd from '../TodoAdd/TodoAdd'



export default function TodoList({list}) {
  const[todos,setTodos] = useState([
    {
      id:1,
      text:'리액트공부',
      status:'active'
    },
    {
      id:2,
      text:'프론트엔드의 꽃 ',
      status:'active'
    }
  ])
  const itemList = (todo)=>{setTodos([...todos,todo])}
  const handleUpdate = (Update)=>{setTodos(todos.map((t)=>(t.id === Update.id?Update:t)))}
  const handleDelete = (Delete)=>{setTodos(todos.filter((t)=>t.id !== Delete.id))}
  
  const listed = getFilteredItems(todos,list)
  return (
    <section>
      <ul>
        {
          listed.map((item)=>(
          <Todo key={item.id} todo={item}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          />
          ))
        }
      </ul>
      <TodoAdd onAdd={itemList}/>      
    </section>
    
  )
}

function getFilteredItems(todos,list){
  if(list ==='all'){
    return todos;

  }
  return todos.filter((todo)=> todo.status === list)
}